# 🎯 Task Organizer & Career Hub Walkthrough

You have a complete, production-ready, **full-stack portfolio project** saved under **`E:\Task-organizer`** and successfully pushed to your GitHub repository at [TabassumAuthoy123/Task-Organizer](https://github.com/TabassumAuthoy123/Task-Organizer.git).

---

## 📁 Repository Structure

Your project contains a high-fidelity web dashboard with a Node.js Express backend, a local SQLite database, and a native Android application wrapper:

```
E:\Task-organizer\
│
├── index.html            # Main dashboard layout (9 feature modules + Fullscreen Login Modal + Database Console)
├── style.css             # Glassmorphism dark theme styling (1000+ lines of vanilla CSS3 + DB Table & Console views)
├── data.js               # Large dataset containing 35 detailed interview Q&As, benchmarks, templates
├── app.js                # Core frontend controller (fetch sync, JWT auth management, Kanban, DB Console SQL executor)
├── database.js           # SQLite3 database connection manager, table creations (users, jobs, checklist, action_plan) and seed logic
├── database.sqlite       # Pre-seeded SQLite database file containing default credentials and starter tracking data
├── server.js             # Node.js + Express REST API (Auth, Jobs CRUD, Checklist state toggles, Database Console SQL query executor)
├── package.json          # Node package definition (Express, Cors, SQLite3, BcryptJS, JWT)
├── README.md             # Comprehensive developer documentation & interview guide (updated for full-stack)
├── .gitignore            # Git configuration ignoring node_modules, build outputs, local properties
│
├── docs/                 # Print-ready resumes and CVs
│   ├── resume.html       # 1-Page ATS-friendly resume
│   └── cv.html           # 2-Page professional styled CV
│
├── releases/             # Pre-built executables
│   └── task-organizer.apk # Fully compiled ready-to-install Android APK (11.98 MB)
│
└── android/              # Native Android wrapper project (Android Studio compatible)
    ├── build.gradle.kts  # Root Gradle configuration
    ├── settings.gradle.kts
    ├── app/
    │   ├── build.gradle.kts
    │   └── src/main/
    │       ├── AndroidManifest.xml  # Adds INTERNET permission & allows usesCleartextTraffic (HTTP to local backend)
    │       ├── assets/              # Web assets copied inside (index.html, style.css, app.js, data.js, etc.)
    │       ├── res/values/themes.xml # Optimized theme preventing white flash on app startup
    │       └── java/com/example/taskorganizer/
    │           └── MainActivity.kt  # WebView loader (dark background & JS/DOM storage enabled)
```

---

## ⚙️ How the Full-Stack Sync and DB Console Works

1. **Secure Access**: A full-screen Login Modal prevents access to the dashboard until user `rahat` logs in. Credentials are validated on the Node.js server using `bcryptjs` password hashing and a signed `jsonwebtoken` (JWT) is returned and stored in the browser's `localStorage`.
2. **Dynamic REST API Sync**:
   - **Kanban Board**: Dragging a card instantly performs a `PUT /api/jobs/:id` request to update its `stage` column in the SQLite `jobs` table. Adding or deleting cards runs `POST` or `DELETE` requests respectively.
   - **Checklists & Timelines**: Toggling tasks in the LinkedIn Checklist or the 4-week Action Plan performs update statements in their respective SQLite tables (`linkedin_checklist` and `action_plan`).
3. **Interactive Database Console**:
   - Displays all active tables, their exact schema details (PRAGMA table_info), and live row counts.
   - Provides a SQL query execution runner (text editor). You can type and run arbitrary SQL commands (e.g., `SELECT * FROM jobs;` or `INSERT INTO jobs ...`) and see the results formatted as a gorgeous glassmorphic table in real-time.
   - Includes a "Reset Database" command that drops existing tables, re-runs SQL migrations, and re-seeds the default user and data.

---

## 🛠️ How to Explain this Project in an Interview

This application is designed specifically to showcase your knowledge as an **industry-ready Full-Stack Developer** who understands database management, REST API architecture, and mobile wrapper deployment.

### 1. Elevator Pitch (The "Why")
> *"I upgraded **Task Organizer & Career Hub** from a static dashboard to a full-stack, production-ready system. It features a Node.js and Express.js backend API, a relational SQLite database, secure JWT-based user authentication, and a custom **Database Console** built directly into the UI. The dashboard is packaged into a native Android APK using Gradle. I built it without heavy frameworks to prove my command of native JavaScript, raw SQL queries, and clear Android WebView network bridging."*

### 2. Architecture & Design Decisions
*   **Node.js & Express**: Provides a lightweight, high-performance web server. Restricts endpoints with an `authenticateToken` JWT middleware.
*   **Relational SQLite DB**: Perfect for local and portable testing. By using a file-based SQLite database (`database.sqlite`), the entire database structure, indexes, and seeded data are contained in a single portable file, making it instantly runnable on any machine.
*   **Tabular Console UI**: Built a custom SQL runner in the browser that communicates with the Express backend, executing raw queries and building dynamic UI tables on the fly. This showcases frontend-backend orchestration.
*   **WebView Loopback & Cleartext Permission**: WebViews running from `file:///android_asset/` must point HTTP requests to `http://10.0.2.2:3000` (which Android emulators reserve for the host computer loopback). I enabled `android:usesCleartextTraffic="true"` in the manifest to allow the Android WebView to talk to the local Express server over HTTP.

### 3. Interview Q&A Prep (Full-Stack Edition)

| Question | Answer |
|----------|--------|
| *"Why did you use SQLite instead of PostgreSQL or MongoDB?"* | "SQLite is serverless and zero-configuration. The entire database is stored in a single file (`database.sqlite`) which can be version-controlled, allowing another developer to clone the repo and start working immediately without configuring a DB cluster. It's ideal for portable desktop/mobile apps and development setups." |
| *"How is user authentication secured?"* | "We use `bcryptjs` to securely hash the user's password with a salt round of 10. When the user logs in, the server verifies the hash and issues a signed JSON Web Token (JWT) using a secure secret. This token is sent in the `Authorization: Bearer <token>` header of every subsequent HTTP request, which the server validates using an authentication middleware." |
| *"How do you prevent SQL Injection in your API endpoints?"* | "In the main API routes (such as CRUDing jobs or checking checklists), I used parameterized queries (`db.run('SELECT * FROM jobs WHERE user_id = ?', [req.user.id])`). SQLite3 prepares the query plan before binding the arguments, preventing malicious user inputs from altering the query structure. The custom DB Console is intentionally designed for admin SQL execution, allowing full DDL/DML access for demonstration." |
| *"What is the main benefit of cleartext traffic configuration in Android?"* | "Android blocks HTTP (non-HTTPS) traffic by default to prevent eavesdropping. However, during local development and testing against a local Node.js server, we must communicate via HTTP. By enabling `usesCleartextTraffic=\"true\"` in the Manifest, we allow the app WebView to connect to the developer's localhost host address (`http://10.0.2.2:3000`)." |

---

## 📱 Running and Testing the Project

1. **Start the local Node backend**:
   ```bash
   npm install
   npm run setup
   npm start
   ```
2. **Access via browser**:
   Navigate to `http://localhost:3000` and login with `rahat` / `careerhub2026`.
3. **Access via mobile**:
   Install `releases/task-organizer.apk` on a running Android emulator, and it will fetch data from your local Node server running on the same PC automatically.
