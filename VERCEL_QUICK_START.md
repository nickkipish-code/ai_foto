# ⚡ Vercel Quick Start - Быстрый деплой

Краткая инструкция для быстрого деплоя на Vercel.

---

## 🚀 Шаг 1: Backend (FastAPI)

### В Vercel Dashboard:

1. **New Project** → Выберите репозиторий
2. **Настройки:**
   - Framework: `Other`
   - Root Directory: `backend` ⚠️
   - Install Command: `pip install -r requirements.txt`
3. **Environment Variables:**
   ```
   GEMINI_API_KEY=ваш_ключ_здесь
   ALLOWED_ORIGINS=http://localhost:3000
   ```
4. **Deploy** → Скопируйте URL (например: `https://primer-backend-abc123.vercel.app`)

---

## 🎨 Шаг 2: Frontend (Next.js)

### В Vercel Dashboard:

1. **New Project** → Выберите тот же репозиторий
2. **Настройки:**
   - Framework: `Next.js` (автоматически)
   - Root Directory: `frontend` ⚠️
3. **Environment Variables:**
   ```
   NEXT_PUBLIC_API_URL=https://primer-backend-abc123.vercel.app
   ```
   ⚠️ Замените на ваш backend URL из шага 1!
4. **Deploy** → Скопируйте URL (например: `https://primer-frontend-xyz789.vercel.app`)

---

## 🔄 Шаг 3: Обновить CORS в Backend

1. Вернитесь в **Backend проект** на Vercel
2. **Settings** → **Environment Variables**
3. Обновите `ALLOWED_ORIGINS`:
   ```
   https://primer-frontend-xyz789.vercel.app,http://localhost:3000
   ```
   ⚠️ Замените на ваш frontend URL из шага 2!
4. **Redeploy** backend проекта

---

## ✅ Готово!

Откройте ваш Frontend URL и протестируйте!

---

## 📝 Чеклист

- [ ] Backend задеплоен
- [ ] Backend URL скопирован
- [ ] Frontend задеплоен
- [ ] `NEXT_PUBLIC_API_URL` настроен в Frontend
- [ ] Frontend URL скопирован
- [ ] `ALLOWED_ORIGINS` обновлен в Backend
- [ ] Backend перезапущен (Redeploy)

---

## ⚠️ Важно

- Все URL **БЕЗ** завершающего слеша (`/`)
- `GEMINI_API_KEY` получите на [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
- После изменения переменных в Backend нужно **Redeploy**

---

**Полная инструкция:** См. [VERCEL_SETUP_GUIDE.md](./VERCEL_SETUP_GUIDE.md)

