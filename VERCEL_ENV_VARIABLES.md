# 🔐 Переменные окружения для Vercel

## 📋 Краткая справка по переменным окружения

Используйте эту справку для быстрой настройки проектов на Vercel.

---

## 🔧 Backend Project (FastAPI)

### Обязательные переменные:

| Переменная | Значение | Пример | Описание |
|-----------|----------|--------|----------|
| `GEMINI_API_KEY` | Ваш API ключ | `AIzaSyC1234567890...` | Google Gemini API ключ. Получите на [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) |
| `ALLOWED_ORIGINS` | URL через запятую | `https://primer-frontend.vercel.app,http://localhost:3000` | Разрешенные домены для CORS. URL БЕЗ завершающего слеша! |

### Опциональные переменные:

| Переменная | Значение | Пример | Описание |
|-----------|----------|--------|----------|
| `ALLOWED_ORIGIN_REGEX` | Регулярное выражение | `https://.*\.vercel\.app` | Автоматическое разрешение всех Vercel preview доменов |

### 📝 Пример настройки в Vercel:

```
GEMINI_API_KEY=AIzaSyC1234567890abcdefghijklmnopqrstuvwxyz
ALLOWED_ORIGINS=https://primer-frontend-xyz789.vercel.app,http://localhost:3000
ALLOWED_ORIGIN_REGEX=https://.*\.vercel\.app
```

---

## 🎨 Frontend Project (Next.js)

### Обязательные переменные:

| Переменная | Значение | Пример | Описание |
|-----------|----------|--------|----------|
| `NEXT_PUBLIC_API_URL` | URL backend проекта | `https://primer-backend-abc123.vercel.app` | URL вашего backend проекта на Vercel. **БЕЗ завершающего слеша!** |

### 📝 Пример настройки в Vercel:

```
NEXT_PUBLIC_API_URL=https://primer-backend-abc123.vercel.app
```

⚠️ **Важно:** URL должен быть БЕЗ завершающего слеша (`/`)

---

## 🔄 Порядок настройки

1. **Сначала** задеплойте Backend
2. Скопируйте URL backend проекта (например: `https://primer-backend-abc123.vercel.app`)
3. **Затем** задеплойте Frontend
4. В Frontend добавьте `NEXT_PUBLIC_API_URL` с URL из шага 2
5. Скопируйте URL frontend проекта (например: `https://primer-frontend-xyz789.vercel.app`)
6. **Вернитесь** в Backend проект
7. Обновите `ALLOWED_ORIGINS` с URL из шага 5
8. Перезапустите Backend (Redeploy)

---

## ⚠️ Важные моменты

1. **Все URL должны быть БЕЗ завершающего слеша** (`/`)
   - ✅ Правильно: `https://example.vercel.app`
   - ❌ Неправильно: `https://example.vercel.app/`

2. **GEMINI_API_KEY** должен начинаться с `AIzaSyC...`
   - Если ключ не работает, проверьте его на [Google AI Studio](https://aistudio.google.com/app/apikey)

3. **После изменения переменных окружения в Backend** нужно перезапустить проект (Redeploy)

4. **NEXT_PUBLIC_API_URL** должен быть доступен из браузера
   - Убедитесь, что backend успешно задеплоен и доступен

---

## 🐛 Проверка переменных

### Backend

Откройте в браузере:
```
https://your-backend-url.vercel.app/health
```

Должен вернуться JSON:
```json
{
  "status": "healthy",
  "gemini_ready": true,
  "model": "gemini-2.5-flash-image"
}
```

### Frontend

Откройте в браузере:
```
https://your-frontend-url.vercel.app
```

Проверьте консоль браузера (F12) на наличие ошибок подключения к API.

---

## 🔗 Полезные ссылки

- [Vercel Environment Variables Docs](https://vercel.com/docs/concepts/projects/environment-variables)
- [Google AI Studio - API Keys](https://aistudio.google.com/app/apikey)
- [FastAPI CORS](https://fastapi.tiangolo.com/tutorial/cors/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

**Создано:** 2025-11-17

