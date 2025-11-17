# 🚀 ШВИДКЕ НАЛАШТУВАННЯ GOOGLE OAUTH (5 хвилин)

## ✅ ВЖЕ ГОТОВО:
- ✅ NEXTAUTH_SECRET згенеровано: `bvPJ6ov5WjmELBKPz1FM/AH4y+Ufplw5qb3UoJD4SVA=`
- ✅ GOOGLE_GEMINI_API_KEY вже є
- ✅ Код авторизації реалізовано

## ❗ ПОТРІБНО ЗРОБИТИ:

### Крок 1: Отримайте Google OAuth Credentials (3 хв)

1. **Відкрийте Google Cloud Console:**
   ```
   https://console.cloud.google.com/
   ```

2. **Створіть проект:**
   - Натисніть на dropdown проектів (зверху)
   - "New Project"
   - Назва: `Примірочна AI`
   - Натисніть "CREATE"

3. **Налаштуйте OAuth consent screen:**
   - Ліва панель → "APIs & Services" → "OAuth consent screen"
   - Виберіть "External"
   - App name: `Примірочна AI`
   - User support email: ваш email
   - Developer contact: ваш email
   - "SAVE AND CONTINUE" → "SAVE AND CONTINUE" → "SAVE AND CONTINUE"

4. **Створіть OAuth Client:**
   - Ліва панель → "APIs & Services" → "Credentials"
   - "CREATE CREDENTIALS" → "OAuth client ID"
   - Application type: "Web application"
   - Name: `Примірочна AI Web`
   
   **Authorized JavaScript origins:**
   ```
   http://localhost:3000
   https://v20-agvwk6jpl-nicks-projects-98d36279.vercel.app
   ```
   
   **Authorized redirect URIs:**
   ```
   http://localhost:3000/api/auth/callback/google
   https://v20-agvwk6jpl-nicks-projects-98d36279.vercel.app/api/auth/callback/google
   ```
   
   - Натисніть "CREATE"
   - **КОПІЮЙТЕ Client ID та Client Secret!**

---

### Крок 2: Створіть `.env.local` файл

**Створіть файл `.env.local` в корені проекту:**

```env
# Google Gemini API
GOOGLE_GEMINI_API_KEY=AIzaSyALjuHSLx4gvPiJIOhWzPWn3KSJy77Rlxk

# Google OAuth (вставте свої значення)
GOOGLE_CLIENT_ID=ваш_client_id_сюди
GOOGLE_CLIENT_SECRET=ваш_client_secret_сюди

# NextAuth
NEXTAUTH_SECRET=bvPJ6ov5WjmELBKPz1FM/AH4y+Ufplw5qb3UoJD4SVA=
NEXTAUTH_URL=http://localhost:3000
```

**ВАЖЛИВО:** Замініть `ваш_client_id_сюди` та `ваш_client_secret_сюди` на реальні значення з Google Cloud Console!

---

### Крок 3: Тест локально

```bash
npm run dev
```

Відкрийте http://localhost:3000 та натисніть "Увійти"

---

### Крок 4: Додайте змінні на Vercel

1. **Перейдіть до Vercel Dashboard:**
   ```
   https://vercel.com/nicks-projects-98d36279/v.2.0/settings/environment-variables
   ```

2. **Додайте по черзі:**

   | Name | Value |
   |------|-------|
   | `GOOGLE_CLIENT_ID` | з Google Console |
   | `GOOGLE_CLIENT_SECRET` | з Google Console |
   | `NEXTAUTH_SECRET` | `bvPJ6ov5WjmELBKPz1FM/AH4y+Ufplw5qb3UoJD4SVA=` |
   | `NEXTAUTH_URL` | `https://v20-agvwk6jpl-nicks-projects-98d36279.vercel.app` |

   Для кожної змінної:
   - Вставте Name
   - Вставте Value
   - Виберіть всі середовища (Production, Preview, Development)
   - Натисніть "Save"

---

### Крок 5: Деплой на Vercel

```bash
vercel --prod
```

---

## 🎉 ГОТОВО!

Тепер користувачі можуть:
- ✅ Увійти через Google
- ✅ Переглядати профіль
- ✅ Зберігати сесію

---

## 🐛 Якщо виникли проблеми:

### Помилка: "redirect_uri_mismatch"
**Рішення:** Перевірте що redirect URI точно збігаються:
```
http://localhost:3000/api/auth/callback/google
https://v20-agvwk6jpl-nicks-projects-98d36279.vercel.app/api/auth/callback/google
```

### Помилка: "invalid_client"
**Рішення:** Перевірте що Client ID та Client Secret скопійовані правильно (без пробілів)

### Сесія не зберігається
**Рішення:** Перезапустіть dev сервер після зміни .env.local

---

## 📞 Потрібна допомога?

Читайте детальну документацію: `GOOGLE_AUTH_SETUP.md`

