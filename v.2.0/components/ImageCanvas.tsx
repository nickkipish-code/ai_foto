'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Download, Loader2, ZoomIn, ZoomOut, RotateCw, Move, X } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'

interface ImageCanvasProps {
  imageUrl: string | null
  loading?: boolean
}

export default function ImageCanvas({ imageUrl, loading }: ImageCanvasProps) {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  
  const [downloading, setDownloading] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (!imageUrl || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = 'anonymous'
    
    img.onload = () => {
      imageRef.current = img
      
      const container = containerRef.current
      if (container) {
        const rect = container.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
      }
      
      setImageLoaded(true)
      drawImage()
    }
    
    img.onerror = () => {
      console.error('Ошибка загрузки изображения')
      setImageLoaded(false)
    }
    
    img.src = imageUrl
  }, [imageUrl])

  useEffect(() => {
    if (imageLoaded) {
      drawImage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scale, position, rotation, imageLoaded])

  const drawImage = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const img = imageRef.current
    
    if (!canvas || !ctx || !img) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.scale(scale, scale)
    ctx.translate(position.x / scale, position.y / scale)
    
    const imgAspect = img.width / img.height
    const canvasAspect = canvas.width / canvas.height
    
    let drawWidth = canvas.width * 0.9
    let drawHeight = canvas.height * 0.9
    
    if (imgAspect > canvasAspect) {
      drawHeight = drawWidth / imgAspect
    } else {
      drawWidth = drawHeight * imgAspect
    }
    
    ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight)
    ctx.restore()
  }, [scale, position, rotation])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleZoom = (delta: number) => {
    setScale(prev => Math.max(0.1, Math.min(5, prev + delta)))
  }

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360)
  }

  const handleReset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
    setRotation(0)
  }

  const handleDownload = async () => {
    if (!canvasRef.current || !imageUrl) return

    setDownloading(true)
    try {
      const exportCanvas = document.createElement('canvas')
      const img = imageRef.current
      
      if (img) {
        exportCanvas.width = img.width
        exportCanvas.height = img.height
        const ctx = exportCanvas.getContext('2d')
        
        if (ctx) {
          ctx.drawImage(img, 0, 0, img.width, img.height)
          
          exportCanvas.toBlob((blob) => {
            if (blob) {
              const url = window.URL.createObjectURL(blob)
              const a = document.createElement('a')
              a.href = url
              a.download = 'virtual-fitting-room-result.png'
              document.body.appendChild(a)
              a.click()
              document.body.removeChild(a)
              window.URL.revokeObjectURL(url)
            }
          }, 'image/png')
        }
      }
    } catch (error) {
      console.error('Ошибка скачивания:', error)
    } finally {
      setDownloading(false)
    }
  }

  if (loading) {
    const [loadingStep, setLoadingStep] = useState(0)
    const steps = [
      '✨ Генерируем ваш образ...',
      '🤖 AI подбирает освещение...',
      '👗 Создаём примерку...',
      '🎨 Финальная обработка...'
    ]

    useEffect(() => {
      const interval = setInterval(() => {
        setLoadingStep(prev => (prev + 1) % steps.length)
      }, 2000)
      return () => clearInterval(interval)
    }, [])

    return (
      <div className={`w-full h-full flex items-center justify-center glass rounded-lg border-2 ${
        theme === 'neon' 
          ? 'border-pink-500/50 bg-gradient-to-br from-pink-500/10 to-purple-500/10' 
          : 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
      }`}>
        <div className="text-center p-8">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center relative ${
              theme === 'neon'
                ? 'bg-gradient-to-br from-pink-500/30 to-purple-500/30 shadow-[0_0_50px_rgba(236,72,153,0.5)]'
                : 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 shadow-2xl'
            }`}>
              <Loader2 className={`w-12 h-12 animate-spin ${theme === 'neon' ? 'text-pink-300' : 'text-purple-300'}`} />
              
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{
                  borderTopColor: theme === 'neon' ? '#ec4899' : '#a855f7',
                  borderRightColor: theme === 'neon' ? '#a855f7' : '#ec4899',
                }}
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          </motion.div>
          
          <motion.p
            key={loadingStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-lg font-semibold mb-2 ${theme === 'neon' ? 'text-pink-300' : 'text-purple-300'}`}
          >
            {steps[loadingStep]}
          </motion.p>
          <p className="text-gray-400 text-sm">
            Это может занять до 30 секунд
          </p>
        </div>
      </div>
    )
  }

  if (!imageUrl) {
    return (
      <div className={`w-full h-full flex items-center justify-center glass rounded-lg border-2 border-dashed ${
        theme === 'neon' 
          ? 'border-pink-500/30 bg-gradient-to-br from-pink-500/5 to-purple-500/5' 
          : 'border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-pink-500/5'
      }`}>
        <div className="text-center p-8">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse' as const,
            }}
          >
            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
              theme === 'neon'
                ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20 shadow-[0_0_30px_rgba(236,72,153,0.3)]'
                : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
            }`}>
              <Loader2 className={`w-10 h-10 ${theme === 'neon' ? 'text-pink-400' : 'text-purple-400'}`} />
            </div>
          </motion.div>
          <p className={`text-lg font-semibold mb-2 ${theme === 'neon' ? 'text-pink-300' : 'text-gray-200'}`}>
            ✨ Ваш примерочный результат
          </p>
          <p className="text-gray-400 text-sm">
            появится здесь после генерации
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full glass rounded-lg p-4 flex flex-col">
      <div className={`flex items-center justify-between mb-4 p-2 rounded-lg ${
        theme === 'neon' 
          ? 'bg-black/30 border border-pink-500/30' 
          : 'bg-black/20'
      }`}>
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => handleZoom(-0.1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded text-gray-400 hover:text-white transition-all"
            title="Уменьшить"
          >
            <ZoomOut className="w-4 h-4" />
          </motion.button>
          
          <span className="text-sm text-gray-400 min-w-[3rem] text-center">
            {Math.round(scale * 100)}%
          </span>
          
          <motion.button
            onClick={() => handleZoom(0.1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded text-gray-400 hover:text-white transition-all"
            title="Увеличить"
          >
            <ZoomIn className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={handleRotate}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded text-gray-400 hover:text-white transition-all"
            title="Повернуть на 90°"
          >
            <RotateCw className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded text-gray-400 hover:text-white transition-all"
            title="Сбросить"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        <motion.button
          onClick={handleDownload}
          disabled={downloading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 disabled:opacity-50 ${
            theme === 'neon'
              ? 'bg-pink-500/30 text-pink-300 hover:bg-pink-500/50'
              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
          }`}
        >
          {downloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Скачивание...</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Скачать</span>
            </>
          )}
        </motion.button>
      </div>

      <div
        ref={containerRef}
        className="flex-1 relative rounded-lg overflow-hidden border border-gray-700 bg-gray-900 cursor-move"
        onWheel={(e) => {
          e.preventDefault()
          const delta = e.deltaY > 0 ? -0.1 : 0.1
          handleZoom(delta)
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ touchAction: 'none' }}
        />
        
        <div className="absolute bottom-4 left-4 text-xs text-gray-500 bg-black/50 px-2 py-1 rounded">
          Перетащите для перемещения • Колесо мыши для масштабирования
        </div>
      </div>
    </div>
  )
}

