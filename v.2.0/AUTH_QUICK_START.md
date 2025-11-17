# 🔐 Швидкий старт - Google Авторизація

## ✅ Що вже реалізовано

- ✅ NextAuth.js встановлено
- ✅ Google Provider налаштовано
- ✅ Кнопки входу/виходу в Header
- ✅ Сторінка профілю `/profile`
- ✅ Сторінка входу `/auth/signin`
- ✅ Сторінка помилок `/auth/error`
- ✅ Захист сесії (JWT)
- ✅ Premium дизайн для всіх сторінок

---

## 🚀 Швидке налаштування (5 хвилин)

### 1. Створіть Google OAuth credentials

Перейдіть до: https://console.cloud.google.com/

1. Створіть новий проект
2. Увімкніть Google+ API
3. Налаштуйте OAuth consent screen
4. Створіть OAuth 2.0 Client ID
5. Додайте Authorized redirect URIs:
   ```
   http://localhost:3000/api/auth/callback/google
   https://your-domain.vercel.app/api/auth/callback/google
   ```

### 2. Створіть `.env.local` файл

```env
# Google OAuth
GOOGLE_CLIENT_ID=ваш_client_id
GOOGLE_CLIENT_SECRET=ваш_client_secret

# NextAuth
NEXTAUTH_SECRET=згенеруйте_openssl_rand_-base64_32
NEXTAUTH_URL=http://localhost:3000

# Gemini API (вже є)
GOOGLE_GEMINI_API_KEY=ваш_існуючий_ключ
```

### 3. Згенеруйте NEXTAUTH_SECRET

**Linux/Mac:**
```bash
openssl rand -base64 32
```

**Windows PowerShell:**
```powershell
[Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
```

**Онлайн:**
https://generate-secret.vercel.app/32

### 4. Запустіть проект

```bash
npm run dev
```

Відкрийте http://localhost:3000 та натисніть "Увійти"!

---

## 🌐 Vercel Deployment

### Environment Variables на Vercel

Додайте в Vercel Dashboard:

| Variable | Value |
|----------|-------|
| `GOOGLE_CLIENT_ID` | з Google Cloud Console |
| `GOOGLE_CLIENT_SECRET` | з Google Cloud Console |
| `NEXTAUTH_SECRET` | згенерований secret |
| `NEXTAUTH_URL` | `https://your-domain.vercel.app` |

### Редеплой

```bash
vercel --prod
```

---

## 📱 Функції авторизації

### ✨ Що працює:

- 🔐 **Вхід через Google** - кнопка в Header
- 👤 **Профіль користувача** - `/profile`
- 🚪 **Вихід** - кнопка в Header menu
- 🔒 **Захист сторінок** - автоматичний редірект
- 💾 **Сесія** - JWT токени
- 📱 **Мобільна версія** - адаптивний Header

### 🎨 Premium UI:

- Золоті кнопки входу
- Dropdown меню з аватаром
- Красива сторінка профілю
- Сторінка входу з логотипом
- Сторінка помилок

---

## 🔧 API Routes

- `/api/auth/signin` - вхід
- `/api/auth/signout` - вихід
- `/api/auth/session` - поточна сесія
- `/api/auth/callback/google` - Google callback

---

## 📚 Документація

Детальна інструкція: `GOOGLE_AUTH_SETUP.md`

---

## 🐛 Типові помилки

### "redirect_uri_mismatch"
Додайте точний redirect URI в Google Cloud Console

### "NEXTAUTH_URL not set"
Додайте `NEXTAUTH_URL` в `.env.local`

### "Session is null"
Перезапустіть dev сервер після зміни .env

---

## ✅ Готово!

**Авторизація працює!** 🎉

Користувачі можуть:
- Увійти через Google
- Переглядати профіль
- Безпечно виходити
- Використовувати Premium UI

