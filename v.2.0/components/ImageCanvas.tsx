'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Download, Loader2, ZoomIn, ZoomOut, RotateCw, Move, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface ImageCanvasProps {
  imageUrl: string | null
  loading?: boolean
}

export default function ImageCanvas({ imageUrl, loading }: ImageCanvasProps) {
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
      console.error('Помилка завантаження зображення')
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
      '✨ Генеруємо ваш образ...',
      '🤖 AI підбирає освітлення...',
      '👗 Створюємо примірку...',
      '🎨 Фінальна обробка...'
    ]

    useEffect(() => {
      const interval = setInterval(() => {
        setLoadingStep(prev => (prev + 1) % steps.length)
      }, 2000)
      return () => clearInterval(interval)
    }, [])

    return (
      <div className="w-full h-full flex items-center justify-center glass rounded-lg border-2 border-[#D4AF37]/50 bg-gradient-to-br from-[#D4AF37]/10 to-[#B89D2F]/10">
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center relative bg-gradient-to-br from-[#D4AF37]/30 to-[#B89D2F]/30 shadow-[0_0_50px_rgba(212,175,55,0.5)]">
              <Loader2 className="w-12 h-12 animate-spin text-[#D4AF37]" />
              
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{
                  borderTopColor: '#D4AF37',
                  borderRightColor: '#E5C158',
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
            className="text-lg font-semibold mb-2 text-[#D4AF37]"
          >
            {steps[loadingStep]}
          </motion.p>
          <p className="text-[#BEBEBE] text-sm">
            Це може зайняти до 30 секунд
          </p>
        </div>
      </div>
    )
  }

  if (!imageUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center glass rounded-lg border-2 border-dashed border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-[#B89D2F]/5">
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-[#B89D2F]/20 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <Loader2 className="w-10 h-10 text-[#D4AF37]" />
            </div>
          </motion.div>
          <p className="text-lg font-semibold mb-2 text-[#D4AF37]">
            ✨ Ваш результат примірки
          </p>
          <p className="text-[#BEBEBE] text-sm">
            з'явиться тут після генерації
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full glass rounded-lg p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4 p-2 rounded-lg bg-[#1A1A1C] border border-[#D4AF37]/30">
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => handleZoom(-0.1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded text-[#BEBEBE] hover:text-[#D4AF37] transition-all"
            title="Зменшити"
          >
            <ZoomOut className="w-4 h-4" />
          </motion.button>
          
          <span className="text-sm text-[#BEBEBE] min-w-[3rem] text-center">
            {Math.round(scale * 100)}%
          </span>
          
          <motion.button
            onClick={() => handleZoom(0.1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded text-[#BEBEBE] hover:text-[#D4AF37] transition-all"
            title="Збільшити"
          >
            <ZoomIn className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={handleRotate}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded text-[#BEBEBE] hover:text-[#D4AF37] transition-all"
            title="Повернути на 90°"
          >
            <RotateCw className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded text-[#BEBEBE] hover:text-[#D4AF37] transition-all"
            title="Скинути"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        <motion.button
          onClick={handleDownload}
          disabled={downloading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 disabled:opacity-50 bg-gradient-to-r from-[#D4AF37] to-[#B89D2F] text-[#0C0C0D] hover:shadow-lg hover:shadow-[#D4AF37]/50"
        >
          {downloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Завантаження...</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Завантажити</span>
            </>
          )}
        </motion.button>
      </div>

      <div
        ref={containerRef}
        className="flex-1 relative rounded-lg overflow-hidden border border-[#D4AF37]/30 bg-[#0C0C0D] cursor-move"
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
        
        <div className="absolute bottom-4 left-4 text-xs text-[#7A7A7A] bg-black/70 px-3 py-2 rounded-lg border border-[#D4AF37]/20">
          Перетягніть для переміщення • Колесо миші для масштабування
        </div>
      </div>
    </div>
  )
}

