'use client'

import { useState, useRef } from 'react'
import { ArrowLeft, Upload, X, Image as ImageIcon, ImageOff, Link as LinkIcon, Camera, Shirt, Sparkles } from 'lucide-react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import ImageCanvas from './ImageCanvas'

type Mode = 'text' | 'image' | 'background' | 'url'

export default function FittingRoom({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<Mode>('text')
  const [personImage, setPersonImage] = useState<string | null>(null)
  const [clothingImage, setClothingImage] = useState<string | null>(null)
  const [clothingDescription, setClothingDescription] = useState('')
  const [backgroundDescription, setBackgroundDescription] = useState('')
  const [cameraAngle, setCameraAngle] = useState('')
  const [productUrl, setProductUrl] = useState('')
  const [urlDescription, setUrlDescription] = useState('')
  const [extractingImages, setExtractingImages] = useState(false)
  const [resultImage, setResultImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const personFileRef = useRef<File | null>(null)
  const clothingFileRef = useRef<File | null>(null)
  const personInputRef = useRef<HTMLInputElement>(null)
  const clothingInputRef = useRef<HTMLInputElement>(null)

  const dataURLtoFile = (dataurl: string, filename: string): File => {
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png'
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  }

  const handlePersonImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Будь ласка, завантажте зображення')
      return
    }

    personFileRef.current = file
    const reader = new FileReader()
    reader.onloadend = () => {
      setPersonImage(reader.result as string)
      setError(null)
    }
    reader.readAsDataURL(file)
  }

  const handleClothingImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Будь ласка, завантажте зображення')
      return
    }

    clothingFileRef.current = file
    const reader = new FileReader()
    reader.onloadend = () => {
      setClothingImage(reader.result as string)
      setError(null)
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    type: 'person' | 'clothing'
  ) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (!file || !file.type.startsWith('image/')) return

    if (type === 'person') {
      personFileRef.current = file
      const reader = new FileReader()
      reader.onloadend = () => {
        setPersonImage(reader.result as string)
        setError(null)
      }
      reader.readAsDataURL(file)
    } else {
      clothingFileRef.current = file
      const reader = new FileReader()
      reader.onloadend = () => {
        setClothingImage(reader.result as string)
        setError(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTryOn = async () => {
    if (!personImage) {
      setError('Будь ласка, завантажте фото людини')
      return
    }

    if (mode === 'text' && !clothingDescription.trim()) {
      setError('Будь ласка, введіть опис одягу')
      return
    }

    if (mode === 'image' && !clothingImage) {
      setError('Будь ласка, завантажте фото одягу')
      return
    }

    if (mode === 'background' && !backgroundDescription.trim()) {
      setError('Будь ласка, введіть опис фону')
      return
    }

    if (mode === 'url' && !productUrl.trim()) {
      setError('Будь ласка, введіть посилання на товар')
      return
    }

    if (mode === 'url') {
      try {
        new URL(productUrl)
      } catch {
        setError('Будь ласка, введіть коректне посилання (починається з http:// або https://)')
        return
      }
    }

    setLoading(true)
    setError(null)
    setResultImage(null)

    try {
      const formData = new FormData()

      const personFile = personFileRef.current || dataURLtoFile(personImage, 'person.png')
      formData.append('person_image', personFile)

      let apiEndpoint = ''

      if (mode === 'background') {
        formData.append('background_description', backgroundDescription)
        if (cameraAngle.trim()) {
          formData.append('camera_angle', cameraAngle)
        }
        apiEndpoint = '/api/try-on/background'
      } else if (mode === 'text') {
        formData.append('clothing_description', clothingDescription)
        apiEndpoint = '/api/try-on/text'
      } else if (mode === 'url') {
        console.log('🔗 Начинаем обработку ссылки:', productUrl)
        setExtractingImages(true)
        formData.append('product_url', productUrl)
        if (urlDescription.trim()) {
          formData.append('description', urlDescription)
        }
        apiEndpoint = '/api/try-on/url'
      } else {
        const clothingFile = clothingFileRef.current || dataURLtoFile(clothingImage!, 'clothing.png')
        formData.append('clothing_image', clothingFile)
        if (clothingDescription.trim()) {
          formData.append('description', clothingDescription)
        }
        apiEndpoint = '/api/try-on/image'
      }

      const response = await axios.post(apiEndpoint, formData, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      const imageUrl = URL.createObjectURL(response.data)
      setResultImage(imageUrl)
      setExtractingImages(false)
    } catch (err: any) {
      console.error('Помилка генерації:', err)
      setExtractingImages(false)
      
      let errorMessage = 'Виникла помилка при генерації образу'
      
      if (err.response) {
        const status = err.response.status
        let detail = err.response.data?.detail || err.response.data?.error || err.response.data?.message
        
        if (err.response.data instanceof Blob) {
          try {
            const text = await err.response.data.text()
            const json = JSON.parse(text)
            detail = json.detail || json.error || json.message || detail
          } catch {
            // Використовуємо початкове повідомлення
          }
        }
        
        if (status === 429) {
          errorMessage = detail || 'Перевищено квоту Gemini API. Будь ласка, зачекайте трохи і спробуйте знову.'
        } else if (status === 500) {
          errorMessage = detail || 'Помилка сервера при генерації'
        } else if (status === 400) {
          errorMessage = detail || 'Невірний запит. Перевірте введені дані'
        } else {
          errorMessage = detail || `Помилка ${status}: ${err.response.statusText}`
        }
      } else if (err.request) {
        errorMessage = 'Не вдалося підключитися до сервера'
      } else {
        errorMessage = err.message || 'Помилка при відправці запиту'
      }
      
      setError(errorMessage)
    } finally {
      setLoading(false)
      setExtractingImages(false)
    }
  }

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-[#BEBEBE] hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад</span>
          </button>

          <div className="flex flex-wrap gap-2 glass rounded-lg p-1 border border-[#D4AF37]/20">
            <motion.button
              onClick={() => {
                setMode('text')
                setClothingImage(null)
                clothingFileRef.current = null
              }}
              whileHover={{ scale: 1.02 }}
              className={`px-4 py-2 rounded-md transition-all text-sm ${
                mode === 'text'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B89D2F] text-[#0C0C0D] font-semibold'
                  : 'text-[#BEBEBE] hover:text-white'
              }`}
            >
              Фото + Текст
            </motion.button>
            <motion.button
              onClick={() => {
                setMode('image')
                setClothingDescription('')
              }}
              whileHover={{ scale: 1.02 }}
              className={`px-4 py-2 rounded-md transition-all text-sm ${
                mode === 'image'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B89D2F] text-[#0C0C0D] font-semibold'
                  : 'text-[#BEBEBE] hover:text-white'
              }`}
            >
              Фото + Фото
            </motion.button>
            <motion.button
              onClick={() => {
                setMode('background')
                setClothingDescription('')
                setClothingImage(null)
                clothingFileRef.current = null
              }}
              whileHover={{ scale: 1.02 }}
              className={`px-4 py-2 rounded-md transition-all text-sm flex items-center gap-2 ${
                mode === 'background'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B89D2F] text-[#0C0C0D] font-semibold'
                  : 'text-[#BEBEBE] hover:text-white'
              }`}
            >
              <ImageOff className="w-4 h-4" />
              Зміна фону
            </motion.button>
            <motion.button
              onClick={() => {
                setMode('url')
                setClothingDescription('')
                setClothingImage(null)
                clothingFileRef.current = null
              }}
              whileHover={{ scale: 1.02 }}
              className={`px-4 py-2 rounded-md transition-all text-sm flex items-center gap-2 ${
                mode === 'url'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B89D2F] text-[#0C0C0D] font-semibold'
                  : 'text-[#BEBEBE] hover:text-white'
              }`}
            >
              <LinkIcon className="w-4 h-4" />
              За посиланням
            </motion.button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="premium-card">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-lg font-semibold">Фото людини</h3>
            </div>
            <div
              onDrop={(e) => handleDrop(e, 'person')}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-lg p-8 text-center cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              onClick={() => personInputRef.current?.click()}
            >
              {personImage ? (
                <div className="relative">
                  <img
                    src={personImage}
                    alt="Person"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setPersonImage(null)
                      personFileRef.current = null
                      if (personInputRef.current) personInputRef.current.value = ''
                    }}
                    className="absolute top-2 right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              ) : (
                <div>
                  <Upload className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                  <p className="text-[#BEBEBE] font-medium mb-1">Натисніть або перетягніть фото</p>
                  <p className="text-[#7A7A7A] text-xs">Завантажте фото в повний зріст</p>
                </div>
              )}
              <input
                ref={personInputRef}
                type="file"
                accept="image/*"
                onChange={handlePersonImageUpload}
                className="hidden"
              />
            </div>
          </div>

          <div className="premium-card">
            <div className="flex items-center gap-2 mb-4">
              {mode === 'background' ? (
                <ImageOff className="w-5 h-5 text-[#D4AF37]" />
              ) : mode === 'url' ? (
                <LinkIcon className="w-5 h-5 text-[#D4AF37]" />
              ) : (
                <Shirt className="w-5 h-5 text-[#D4AF37]" />
              )}
              <h3 className="text-lg font-semibold">
                {mode === 'background' 
                  ? 'Опис фону' 
                  : mode === 'text' 
                  ? 'Опис одягу' 
                  : mode === 'url'
                  ? 'Посилання на товар'
                  : 'Фото одягу'}
              </h3>
            </div>
            {mode === 'url' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#BEBEBE] mb-2">
                    Посилання на товар <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={productUrl}
                    onChange={(e) => setProductUrl(e.target.value)}
                    placeholder="https://prom.ua/... або https://olx.ua/..."
                    className="w-full bg-[#1A1A1C] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-lg p-3 text-white placeholder-[#7A7A7A] focus:outline-none transition-all"
                  />
                  {extractingImages && (
                    <div className="text-sm text-[#D4AF37] mt-2">
                      🔍 Витягуємо зображення товару...
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#BEBEBE] mb-2">
                    Додатковий опис (опціонально)
                  </label>
                  <textarea
                    value={urlDescription}
                    onChange={(e) => setUrlDescription(e.target.value)}
                    placeholder="Наприклад: червона сукня, розмір M"
                    className="w-full h-24 bg-[#1A1A1C] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-lg p-3 text-white placeholder-[#7A7A7A] focus:outline-none resize-none transition-all"
                  />
                </div>
              </div>
            ) : mode === 'background' ? (
              <div className="space-y-4">
                <textarea
                  value={backgroundDescription}
                  onChange={(e) => setBackgroundDescription(e.target.value)}
                  placeholder="Наприклад: пляж з білим піском і блакитним океаном, сонячний день"
                  className="w-full h-32 bg-[#1A1A1C] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-lg p-4 text-white placeholder-[#7A7A7A] focus:outline-none resize-none transition-all"
                />
                <div>
                  <label className="block text-sm font-medium text-[#BEBEBE] mb-2">
                    Ракурс камери <span className="text-[#D4AF37]">(опціонально)</span>
                  </label>
                  <input
                    type="text"
                    value={cameraAngle}
                    onChange={(e) => setCameraAngle(e.target.value)}
                    placeholder="Наприклад: вид збоку, низький ракурс, вид зверху"
                    className="w-full bg-[#1A1A1C] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-lg p-3 text-white placeholder-[#7A7A7A] focus:outline-none transition-all"
                  />
                </div>
              </div>
            ) : mode === 'text' ? (
                  <textarea
                    value={clothingDescription}
                    onChange={(e) => setClothingDescription(e.target.value)}
                    placeholder="Наприклад: чорна футболка oversize, сині джинси скінні, червона сукня до колін..."
                    className="w-full h-48 bg-[#1A1A1C] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-lg p-4 text-white placeholder-[#7A7A7A] focus:outline-none resize-none transition-all"
                  />
            ) : (
              <div
                onDrop={(e) => handleDrop(e, 'clothing')}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-lg p-8 text-center cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                onClick={() => clothingInputRef.current?.click()}
              >
                {clothingImage ? (
                  <div className="relative">
                    <img
                      src={clothingImage}
                      alt="Clothing"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setClothingImage(null)
                        clothingFileRef.current = null
                        if (clothingInputRef.current) clothingInputRef.current.value = ''
                      }}
                      className="absolute top-2 right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <ImageIcon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                    <p className="text-[#BEBEBE] font-medium mb-1">Натисніть або перетягніть фото</p>
                    <p className="text-[#7A7A7A] text-xs">Завантажте фото одягу на білому фоні</p>
                  </div>
                )}
                <input
                  ref={clothingInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleClothingImageUpload}
                  className="hidden"
                />
              </div>
            )}
          </div>

          <div className="premium-card">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-lg font-semibold">Результат</h3>
            </div>
            <div className="h-64 md:h-auto">
              <ImageCanvas imageUrl={resultImage} loading={loading} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <motion.button
            onClick={handleTryOn}
            disabled={loading || extractingImages}
            whileHover={!loading && !extractingImages ? { scale: 1.05, y: -2 } : {}}
            whileTap={!loading && !extractingImages ? { scale: 0.98 } : {}}
            className="gold-button text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              padding: '16px 40px',
              fontSize: '18px',
            }}
          >
            {extractingImages 
              ? 'Витягуємо зображення...' 
              : loading 
                ? (mode === 'background' ? 'Змінюємо фон...' : mode === 'url' ? 'Застосовуємо одяг...' : 'Створюємо образ...') 
                : (mode === 'background' ? 'Змінити фон' : mode === 'url' ? 'Застосувати' : 'Примірити')}
          </motion.button>
        </div>
      </div>
    </div>
  )
}

