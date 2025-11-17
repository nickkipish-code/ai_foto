# Настройка Google OAuth аутентификации

Это руководство поможет вам настроить регистрацию и авторизацию через Google на вашем frontend.

## Шаг 1: Создание Google OAuth приложения

1. Перейдите в [Google Cloud Console](https://console.cloud.google.com/)
2. Создайте новый проект или выберите существующий
3. Перейдите в **APIs & Services** → **Credentials**
4. Нажмите **Create Credentials** → **OAuth client ID**
5. Если это первый раз, настройте OAuth consent screen:
   - Выберите **External** (для тестирования) или **Internal** (для G Suite)
   - Заполните обязательные поля:
     - App name: Virtual Fitting Room
     - User support email: ваш email
     - Developer contact: ваш email
   - Сохраните и продолжите
6. Создайте OAuth 2.0 Client ID:
   - Application type: **Web application**
   - Name: Virtual Fitting Room Web
   - Authorized JavaScript origins:
     - `http://localhost:3000` (для разработки)
     - `https://yourdomain.com` (для продакшена)
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (для разработки)
     - `https://yourdomain.com/api/auth/callback/google` (для продакшена)
7. Скопируйте **Client ID** и **Client Secret**

## Шаг 2: Настройка переменных окружения

1. Создайте файл `.env.local` в папке `frontend/`:

```env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

2. Сгенерируйте `NEXTAUTH_SECRET`:
   - Windows PowerShell:
     ```powershell
     [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((New-Guid).ToString()))
     ```
   - Linux/Mac:
     ```bash
     openssl rand -base64 32
     ```
   - Или используйте онлайн генератор: https://generate-secret.vercel.app/32

## Шаг 3: Запуск приложения

```bash
cd frontend
npm run dev
```

## Шаг 4: Тестирование

1. Откройте http://localhost:3000
2. Нажмите кнопку "Войти через Google" в header
3. Выберите Google аккаунт
4. Разрешите доступ приложению
5. Вы должны быть перенаправлены обратно на сайт и быть авторизованными

## Структура файлов

- `auth.ts` - Конфигурация NextAuth.js
- `app/api/auth/[...nextauth]/route.ts` - API routes для аутентификации
- `components/AuthButton.tsx` - Компонент кнопки входа/выхода
- `components/Providers.tsx` - Провайдер сессий
- `app/auth/signin/page.tsx` - Страница входа
- `types/next-auth.d.ts` - TypeScript типы для NextAuth

## Функциональность

✅ Регистрация через Google OAuth
✅ Авторизация через Google OAuth
✅ Отображение профиля пользователя в header
✅ Кнопка выхода
✅ Адаптивный дизайн (mobile/desktop)
✅ Защита маршрутов (можно добавить middleware)

## Troubleshooting

### Ошибка "Invalid client"
- Проверьте, что `GOOGLE_CLIENT_ID` и `GOOGLE_CLIENT_SECRET` правильно скопированы
- Убедитесь, что redirect URI совпадает с настройками в Google Console

### Ошибка "redirect_uri_mismatch"
- Проверьте, что в Google Console добавлен правильный redirect URI:
  `http://localhost:3000/api/auth/callback/google`
- Убедитесь, что `NEXTAUTH_URL` в `.env.local` совпадает с вашим доменом

### Сессия не сохраняется
- Проверьте, что `NEXTAUTH_SECRET` установлен
- Убедитесь, что используете HTTPS в продакшене

## Продакшен

Для продакшена:

1. Обновите Google OAuth credentials:
   - Добавьте ваш домен в Authorized JavaScript origins
   - Добавьте `https://yourdomain.com/api/auth/callback/google` в Authorized redirect URIs

2. Обновите `.env.local`:
   ```env
   NEXTAUTH_URL=https://yourdomain.com
   NEXTAUTH_SECRET=your-production-secret
   GOOGLE_CLIENT_ID=your-production-client-id
   GOOGLE_CLIENT_SECRET=your-production-client-secret
   ```

3. Убедитесь, что переменные окружения установлены на вашем хостинге (Vercel, Netlify, etc.)

