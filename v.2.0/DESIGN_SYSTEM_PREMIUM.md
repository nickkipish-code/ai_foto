# 🏆 Примірочна AI — Premium Design System

## Тема: Premium Fashion / Dark High-Tech / Gold Accents

---

## 🎨 1. ДИЗАЙН-СИСТЕМА

### 🖤 Кольорова палітра

#### Основні кольори
```css
/* Фони */
--bg-primary: #0C0C0D;        /* Основний фон */
--bg-secondary: #121214;       /* Вторинний фон, картки */
--bg-tertiary: #1A1A1C;       /* Hover стани */

/* Акценти */
--accent-gold: #D4AF37;        /* Основний золотий */
--accent-gold-light: #E5C158;  /* Світліший золотий */
--accent-gold-dark: #B89D2F;   /* Темніший золотий */

/* Текст */
--text-primary: #FFFFFF;       /* Основний текст */
--text-secondary: #BEBEBE;     /* Вторинний текст */
--text-muted: #7A7A7A;        /* Приглушений текст */

/* Лінії і бордери */
--border-primary: #1F1F22;     /* Основні лінії */
--border-gold: #D4AF37;        /* Золоті лінії */
--border-hover: #2A2A2D;       /* Hover стан */

/* Стани */
--success: #4CAF50;
--error: #EF4444;
--warning: #FFA726;
--info: #29B6F6;
```

#### Градієнти
```css
/* Золотий gradient */
--gradient-gold: linear-gradient(135deg, #D4AF37 0%, #B89D2F 100%);

/* Темний gradient */
--gradient-dark: linear-gradient(180deg, #0C0C0D 0%, #121214 100%);

/* Premium gradient */
--gradient-premium: linear-gradient(135deg, #D4AF37 0%, #E5C158 50%, #D4AF37 100%);

/* Світіння */
--glow-gold: 0 0 20px rgba(212, 175, 55, 0.3);
--glow-gold-strong: 0 0 40px rgba(212, 175, 55, 0.5);
```

---

### 🔤 Типографіка

#### Шрифти
```css
/* Заголовки */
font-family: 'Playfair Display', serif;
font-weight: 400, 600, 700;

/* UI текст */
font-family: 'Inter', sans-serif;
font-weight: 400, 500, 600, 700;
```

#### Розміри шрифтів
```css
/* Headings */
--h1: 48px / 56px;  /* Line height */
--h2: 36px / 44px;
--h3: 28px / 36px;
--h4: 24px / 32px;
--h5: 20px / 28px;
--h6: 18px / 26px;

/* Body */
--text-xl: 20px / 30px;
--text-lg: 18px / 28px;
--text-base: 16px / 24px;
--text-sm: 14px / 20px;
--text-xs: 12px / 18px;
```

#### Стилі заголовків
```
H1 Hero: Playfair Display / 48pt / Bold / Gold
H2 Section: Playfair Display / 36pt / Semibold / White
H3 Card: Inter / 24pt / Semibold / White
Body: Inter / 16pt / Regular / Secondary
Caption: Inter / 14pt / Regular / Muted
```

---

### 🔘 UI Компоненти

#### Кнопки

**Primary (Gold)**
```css
background: linear-gradient(135deg, #D4AF37 0%, #B89D2F 100%);
color: #0C0C0D;
padding: 14px 32px;
border-radius: 10px;
font: Inter Semibold / 16px;
box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);

hover: box-shadow: 0 6px 24px rgba(212, 175, 55, 0.5);
```

**Secondary (Outline Gold)**
```css
background: transparent;
border: 2px solid #D4AF37;
color: #D4AF37;
padding: 12px 30px;
border-radius: 10px;
font: Inter Semibold / 16px;

hover: 
  background: rgba(212, 175, 55, 0.1);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
```

**Ghost**
```css
background: transparent;
color: #BEBEBE;
padding: 12px 24px;
border-radius: 10px;

hover: 
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.05);
```

#### Input поля
```css
background: #121214;
border: 1px solid #1F1F22;
border-radius: 10px;
padding: 12px 16px;
color: #FFFFFF;
font: Inter / 16px;

focus:
  border-color: #D4AF37;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);

placeholder:
  color: #7A7A7A;
```

#### Cards (темні блоки)
```css
background: #121214;
border: 1px solid #D4AF37;
border-radius: 16px;
padding: 24px;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

hover:
  border-color: #E5C158;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
  transform: translateY(-2px);
```

#### Icon Pack
```
Style: Лінійні, monochrome
Color: #D4AF37 (gold) для активних
Color: #BEBEBE для неактивних
Stroke: 2px
Size: 24x24, 20x20, 16x16
```

---

### 🎭 Стани та анімації

#### Hover стани
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Кнопки */
transform: translateY(-2px);
box-shadow: 0 6px 24px rgba(212, 175, 55, 0.5);

/* Картки */
border-color: #E5C158;
transform: translateY(-4px);
```

#### Focus стани
```css
outline: none;
box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.3);
```

#### Loading стани
```css
/* Shimmer effect */
background: linear-gradient(
  90deg,
  rgba(212, 175, 55, 0.1) 0%,
  rgba(212, 175, 55, 0.3) 50%,
  rgba(212, 175, 55, 0.1) 100%
);
animation: shimmer 2s infinite;
```

---

### 📏 Spacing System

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
```

---

### 🌓 Shadows

```css
/* Глибина */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.6);

/* Золоте світіння */
--shadow-gold: 0 0 20px rgba(212, 175, 55, 0.3);
--shadow-gold-hover: 0 0 40px rgba(212, 175, 55, 0.5);
```

---

### 📐 Border Radius

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

---

## 🗺 2. UX SITEMAP

### Структура сайту

```
├── 🏠 Головна (Landing)
│   ├── Hero Section
│   ├── Переваги (3 блоки)
│   ├── Для кого сервіс
│   ├── Галерея прикладів
│   └── Footer
│
├── 🔐 Авторизація
│   ├── Email вході
│   ├── Google OAuth
│   ├── Meta OAuth
│   └── Відновлення доступу
│
├── 👤 Особистий кабінет
│   ├── 📊 Dashboard (головна панель)
│   │   ├── Мій аватар
│   │   ├── Мої параметри
│   │   └── Швидкий доступ:
│   │       ├── Почати примірку
│   │       ├── Галерея
│   │       └── Шаблони промтів
│   │
│   ├── 👔 Примірочна (Try-On)
│   │   ├── Завантаження фото
│   │   ├── Вибір одягу:
│   │   │   ├── Опис текстом
│   │   │   ├── Завантаження фото
│   │   │   └── Шаблони промтів
│   │   ├── Результат генерації
│   │   └── Збереження → Галерея
│   │
│   ├── 🖼 Галерея
│   │   ├── Всі генерації
│   │   ├── Папки / Теги
│   │   └── Експорт, завантаження
│   │
│   ├── 📝 Шаблони промтів
│   │   ├── Категорії
│   │   ├── Карточки шаблонів
│   │   └── Застосувати → Примірочна
│   │
│   ├── ⚙️ Налаштування
│   │   ├── Профіль
│   │   │   ├── Ім'я
│   │   │   ├── Заміри фігури
│   │   │   ├── Аватарка
│   │   │   └── Видалення акаунту
│   │   │
│   │   └── Приватність
│   │       ├── Хто бачить галерею
│   │       ├── Хто бачить параметри
│   │       ├── Доступ API
│   │       └── Видалення історії
│   │
│   ├── 🔌 API для магазинів
│   │   ├── Створення ключа
│   │   ├── Документація
│   │   ├── Лог використання
│   │   └── Віджети TryOn
│   │
│   └── 💎 Тарифи
│       ├── Free
│       ├── Pro
│       └── Business API
│
└── 📄 Інші сторінки
    ├── Умови використання
    ├── Політика приватності
    ├── Про нас
    └── Контакти
```

---

## 📱 3. СПЕЦИФІКАЦІЯ ЕКРАНІВ

### 🏠 Головна (Landing Page)

#### Hero Section
```
Розмір: Full viewport (100vh)
Фон: Gradient dark + золоті частинки
Елементи:
  - Logo (top-left)
  - Navigation (top-right)
  - H1: "Примірочна AI" (Playfair 48pt)
  - Subtitle: "Примірте будь-який одяг онлайн за 30 секунд" (Inter 20pt)
  - CTA: "Почати примірку" (Gold button, 56px height)
  - Hero Image: 3D render примірочної або AI візуалізація
```

#### Переваги (3 блоки)
```
Layout: Grid 3 колонки
Card:
  - Icon (gold, 48x48)
  - Heading (Inter 24pt Semibold)
  - Description (Inter 16pt Regular)
  - Border: 1px solid gold
  - Hover: підняття + світіння
```

#### Для кого сервіс
```
Layout: Alternating (zigzag)
Sections:
  1. Для покупців (зліва текст, справа зображення)
  2. Для магазинів (справа текст, зліва зображення)
  3. Для дизайнерів (зліва текст, справа зображення)
```

#### Галерея прикладів
```
Layout: Masonry grid (3-4 колонки)
Елементи:
  - Before/After slider
  - Hover: Zoom + overlay з деталями
  - Gold border на активному
```

---

### 🔐 Авторизація

#### Email форма
```
Width: 480px (centered)
Елементи:
  - Logo
  - Heading: "Вхід до Примірочної AI"
  - Email input (з іконкою)
  - Password input (з show/hide)
  - "Запам'ятати мене" checkbox
  - CTA: "Увійти" (gold button full-width)
  - Divider: "або"
  - Google / Meta buttons (outline)
  - Link: "Забули пароль?"
  - Link: "Зареєструватися"
```

---

### 👤 Dashboard (Головна панель)

#### Sidebar (fixed left, 280px)
```
Елементи:
  - Avatar (96x96, circular, gold border)
  - Ім'я користувача
  - "Мої параметри" (collapsible)
  - Navigation:
    * Примірочна (gold icon)
    * Галерея
    * Шаблони
    * API (якщо є доступ)
    * Налаштування
    * Тарифи
  - Footer: Версія, вихід
```

#### Main content area
```
Швидкий доступ (3 великі картки):
  1. "Почати примірку" (gold, biggest)
  2. "Моя галерея" (secondary)
  3. "Шаблони" (secondary)

Статистика (4 маленькі картки):
  - Всього генерацій
  - Генерацій цього місяця
  - Збережені шаблони
  - Використано кредитів

Остання активність (timeline):
  - Останні 5 генерацій з thumbnail
```

---

### 👔 Примірочна (Try-On)

#### Layout: 3 колонки (flexible)

**Колонка 1: Фото людини (30%)**
```
Upload area:
  - Drag & drop зона
  - Border: dashed gold
  - Icon: camera (gold 64x64)
  - Text: "Завантажте фото"
  - Підказка: "JPEG/PNG до 10 МБ"
  - Preview + crop tool
```

**Колонка 2: Вибір одягу (30%)**
```
Tabs (золоті):
  - Опис текстом
  - Фото одягу
  - Шаблон

Tab content:
  [Опис текстом]:
    - Textarea (gold border on focus)
    - Placeholder: "Наприклад: чорна футболка oversize..."
    - Character counter
  
  [Фото одягу]:
    - Upload як у колонці 1
  
  [Шаблон]:
    - Dropdown категорій
    - Grid шаблонів (clickable cards)
```

**Колонка 3: Результат (40%)**
```
Placeholder (до генерації):
  - Icon: AI sparkles (animated)
  - Text: "Ваш результат з'явиться тут"
  - Estimated time: "~30 секунд"

Після генерації:
  - Full image
  - Tools:
    * Zoom
    * Download (gold button)
    * Save to gallery
    * Share
    * Try again
  - Compare slider (before/after)
```

#### Bottom action bar (fixed)
```
Кнопка: "Згенерувати примірку" (gold, full-width, 64px height)
Loading state: Progress bar + rotating steps
```

---

### 🖼 Галерея

#### Фільтри (top bar)
```
- Search (з іконкою)
- Фільтри:
  * Дата (dropdown)
  * Тип (одяг, фон тощо)
  * Теги (multi-select)
- View toggle: Grid / List
- Sort: Найновіші / Найстаріші / Найпопулярніші
```

#### Grid view
```
Layout: 4 колонки (responsive)
Card:
  - Thumbnail (золотий border)
  - Hover: overlay з кнопками:
    * View
    * Download
    * Delete
    * Share
  - Footer: Дата, тип, теги
```

---

### 📝 Шаблони промтів

#### Категорії (sidebar, 240px)
```
- Всі шаблони
- Верхній одяг
- Сукні
- Спортивний одяг
- Аксесуари
- Фони та ракурси
- Мої шаблони (якщо є збережені)
```

#### Grid шаблонів
```
Layout: 3 колонки
Card:
  - Preview image (256x256)
  - Title
  - Description (truncated)
  - Badge: категорія
  - Button: "Використати" (gold)
  - Icon: favorite (для збереження)
```

---

### ⚙️ Налаштування

#### Tabs (left)
```
- Профіль
- Приватність
- Підписка та платежі
- Інтеграції
- Видалення акаунту
```

#### Профіль
```
Sections:
  [Основна інформація]:
    - Avatar upload (circular, gold border)
    - Ім'я (input)
    - Email (disabled, gray)
    - Save button (gold)
  
  [Заміри фігури]:
    - Зріст (input + см)
    - Розмір одягу (dropdown)
    - Тип фігури (dropdown)
    - Note: "Для кращих результатів"
  
  [Безпека]:
    - Змінити пароль
    - Двофакторна автентифікація
```

---

### 🔌 API для магазинів

#### Створення ключа
```
Card:
  - Heading: "Створити новий API ключ"
  - Input: Назва ключа
  - Permissions checkboxes:
    * Try-on генерація
    * Доступ до галереї
    * Webhook notifications
  - Button: "Створити" (gold)

Список ключів:
  - Table з колонками:
    * Назва
    * Ключ (masked, copy button)
    * Дата створення
    * Останнє використання
    * Дії (edit, delete)
```

#### Документація
```
Sidebar з розділами:
  - Quick Start
  - Authentication
  - Endpoints
  - Examples
  - Error codes

Content area:
  - Code snippets (з syntax highlighting)
  - Copy buttons
  - Gold accent на активному розділі
```

---

### 💎 Тарифи

#### Порівняльна таблиця
```
Layout: 3 колонки (Free, Pro, Business)

Card (Pro виділена, gold border):
  - Badge: "Популярний" (для Pro)
  - Heading: назва тарифу
  - Price: ₴/міс
  - Features list (checkmarks gold для Pro)
  - CTA button (gold для Pro, outline для інших)
  - Note: "Перші 7 днів безкоштовно"
```

---

## 🎨 4. ВІДЖЕТИ TRYON AI

### Embed code для магазинів

#### Компактний віджет (300x400px)
```
Елементи:
  - Product image (top)
  - Button: "Примірити на собі" (gold, full-width)
  - Powered by "Примірочна AI" (small, bottom)

При кліку:
  - Modal з Try-On інтерфейсом
  - Upload фото користувача
  - Миттєва генерація
  - Download / Share результату
```

#### Повний віджет (800x600px)
```
Split view:
  - Left: Product
  - Right: Upload area + Result
Inline, без modal
```

---

## 📱 5. МОБІЛЬНА ВЕРСІЯ (Adaptive)

### Breakpoints
```css
--mobile: 320px - 767px
--tablet: 768px - 1023px
--desktop: 1024px+
```

### Мобільна навігація
```
Bottom Navigation Bar (fixed):
  - Примірочна (gold icon if active)
  - Галерея
  - Шаблони
  - Профіль

Burger menu (top-right):
  - API
  - Налаштування
  - Тарифи
  - Вихід
```

### Адаптації
```
Hero: 
  - Stack vertically
  - H1: 32pt на mobile

Try-On:
  - Tabs для вибору режиму (swipe)
  - Full-width кнопка знизу

Галерея:
  - 2 колонки на mobile
  - 3 колонки на tablet
```

---

## ✅ ЧЕКЛИСТ КОМПОНЕНТІВ ДЛЯ FIGMA

### Design System Frame
- [ ] Color palette (всі змінні)
- [ ] Typography scale
- [ ] Button variants (всі стани)
- [ ] Input fields (всі стани)
- [ ] Cards (всі типи)
- [ ] Icons (повний набір)
- [ ] Shadows та effects
- [ ] Spacing system

### UI Kit Frame
- [ ] Navigation components
- [ ] Form elements
- [ ] Modal windows
- [ ] Toast notifications
- [ ] Loading states
- [ ] Empty states
- [ ] Error states

### Готові екрани (20+ pages)
- [ ] Landing (5 sections)
- [ ] Auth (login, register, reset)
- [ ] Dashboard
- [ ] Try-On (всі режими)
- [ ] Gallery (grid + list)
- [ ] Templates (категорії + cards)
- [ ] Settings (всі tabs)
- [ ] API panel
- [ ] Pricing
- [ ] Profile

### Widgets
- [ ] Compact embed
- [ ] Full embed
- [ ] Preview states

### Mobile
- [ ] All screens adapted
- [ ] Bottom navigation
- [ ] Swipe gestures

---

## 🎯 НАСТУПНІ КРОКИ

1. **Імпорт шрифтів до Figma:**
   - Playfair Display (400, 600, 700)
   - Inter (400, 500, 600, 700)

2. **Створення Design Tokens:**
   - Всі кольори як styles
   - Всі text styles
   - Всі effect styles

3. **Побудова Auto Layout:**
   - Всі компоненти responsive
   - Використання constraints

4. **Створення Components:**
   - Variants для всіх станів
   - Properties для кастомізації

5. **Прототипування:**
   - Smart animate
   - Micro-interactions
   - Loading states

---

**Готовність:** Ця специфікація містить ВСЕ необхідне для створення повноцінного Figma файлу!

