# Implementation Plan — Full-Stack Node.js + SQLite Database Integration

This plan details the architectural upgrade of S.M. Rahat's Career Hub from a client-side static application to an **industry-level full-stack software system** with a Node.js backend, a relational database, user authentication, and a database management console.

## User Review Required

> [!IMPORTANT]
> - **Technology Stack**: Node.js + Express for the backend API, SQLite (using `sqlite3`) as a file-based relational database (requiring no complex DB server setup, ensuring extreme ease of migration and local running), and `bcryptjs` for secure password hashing.
> - **Local Run & Credentials**: The application will run locally on `http://localhost:3000`. We will pre-configure the credentials:
>   - **Username**: `rahat`
>   - **Password**: `careerhub2026`
> - **Database Console**: We will add a **Database Console** module to the frontend. This console will allow running custom SQL queries directly from the UI, viewing database statistics (row counts, table schema), and running database migrations.
> - **Android Integration**: The Android app wrapper's WebView will be updated to point to `http://10.0.2.2:3000` (standard Android Emulator loopback) or the user's host address, with a graceful fallback to local storage if the backend server is offline.

---

## Proposed Changes

### Backend Component
We will build a Node.js backend at the root of `E:\Task-organizer`.

#### [NEW] [package.json](file:///E:/Task-organizer/package.json)
Configure package dependencies (`express`, `cors`, `sqlite3`, `bcryptjs`, `jsonwebtoken`).

#### [NEW] [database.js](file:///E:/Task-organizer/database.js)
Database connection management, schema creation (migrations), and seed data injection (populating the `users` table and importing default jobs/checklists).

#### [NEW] [server.js](file:///E:/Task-organizer/server.js)
Node.js + Express API server exposing endpoints:
- **Auth**: `POST /api/auth/login`, `GET /api/auth/me`
- **Jobs**: `GET /api/jobs`, `POST /api/jobs`, `PUT /api/jobs/:id`, `DELETE /api/jobs/:id`
- **LinkedIn Checklists**: `GET /api/linkedin`, `POST /api/linkedin/toggle`
- **Action Plan**: `GET /api/actionplan`, `POST /api/actionplan/toggle`
- **DB Console**: `POST /api/db/query` (run custom SQL queries and return tabular results)

---

### Database Schema Design

The file-based SQLite database (`database.sqlite`) contains four tables organized as follows:

#### 1. `users` Table
Stores system user accounts with hashed credentials.
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `username` (TEXT UNIQUE NOT NULL)
- `password` (TEXT NOT NULL) — hashed with bcryptjs (salt rounds = 10)

#### 2. `jobs` Table
Stores job tracking entries for the Kanban Board.
- `id` (TEXT PRIMARY KEY) — unique client-generated UUID
- `title` (TEXT NOT NULL) — job position name
- `company` (TEXT NOT NULL) — employer organization name
- `location` (TEXT) — job location
- `salary` (TEXT) — salary details
- `url` (TEXT) — listing source URL
- `source` (TEXT) — website or channel name
- `deadline` (TEXT) — application deadline date
- `notes` (TEXT) — candidate notes
- `stage` (TEXT NOT NULL) — current Kanban stage (`saved`, `applied`, `interview`, `offer`, `rejected`)
- `user_id` (INTEGER, FOREIGN KEY referencing `users(id)`)
- `created_at` (TEXT) — record creation timestamp

#### 3. `linkedin_checklist` Table
Tracks checked state of LinkedIn profile items.
- `item_id` (TEXT NOT NULL) — key of the checklist item matching `data.js`
- `user_id` (INTEGER NOT NULL, FOREIGN KEY referencing `users(id)`)
- `done` (INTEGER DEFAULT 0) — binary checked status (1 = done, 0 = active)
- Primary Key: `(item_id, user_id)`

#### 4. `action_plan` Table
Tracks task checklist progress for the 4-week preparation plan.
- `task_key` (TEXT NOT NULL) — composite key identifying week and task number
- `user_id` (INTEGER NOT NULL, FOREIGN KEY referencing `users(id)`)
- `done` (INTEGER DEFAULT 0) — binary checked status (1 = done, 0 = active)
- Primary Key: `(task_key, user_id)`

---

### Frontend Component
We will update the frontend files in `E:\Task-organizer` to communicate with the backend.

#### [MODIFY] [index.html](file:///E:/Task-organizer/index.html)
- Add a new "Database Console" nav item to the sidebar.
- Add the corresponding "Database Console" section with table list, schema browser, and a SQL editor query runner.
- Add a beautiful Full-Screen Login Modal overlay that appears when the user is not authenticated.

#### [MODIFY] [app.js](file:///E:/Task-organizer/app.js)
- Update data operations (`trackedJobs`, `linkedinState`, `actionPlanState`) to fetch from and push to the API server via `fetch`.
- Implement API token storage in `localStorage` / Session management.
- Implement Login/Logout handlers.
- Add logic for the Database Console (fetching tables info, executing custom queries, rendering SQL results tables).

---

### Android Component
We will update the Android project wrapper.

#### [MODIFY] [MainActivity.kt](file:///E:/Task-organizer/android/app/src/main/java/com/example/taskorganizer/MainActivity.kt)
Ensure local asset file access is permitted, and cleartext traffic is enabled in the Manifest to allow local server connections.

---

## Verification Plan

### Automated Tests
- Run database setup script and verify `database.sqlite` is created with tables and seeded user `rahat`.
- Start server using `node server.js` and verify it binds to port 3000.
- Execute automated HTTP requests via curl or tests to login and CRUD jobs.

### Manual Verification
- Launch local browser at `http://localhost:3000` and verify the login modal prevents access.
- Login with `rahat` / `careerhub2026` and verify dashboard displays.
- Add/delete jobs, check tasks, and verify changes persist in the SQLite database by running `SELECT * FROM jobs` in the Database Console.
