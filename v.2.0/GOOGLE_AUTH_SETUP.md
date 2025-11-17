# 🔐 Налаштування Google OAuth для Примірочна AI

## 📋 Що потрібно

Для авторизації через Google потрібно отримати:
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

---

## 🚀 Крок 1: Створення проекту в Google Cloud Console

### 1.1. Перейдіть до Google Cloud Console
Відкрийте: https://console.cloud.google.com/

### 1.2. Створіть новий проект
1. Натисніть на меню вибору проекту (зверху зліва)
2. Натисніть "New Project"
3. Назва проекту: `Прмірочна AI` (або будь-яка інша)
4. Натисніть "Create"

---

## 🔑 Крок 2: Налаштування OAuth 2.0

### 2.1. Увімкніть Google+ API
1. В меню зліва виберіть "APIs & Services" → "Library"
2. Знайдіть "Google+ API"
3. Натисніть "Enable"

### 2.2. Налаштуйте OAuth consent screen
1. Перейдіть до "APIs & Services" → "OAuth consent screen"
2. Виберіть "External" (для тестування)
3. Заповніть форму:
   - **App name**: Примірочна AI
   - **User support email**: ваш email
   - **Developer contact information**: ваш email
4. Натисніть "Save and Continue"
5. На сторінці "Scopes" натисніть "Save and Continue"
6. На сторінці "Test users" додайте свій email для тестування
7. Натисніть "Save and Continue"

### 2.3. Створіть OAuth 2.0 Client ID
1. Перейдіть до "APIs & Services" → "Credentials"
2. Натисніть "Create Credentials" → "OAuth client ID"
3. Виберіть "Web application"
4. Налаштуйте:
   - **Name**: Примірочна AI Web Client
   - **Authorized JavaScript origins**:
     ```
     http://localhost:3000
     https://your-domain.vercel.app
     ```
   - **Authorized redirect URIs**:
     ```
     http://localhost:3000/api/auth/callback/google
     https://your-domain.vercel.app/api/auth/callback/google
     ```
5. Натисніть "Create"
6. **ВАЖЛИВО**: Скопіюйте `Client ID` та `Client Secret` - вони знадобляться!

---

## 🔐 Крок 3: Генерація NEXTAUTH_SECRET

### Linux/Mac:
```bash
openssl rand -base64 32
```

### Windows PowerShell:
```powershell
[Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
```

### Онлайн:
Перейдіть на: https://generate-secret.vercel.app/32

---

## 📝 Крок 4: Налаштування .env файлу

### 4.1. Локальна розробка

Створіть файл `.env.local` в корені проекту:

```env
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# NextAuth
NEXTAUTH_SECRET=your_generated_secret_here
NEXTAUTH_URL=http://localhost:3000

# Gemini API (вже є)
GOOGLE_GEMINI_API_KEY=your_existing_gemini_key
```

### 4.2. Production (Vercel)

В Vercel Dashboard додайте Environment Variables:

1. Перейдіть до: https://vercel.com/your-username/your-project/settings/environment-variables
2. Додайте кожну змінну:

| Name | Value | Environment |
|------|-------|-------------|
| `GOOGLE_CLIENT_ID` | `ваш_client_id` | Production, Preview, Development |
| `GOOGLE_CLIENT_SECRET` | `ваш_client_secret` | Production, Preview, Development |
| `NEXTAUTH_SECRET` | `згенерований_secret` | Production, Preview, Development |
| `NEXTAUTH_URL` | `https://your-domain.vercel.app` | Production |
| `NEXTAUTH_URL` | `https://preview-url.vercel.app` | Preview |

3. Натисніть "Save"
4. Редеплойте проект: `vercel --prod`

---

## ✅ Крок 5: Перевірка

### 5.1. Локально
```bash
npm run dev
```

Перейдіть до http://localhost:3000 та натисніть "Увійти"

### 5.2. На Production
Перейдіть до вашого Vercel URL та перевірте авторизацію

---

## 🔧 Налаштування Authorized redirect URIs

### Важливо!
Переконайтеся, що в Google Cloud Console додано ВСІ redirect URIs:

✅ **Для локальної розробки:**
```
http://localhost:3000/api/auth/callback/google
```

✅ **Для Vercel Preview:**
```
https://your-project-preview-url.vercel.app/api/auth/callback/google
```

✅ **Для Vercel Production:**
```
https://your-production-domain.vercel.app/api/auth/callback/google
```

---

## 🐛 Можливі проблеми та рішення

### Помилка: "redirect_uri_mismatch"
**Причина**: Неправильно налаштовані Authorized redirect URIs

**Рішення**:
1. Перевірте URL в помилці
2. Додайте точний URL до Google Cloud Console
3. Зачекайте 5 хвилин для оновлення

### Помилка: "Access blocked: This app's request is invalid"
**Причина**: OAuth consent screen не налаштовано

**Рішення**:
1. Перейдіть до OAuth consent screen
2. Заповніть всі обов'язкові поля
3. Додайте себе до Test users

### Помилка: "NEXTAUTH_URL not set"
**Причина**: Не встановлена змінна NEXTAUTH_URL

**Рішення**:
```env
NEXTAUTH_URL=http://localhost:3000  # для локальної розробки
# або
NEXTAUTH_URL=https://your-domain.vercel.app  # для production
```

---

## 📚 Додаткові ресурси

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth 2.0 Setup](https://developers.google.com/identity/protocols/oauth2)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## ✨ Готово!

Тепер користувачі можуть:
- ✅ Авторизуватися через Google
- ✅ Переглядати свій профіль
- ✅ Зберігати історію примірок
- ✅ Використовувати всі функції сервісу

**Авторизація працює!** 🎉

