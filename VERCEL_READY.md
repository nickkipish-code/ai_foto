# ✅ Готово к деплою на Vercel!

Все файлы и инструкции подготовлены. Следуйте инструкциям ниже.

---

## 📋 Созданные файлы

1. **VERCEL_SETUP_GUIDE.md** - Полная пошаговая инструкция по деплою
2. **VERCEL_QUICK_START.md** - Краткая шпаргалка для быстрого деплоя
3. **VERCEL_ENV_VARIABLES.md** - Справка по переменным окружения

---

## 🚀 Быстрый старт

### Шаг 1: Откройте Vercel Dashboard

Vercel Dashboard уже открыт в вашем браузере.
Если нет, откройте: https://vercel.com/dashboard

### Шаг 2: Деплой Backend

1. Нажмите **"Add New Project"**
2. Выберите ваш репозиторий (GitHub/GitLab/Bitbucket)
3. Настройте проект:
   - **Framework:** `Other`
   - **Root Directory:** `backend` ⚠️
   - **Install Command:** `pip install -r requirements.txt`
4. Добавьте переменные окружения:
   - `GEMINI_API_KEY` = `AIzaSyCscw5h8o9ymsSAMHiKgC6frCYHieqAEoY` (ваш ключ Gemini API)
   - `ALLOWED_ORIGINS` = `http://localhost:3000` (временно)
5. Нажмите **"Deploy"**
6. Скопируйте URL проекта (например: `https://vercel.com/nicks-projects-00786ef7/ai-foto/Dr3k4b38d5dsqqysQU5FVWQRLBiL`)

### Шаг 3: Деплой Frontend

1. Снова нажмите **"Add New Project"**
2. Выберите тот же репозиторий
3. Настройте проект:
   - **Framework:** `Next.js` (автоматически)
   - **Root Directory:** `frontend` ⚠️
4. Добавьте переменную окружения:
   - `NEXT_PUBLIC_API_URL` = URL вашего backend проекта (из шага 2)
   - ⚠️ URL БЕЗ завершающего слеша!
5. Нажмите **"Deploy"**
6. Скопируйте URL проекта (например: `https://primer-frontend-xyz789.vercel.app`)

### Шаг 4: Обновите CORS в Backend

1. Вернитесь в **Backend проект** на Vercel
2. **Settings** → **Environment Variables**
3. Обновите `ALLOWED_ORIGINS`:
   ```
   https://primer-frontend-xyz789.vercel.app,http://localhost:3000
   ```
   ⚠️ Замените на ваш frontend URL!
4. Нажмите **"Redeploy"** для применения изменений

---

## 🔐 Переменные окружения

### Backend:
```
GEMINI_API_KEY=AIzaSyCscw5h8o9ymsSAMHiKgC6frCYHieqAEoY
ALLOWED_ORIGINS=https://ai-frontedn-w2g5.vercel.app,http://localhost:3000
ALLOWED_ORIGIN_REGEX=https://.*\.vercel\.app  
```

### Frontend:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
```

---

## ⚠️ Важные моменты

1. **Все URL БЕЗ завершающего слеша** (`/`)
   - ✅ `https://example.vercel.app`
   - ❌ `https://example.vercel.app/`

2. **GEMINI_API_KEY** - получите на [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

3. **Root Directory** - обязательно укажите `backend` и `frontend` соответственно!

4. **После изменения переменных в Backend** - нужен Redeploy

---

## 📚 Документация

- **Полная инструкция:** [VERCEL_SETUP_GUIDE.md](./VERCEL_SETUP_GUIDE.md)
- **Быстрый старт:** [VERCEL_QUICK_START.md](./VERCEL_QUICK_START.md)
- **Переменные окружения:** [VERCEL_ENV_VARIABLES.md](./VERCEL_ENV_VARIABLES.md)
- **Оригинальная документация:** [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

---

## ✅ Проверка после деплоя

1. **Backend:**
   - Откройте: `https://your-backend-url.vercel.app/health`
   - Должен вернуться JSON: `{"status": "healthy", "gemini_ready": true}`

2. **Frontend:**
   - Откройте: `https://your-frontend-url.vercel.app`
   - Попробуйте загрузить фото и выполнить примерку
   - Проверьте консоль браузера (F12) на наличие ошибок

---

## 🐛 Troubleshooting

Если что-то не работает, смотрите раздел **Troubleshooting** в [VERCEL_SETUP_GUIDE.md](./VERCEL_SETUP_GUIDE.md)

---

**Готово! Следуйте инструкциям выше и ваш проект будет задеплоен на Vercel!** 🎉

