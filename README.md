# Sample Campaign Landing Page Assessment

This project contains both the **backend (Express + Sequelize + PostgreSQL)** and **frontend (Next.js + Tailwind + React Query)** to manage and render campaign landing pages.

---

## 🖥️ Backend Setup

### 📁 Location

`/backend`

### 🔧 Prerequisites

- Node.js >= 18
- PostgreSQL running locally

### 📦 Install Dependencies

```bash
cd backend
npm install
```

### ⚙️ Environment Setup

Create a `.env` file in the `/backend` folder:

```env
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=campaign_db
DB_HOST=localhost
DB_PORT=5432
```

### 🧱 Run Migrations & Seeders

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 🚀 Start Backend Server

```bash
npm run dev
```

By default runs at: `http://localhost:5000`

---

### 🧪 Test API with REST Client Extension

To test the backend API, open the `api-test.http` file located in the `/backend` directory using **Visual Studio Code** with the **REST Client extension**.

#### ✅ How to use:

1. Install the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) in VS Code.
2. Open `backend/api-test.http`.
3. Click **“Send Request”** above any request block to test it.
4. Make sure your backend server is running (`npm run dev`).

---

## 🌐 Frontend Setup

### 📁 Location

`/frontend`

### 📦 Install Dependencies

```bash
cd frontend
npm install
```

### 🚀 Start Dev Server

```bash
npm run dev
```

Frontend will be available at: `http://localhost:3000`

---

## 🧪 API Base URL

Ensure frontend `.env.local` contains:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

---

## 📦 Packages & Dependencies

### Backend

| Package       | Version | Purpose                                                                |
| ------------- | ------- | ---------------------------------------------------------------------- |
| express       | ^5.1.0  | Web framework for building the API                                     |
| sequelize     | ^6.37.7 | ORM for PostgreSQL database interactions                               |
| pg            | ^8.16.0 | PostgreSQL client for Node.js                                          |
| pg-hstore     | ^2.3.4  | Serialization/deserialization of JSON data to PostgreSQL hstore format |
| cors          | ^2.8.5  | Middleware for enabling CORS                                           |
| dotenv        | ^16.5.0 | Loads environment variables from .env file                             |
| body-parser   | ^2.2.0  | Parse incoming request bodies                                          |
| nodemon       | ^3.1.10 | Development server with auto-reload                                    |
| sequelize-cli | ^6.6.3  | CLI for Sequelize database migrations and seeders                      |

### Frontend

| Package               | Version | Purpose                                          |
| --------------------- | ------- | ------------------------------------------------ |
| next                  | 15.3.3  | React framework for server-rendered applications |
| react                 | ^19.0.0 | JavaScript library for building user interfaces  |
| react-dom             | ^19.0.0 | React package for working with the DOM           |
| @tanstack/react-query | ^5.81.0 | Data fetching and state management               |
| axios                 | ^1.10.0 | Promise-based HTTP client                        |
| tailwindcss           | ^4      | Utility-first CSS framework                      |
| eslint                | ^9      | JavaScript/TypeScript linter                     |

---

## 📁 Folder Highlights

### Backend

- `controllers/` – API route handlers
- `models/` – Sequelize models
- `routes/` – Express routers
- `services/` – Business logic

### Frontend

- `src/app/` – Pages and routes
- `src/components/` – Reusable components
- `src/services/` – API logic via Axios/React Query
- `src/lib/axios.js` – Axios base config

---

## 🔧 Scripts

| Command                                 | Purpose                 |
| --------------------------------------- | ----------------------- |
| `npm run dev`                           | Start dev server        |
| `npx sequelize-cli db:migrate`          | Run migrations          |
| `npx sequelize-cli db:seed:all`         | Seed initial data       |
| `npx sequelize-cli db:migrate:undo:all` | Rollback all migrations |

---
