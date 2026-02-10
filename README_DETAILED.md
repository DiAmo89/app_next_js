# 🚀 App_NextJs - Modern Real Estate & Community Platform

A full-stack Next.js 16 application featuring Google OAuth authentication, Supabase PostgreSQL database integration, and a responsive modern UI built with Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?logo=tailwindcss)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-336791?logo=postgresql)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Getting Started](#getting-started)
- [Database Setup](#database-setup)
- [Authentication](#authentication)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [API Routes](#api-routes)
- [Styling](#styling)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🔐 Authentication

- **Google OAuth 2.0** integration via NextAuth.js
- Secure session management with JWT tokens
- Persistent user sessions with database storage
- Graceful error handling when database is unavailable

### 🎨 User Interface

- **Modern, responsive design** with Tailwind CSS v4
- **Light/Dark mode toggle** with `next-themes`
- Smooth animations and transitions
- Mobile-first approach with breakpoints
- Green color theme throughout

### 📱 Pages & Features

#### Public Pages

- **Home** - Hero section with CTAs for products, reviews, and community
- **Products** - Catalog with product cards and carousel
- **Categories** - Browse products by category
- **News/Forum** - Community forum for discussions
- **About** - About page with team info
- **More** - Additional features with interactive counter
- **Learning Grid** - Grid-based learning resources
- **Career** - Career opportunities

#### Authenticated Pages

- **Profile** - User profile management
- **Reviews** - Read and write product reviews
- **Todos** - Personal todo/task management
- **Users** - Community members directory

#### Special Features

- **Reviews Page** - Split layout with:
  - LEFT: Form to add new reviews (fixed width column)
  - RIGHT: List of all reviews from community
- **Todo Management** - Create, view, and track todos
- **Forum/News** - Create and read forum posts
- **Theme Toggle** - Switch between light and dark modes
- **Responsive Navbar** - Desktop dropdown menus + mobile support

### 🗄️ Database

- PostgreSQL with Drizzle ORM
- Automatic schema management with Drizzle Kit
- Tables for: users, posts, reviews, todos
- Cascade delete relationships
- Type-safe database queries

### ⚠️ Error Handling

- Graceful database connection failures
- User-friendly error messages
- Console warnings for debugging
- Application continues functioning without database
- Try-catch wrapped database operations

---

## 🛠 Tech Stack

### Frontend

- **Next.js 16.1.4** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **next-themes** - Dark mode support
- **Lucide React** - Beautiful icons

### Backend

- **Next.js API Routes** - Serverless functions
- **NextAuth.js 4.24.13** - Authentication
- **Drizzle ORM 0.45.1** - Database ORM

### Database

- **Supabase** - PostgreSQL hosting
- **PostgreSQL** - Relational database
- **Drizzle Kit** - Schema migration tool

### UI Components

- **Radix UI** - Headless UI primitives
- **Embla Carousel** - Carousel component
- **Custom Components** - Tailored solutions

---

## 📁 Project Structure

```
immobilien_app/
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.tsx                 # Home page
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── reviews/                 # Reviews with split layout
│   │   │   ├── news/                    # Forum/News page
│   │   │   ├── about/
│   │   │   ├── more/                    # Additional features
│   │   │   ├── todos/                   # Todo management
│   │   │   ├── profile/                 # User profile
│   │   │   ├── users/                   # Users directory
│   │   │   ├── login/                   # Login page
│   │   │   ├── career/                  # Career page
│   │   │   ├── learning-grid/           # Learning resources
│   │   │   └── api/auth/[...nextauth]/  # NextAuth routes
│   │   ├── actions/                     # Server actions
│   │   │   ├── create-post.ts
│   │   │   ├── create-review.ts
│   │   │   ├── create-todo.ts
│   │   │   ├── delete-post.ts
│   │   │   └── delete-review.ts
│   │   ├── layout.tsx                   # Root layout
│   │   ├── globals.css                  # Global styles
│   │   └── types/
│   │       └── next-auth.d.ts           # Auth type definitions
│   ├── components/
│   │   ├── nav-bar/                     # Navigation component
│   │   ├── sign-in-sign-out/            # Auth buttons
│   │   ├── themes-toggle/               # Dark mode toggle
│   │   ├── counter/                     # Interactive counter
│   │   ├── forum/                       # Forum component
│   │   ├── product-card/                # Product card
│   │   ├── product-carousel/            # Product carousel
│   │   ├── create-post-forma/           # Forum post form
│   │   ├── create-review-form/          # Review form
│   │   ├── create-review-links/         # Review links
│   │   ├── delete-post-btn/             # Delete button
│   │   ├── change-todo-toggle/          # Todo toggle
│   │   ├── ui/                          # UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── carousel.tsx
│   │   └── providers/                   # Providers
│   ├── db/
│   │   ├── index.ts                     # Database connection
│   │   └── schema.ts                    # Drizzle schema
│   ├── lib/
│   │   ├── utils.ts
│   │   └── auth/
│   │       └── auth-options.ts          # NextAuth configuration
│   ├── providers/
│   │   ├── providers.tsx                # Client providers wrapper
│   │   └── theme-provider.tsx           # Theme provider
│   └── common/
│       └── types/
│           ├── Category.ts
│           ├── Product.ts
│           └── User.ts
├── drizzle/                             # Migration files
│   ├── migrations/
│   └── meta/
├── public/                              # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── drizzle.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## 🚀 Installation

### Prerequisites

- Node.js 18+ (Recommended: 20 LTS)
- npm or yarn
- Git
- Supabase account (for database)
- Google OAuth credentials

### Step 1: Clone Repository

```bash
git clone https://github.com/DiAmo89/app_next_js.git
cd immobilien_app
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create `.env.local` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://postgres:password@host:5432/postgres

# Authentication
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Step 4: Database Migration

```bash
npx drizzle-kit push
```

### Step 5: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Setup

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Navigate to **APIs & Services** → **Credentials**
4. Create **OAuth 2.0 Client ID** (Web Application)
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy **Client ID** and **Client Secret** to `.env.local`

### Supabase Setup

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Go to **Settings** → **Database** → **Connection String**
4. Copy URI format connection string
5. Replace `[YOUR-PASSWORD]` with your database password
6. Paste into `DATABASE_URL` in `.env.local`

### NextAuth Secret Generation

```bash
openssl rand -base64 32
```

Copy output to `NEXTAUTH_SECRET` in `.env.local`

---

## 🎯 Getting Started

### Development Workflow

```bash
# Start dev server
npm run dev

# Generate database migrations
npm run db:generate

# Push migrations to database
npm run db:migrate

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Key Files to Understand

1. **src/lib/auth/auth-options.ts** - Authentication configuration
2. **src/db/schema.ts** - Database schema definitions
3. **src/app/layout.tsx** - Root layout with providers
4. **src/components/nav-bar/index.tsx** - Main navigation

---

## 🗄️ Database Setup

### Schema Overview

#### Users Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  image TEXT,
  role VARCHAR(100) DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

#### Posts Table (Forum)

```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  text VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

#### Reviews Table

```sql
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

#### Todos Table

```sql
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  description VARCHAR(250) NOT NULL,
  status BOOLEAN DEFAULT false,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

### Using Drizzle ORM

Example query:

```typescript
import { db } from "@/db";
import { postsTable } from "@/db/schema";

// Select all posts
const posts = await db.select().from(postsTable);

// Insert new post
await db.insert(postsTable).values({
  title: "Post Title",
  text: "Post content",
});

// Update post
await db
  .update(postsTable)
  .set({ title: "New Title" })
  .where(eq(postsTable.id, 1));

// Delete post
await db.delete(postsTable).where(eq(postsTable.id, 1));
```

---

## 🔐 Authentication

### How It Works

1. User clicks "Sign In" button
2. Redirected to Google OAuth consent screen
3. User approves - redirected to callback route
4. NextAuth stores session in JWT + Database
5. User stays logged in across pages
6. Session available in components via `useSession()`

### Using Session in Components

```typescript
import { useSession } from "next-auth/react";

export default function YourComponent() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Please sign in</p>;
  }

  return (
    <div>
      <p>Welcome, {session.user.name}!</p>
      <img src={session.user.image} alt="Profile" />
    </div>
  );
}
```

### Server-side Session Check

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Unauthorized</p>;
  }

  return <div>Welcome, {session.user.name}!</div>;
}
```

---

## 📄 Pages & Routes

### Public Routes

| Route            | Component        | Description                     |
| ---------------- | ---------------- | ------------------------------- |
| `/`              | Home             | Landing page with hero section  |
| `/products`      | Products Catalog | Product listing page            |
| `/categories`    | Categories       | Browse by category              |
| `/news`          | Forum            | Community forum discussions     |
| `/about`         | About            | About page                      |
| `/about/me`      | About Me         | Personal info                   |
| `/more`          | More Features    | Counter and additional features |
| `/learning-grid` | Learning         | Grid-based resources            |
| `/career`        | Career           | Job opportunities               |
| `/login`         | Login            | Login page                      |

### Protected Routes (Requires Auth)

| Route          | Component  | Description                    |
| -------------- | ---------- | ------------------------------ |
| `/profile`     | Profile    | User profile page              |
| `/reviews`     | Reviews    | Reviews page with split layout |
| `/reviews/new` | New Review | Create review page             |
| `/todos`       | Todos      | Todo list management           |
| `/todos/new`   | New Todo   | Create todo page               |
| `/users`       | Users      | Community members              |

### API Routes

| Endpoint                       | Method | Purpose        |
| ------------------------------ | ------ | -------------- |
| `/api/auth/signin/:provider`   | POST   | Sign in        |
| `/api/auth/callback/:provider` | GET    | OAuth callback |
| `/api/auth/session`            | GET    | Get session    |
| `/api/auth/signout`            | POST   | Sign out       |
| `/api/auth/providers`          | GET    | List providers |

---

## 🧩 Components

### Key Components

#### Navigation (nav-bar)

- Desktop navigation with dropdown menus
- Mobile-responsive hamburger menu
- Links to all main pages
- "More" dropdown for additional features

#### Sign In/Out (sign-in-sign-out)

- Conditional rendering based on auth state
- Google OAuth button when not signed in
- User avatar and sign out button when signed in

#### Themes Toggle (themes-toggle)

- Light/dark mode switcher
- Smooth transitions
- Persisted user preference

#### Counter (counter)

- Interactive increment/decrement buttons
- State management with React hooks
- Styled with Tailwind CSS

#### Forum (forum)

- Display forum posts
- Error handling for database failures
- Delete button for posts

#### Product Card (product-card)

- Display product information
- Image carousel
- Add to cart functionality

#### Forms

- **CreatePostForm** - Forum post creation
- **CreateReviewForm** - Review submission
- **CreateTodoForm** - Todo creation

---

## 🎨 Styling

### Tailwind CSS v4

The project uses Tailwind CSS v4 with updated syntax:

```tsx
// Color utilities
className = "bg-linear-to-r from-green-600 to-green-700"; // Gradients
className = "text-black dark:text-white"; // Dark mode
className = "hover:shadow-lg transition-shadow"; // Hover + transitions

// Responsive design
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // Responsive grid

// Spacing & sizing
className = "px-4 py-2 rounded-lg"; // Padding & radius
```

### Dark Mode

Dark mode is enabled via `next-themes`:

```tsx
// Automatic dark mode based on:
// 1. System preference
// 2. localStorage preference
// 3. Manual toggle

<html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* Content */}
    </ThemeProvider>
  </body>
</html>
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variables
5. Deploy

### Deploy to Other Platforms

#### Netlify

```bash
npm run build
# Deploy 'out' directory
```

#### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables for Production

Set these in your hosting platform:

- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (use production URL)
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Database Connection Error

```
Error: getaddrinfo ENOTFOUND db.supabase.co
```

**Solution:**

- Check internet connection
- Verify DATABASE_URL is correct
- Check Supabase firewall settings
- Add your IP to Supabase IP whitelist

#### 2. Port 3000 Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9  # macOS/Linux
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process  # Windows
```

#### 3. Lock File Issues

```bash
rm -rf .next
npm run dev
```

#### 4. NextAuth Errors

- Ensure `NEXTAUTH_SECRET` is set
- Verify `NEXTAUTH_URL` matches your domain
- Check Google credentials are correct

#### 5. Theme Not Persisting

- Check `next-themes` is properly configured
- Ensure `suppressHydrationWarning` is on `<html>`
- Clear browser cache and localStorage

### Debug Mode

Enable NextAuth debug logging:

```env
NEXTAUTH_DEBUG=true
```

---

## 📊 Performance

### Optimization Tips

1. **Image Optimization**
   - Use Next.js `Image` component
   - Automatic WebP conversion
   - Responsive images

2. **Code Splitting**
   - Automatic by Next.js
   - Dynamic imports for heavy components

3. **Database Queries**
   - Use Drizzle queries efficiently
   - Add indexes for frequent searches
   - Cache query results when possible

4. **Styling**
   - Tailwind CSS is tree-shaken
   - Only used styles are included in bundle
   - Approximately 50KB gzipped

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Code Standards

- Use TypeScript for type safety
- Follow ESLint configuration
- Write meaningful commit messages
- Add comments for complex logic

---

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👥 Support

For support:

1. Check the troubleshooting section
2. Open an issue on GitHub
3. Check existing issues/discussions

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [NextAuth.js](https://next-auth.js.org)
- [Drizzle ORM](https://orm.drizzle.team)
- [Supabase Documentation](https://supabase.com/docs)

---

## 📈 Project Updates

### Version 1.0.0 (Current)

✅ Google OAuth authentication  
✅ Responsive design with Tailwind CSS v4  
✅ Dark mode support  
✅ PostgreSQL database integration  
✅ Forum functionality  
✅ Review system  
✅ Todo management  
✅ User profiles  
✅ Error handling  
✅ Graceful database failure handling

### Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Social sharing
- [ ] Advanced search filters
- [ ] User notifications
- [ ] Image upload to cloud storage
- [ ] Analytics dashboard
- [ ] Admin panel
- [ ] Multi-language support
- [ ] API documentation (Swagger)

---

## 🙏 Acknowledgments

- Next.js team for amazing framework
- Vercel for hosting
- Supabase for database service
- Tailwind Labs for CSS framework
- All open-source contributors

---

## 📞 Contact

**Developer:** Dima  
**Email:** dima898989g@gmail.com  
**GitHub:** [@DiAmo89](https://github.com/DiAmo89)

---

**Happy coding! 🚀**
