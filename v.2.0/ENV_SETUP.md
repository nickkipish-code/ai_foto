# ⚙️ Настройка переменных окружения в Vercel

## ⚠️ ВАЖНО: Ваш проект задеплоен, но не будет полностью функционировать без переменных окружения!

Ваше приложение: **https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app**

Dashboard проекта: **https://vercel.com/nicks-projects-98d36279/v.2.0/settings**

---

## 📋 Необходимые переменные окружения

### Шаг 1: Перейдите в настройки проекта

1. Откройте: https://vercel.com/nicks-projects-98d36279/v.2.0/settings/environment-variables
2. Или: **Dashboard → Settings → Environment Variables**

### Шаг 2: Добавьте следующие переменные

#### 🔐 Supabase

```
NEXT_PUBLIC_SUPABASE_URL
```
- Значение: URL вашего Supabase проекта
- Найти: [Supabase Dashboard](https://supabase.com/dashboard) → Settings → API → Project URL
- Пример: `https://xxxxxxxxxxxxx.supabase.co`

```
NEXT_PUBLIC_SUPABASE_ANON_KEY
```
- Значение: Публичный ключ Supabase
- Найти: Supabase Dashboard → Settings → API → anon/public
- Длинная строка, начинающаяся с `eyJ...`

```
SUPABASE_SERVICE_ROLE_KEY
```
- Значение: Service Role ключ Supabase (⚠️ СЕКРЕТНЫЙ!)
- Найти: Supabase Dashboard → Settings → API → service_role
- ⚠️ **НЕ ПУБЛИКУЙТЕ** этот ключ!

#### 🤖 Google Gemini AI

```
GOOGLE_GEMINI_API_KEY
```
- Значение: API ключ Google Gemini
- Получить: https://makersuite.google.com/app/apikey
- Начинается с `AIza...`

#### 🔒 NextAuth (Google OAuth)

```
AUTH_SECRET
```
- Значение: Случайная строка для шифрования сессий
- Сгенерировать в PowerShell:
  ```powershell
  -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | ForEach-Object {[char]$_})
  ```
- Или используйте онлайн генератор: https://generate-secret.vercel.app/32

```
AUTH_GOOGLE_ID
```
- Значение: Google OAuth Client ID
- Найти: [Google Cloud Console](https://console.cloud.google.com) → APIs & Services → Credentials
- Формат: `xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com`

```
AUTH_GOOGLE_SECRET
```
- Значение: Google OAuth Client Secret
- Найти: Там же, где Client ID
- ⚠️ **НЕ ПУБЛИКУЙТЕ** этот секрет!

```
NEXTAUTH_URL
```
- Значение: URL вашего Vercel приложения
- Для production: `https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app`
- Или ваш кастомный домен, если настроите

---

## 🔧 Как добавить переменные в Vercel

### Через Dashboard (Рекомендуется)

1. Перейдите: https://vercel.com/nicks-projects-98d36279/v.2.0/settings/environment-variables

2. Для каждой переменной:
   - Нажмите **"Add New"**
   - **Name**: Имя переменной (например, `NEXT_PUBLIC_SUPABASE_URL`)
   - **Value**: Значение переменной
   - **Environments**: Выберите все (Production, Preview, Development)
   - Нажмите **"Save"**

3. После добавления всех переменных сделайте **Redeploy**:
   - Deployments → три точки → Redeploy

### Через CLI

```bash
# Добавить переменную
vercel env add NEXT_PUBLIC_SUPABASE_URL production

# Просмотреть переменные
vercel env ls

# Удалить переменную
vercel env rm NEXT_PUBLIC_SUPABASE_URL production
```

---

## 🔄 После настройки переменных

### 1. Обновите Google OAuth настройки

В [Google Cloud Console](https://console.cloud.google.com):
- **Authorized JavaScript origins**:
  ```
  https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app
  ```
- **Authorized redirect URIs**:
  ```
  https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app/api/auth/callback/google
  ```

### 2. Обновите Supabase настройки

В [Supabase Dashboard](https://supabase.com/dashboard):

**Settings → Authentication → Site URL**:
```
https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app
```

**Settings → Authentication → Redirect URLs**:
```
https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app/**
https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app/api/auth/callback
```

### 3. Сделайте Redeploy

После добавления всех переменных:
1. Vercel Dashboard → Deployments
2. Найдите последний деплой
3. Нажмите три точки (•••)
4. Выберите **"Redeploy"**
5. Дождитесь завершения (обычно 2-3 минуты)

---

## ✅ Проверка работоспособности

После настройки проверьте:

1. **Health Check**: https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app/api/health
2. **Главная страница**: https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app
3. **Попробуйте войти** через Google OAuth

---

## 🐛 Отладка

### Просмотр логов

```bash
vercel logs https://v20-ek82js3iq-nicks-projects-98d36279.vercel.app
```

Или в Dashboard:
- Deployments → выберите деплой → Runtime Logs

### Типичные проблемы

**❌ "Missing environment variable"**
- Проверьте, что все переменные добавлены
- Сделайте Redeploy

**❌ "OAuth Error"**
- Проверьте Authorized redirect URIs в Google Cloud Console
- Убедитесь, что `AUTH_GOOGLE_ID` и `AUTH_GOOGLE_SECRET` правильные

**❌ "Supabase Connection Error"**
- Проверьте URL и ключи Supabase
- Убедитесь, что ваш Vercel URL добавлен в Supabase Redirect URLs

---

## 📊 Мониторинг

- **Analytics**: https://vercel.com/nicks-projects-98d36279/v.2.0/analytics
- **Speed Insights**: https://vercel.com/nicks-projects-98d36279/v.2.0/speed-insights
- **Logs**: https://vercel.com/nicks-projects-98d36279/v.2.0/logs

---

## 🎨 Кастомный домен (опционально)

Хотите использовать свой домен вместо `v20-ek82js3iq-nicks-projects-98d36279.vercel.app`?

1. Settings → Domains → Add
2. Введите ваш домен
3. Настройте DNS записи согласно инструкциям Vercel
4. **Обновите `NEXTAUTH_URL`** на новый домен!
5. **Обновите** Google OAuth и Supabase настройки

---

## 🚀 Автоматический деплой

Теперь при каждом push в `main` ветку репозитория https://github.com/nickkipish-code/finalstep будет автоматически происходить деплой на Vercel!

---

## 💡 Полезные команды

```bash
# Просмотр информации о проекте
vercel inspect

# Просмотр логов
vercel logs --follow

# Список деплоев
vercel ls

# Откатить к предыдущему деплою
vercel rollback

# Удалить проект
vercel remove v.2.0
```

---

**Готово!** После настройки всех переменных окружения ваше приложение будет полностью функционировать! 🎉

