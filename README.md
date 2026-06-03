# 🎯 Task Organizer — Career Management Dashboard

> **A full-stack, production-ready career management & job search dashboard built with vanilla HTML5, CSS3 (Glassmorphism) and JavaScript (ES6+) — no framework, no build step, 100% portable.**

[![Live Demo](https://img.shields.io/badge/Demo-Open%20in%20Browser-7c3aed?style=for-the-badge)](index.html)
[![Android APK](https://img.shields.io/badge/Android-Download%20APK-10b981?style=for-the-badge)](android/)

---

## 🏗️ Architecture & Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | HTML5 Semantic, CSS3, Vanilla JS (ES6+) | Zero dependencies, instant load, full control |
| **Styling** | Custom CSS with CSS Variables, Glassmorphism, CSS Grid/Flexbox | Premium dark theme, responsive, 900+ lines |
| **Backend & API** | Node.js, Express.js | Industry-level REST API, secure endpoint design |
| **Database** | SQLite3 (Relational DB) | SQL schema, easy migration, lightweight, file-based |
| **Auth** | JWT (JSON Web Tokens), BCrypt.js | Production-ready user authentication and hashing |
| **Mobile** | Android WebView (Kotlin, Gradle, JVM) | Wrapper app pointing to local backend loopback |
| **AI/ML** | Fabric fault detection model (CNN, Python, TensorFlow) | Showcases AI integration capability |

### Design Patterns Used
- **MVC-like separation**: `data.js` (Model) → `index.html` (View) → `app.js` (Controller)
- **Event-driven architecture**: Drag-and-drop, click handlers, state callbacks
- **Observer pattern**: Stats auto-update when any module state changes
- **LocalStorage persistence**: Every user interaction saved in real-time
- **Progressive Enhancement**: Works without JS for basic content, JS adds interactivity

---

## ✨ Features (9 Modules)

| Module | Description | Key Tech |
|--------|-------------|----------|
| 📋 **Job Tracker (Kanban)** | Drag-and-drop board: Saved → Applied → Interview → Offer → Rejected | HTML5 Drag & Drop API, LocalStorage |
| 🔗 **Direct Links Hub** | 10 portals, 2 FB groups, 4 LinkedIn searches, 12 career pages | Dynamic rendering, search/filter |
| ✅ **LinkedIn Optimizer** | 11-step interactive checklist with priority levels & progress bar | State persistence, CSS animations |
| 💼 **Interview Prep** | 35 Q&A across 5 categories with expandable answers & tips | Accordion pattern, tab filtering |
| 📄 **CV & Resume** | 1-page ATS Resume + 2-page Professional CV (print-to-PDF) | CSS @page, @media print |
| 📊 **Salary Guide** | Market benchmarks with visual bar charts & negotiation tips | CSS-driven data visualization |
| 📩 **Cold Messages** | 5 copy-paste templates with highlighted placeholders | Clipboard API |
| 🗓️ **4-Week Action Plan** | 108 daily tasks with progress tracking across 4 weeks | Nested state management |
| 👤 **Profile Photo Guide** | Visual best practices for professional photos | Content rendering |

---

## 🚀 Quick Start

### Full-Stack Server & Web App (Recommended)
This application includes a Node.js + Express backend with a SQLite database. Follow these steps to run the full-stack server locally:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Initialize/Reset Database**:
   ```bash
   npm run setup
   ```
   *(This creates the `database.sqlite` file and seeds the default user).*

3. **Start the Server**:
   ```bash
   npm start
   ```
   *(The server will run on `http://localhost:3000`)*.

4. **Access the App**:
   Open your browser and navigate to `http://localhost:3000`. You will be prompted to login.
   - **Username**: `rahat`
   - **Password**: `careerhub2026`

### Mobile App (Android APK)
The Android app is pre-configured to communicate with the local Node.js server.
1. Download the pre-compiled APK from [releases/task-organizer.apk](releases/task-organizer.apk).
2. Install it on your Android Emulator or connected physical device:
   ```bash
   adb install releases/task-organizer.apk
   ```
   *(Note: The Android app points to the emulator loopback `http://10.0.2.2:3000`. Make sure your local Express server is running when testing in the emulator).*

---

## 📁 Project Structure

```
Task-Organizer/
├── index.html          # Main SPA dashboard (300+ lines)
├── style.css           # Premium dark theme (900+ lines, 47KB)
├── app.js              # Interactive logic (600+ lines, 45KB)
├── data.js             # Complete data layer (1681 lines, 124KB)
├── docs/
│   ├── resume.html     # Printable 1-page ATS resume
│   └── cv.html         # Printable 2-page CV with sidebar
├── android/            # Android WebView APK project
├── README.md           # This file
└── .gitignore
```

---

## 🧠 How to Explain This Project in an Interview

### Quick Pitch (30 seconds)
> "I built a full-stack career management dashboard from scratch using vanilla JavaScript, CSS3, and HTML5. It features a Kanban-style job tracker with drag-and-drop (HTML5 Drag API), real-time state persistence via LocalStorage, dynamic content rendering from a structured data layer, and responsive glassmorphism UI. I also wrapped it in an Android WebView for mobile. The project demonstrates MVC architecture, offline-first design, and modern CSS techniques — all without any framework or build tools."

### Technical Deep-Dive Points

**1. Why No Framework?**
> "I deliberately chose vanilla JS to demonstrate I understand the underlying APIs — DOM manipulation, event delegation, state management, and the Drag & Drop API — rather than abstracting them behind React/Vue. This shows I can work with or without frameworks."

**2. State Management**
> "I implemented a custom state management system using LocalStorage. Every user action (dragging a job card, checking a task, filtering questions) triggers a save. On reload, the entire state is restored. This is similar to what Redux/Vuex does, but I built it from scratch."

**3. CSS Architecture**
> "The 900-line CSS file uses CSS Custom Properties (variables) for theming, CSS Grid + Flexbox for layout, backdrop-filter for glassmorphism, @keyframes for 8 different animations, and @media queries for 3 breakpoints. I also implemented print-specific styles for the CV/Resume documents."

**4. Data Layer Design**
> "The 1681-line data.js acts as a model layer with 11 typed constants. It's structured for easy maintenance — if the user wants to add jobs, just push to the array. This separation means the view and controller never hardcode content."

**5. Drag & Drop**
> "I used the native HTML5 Drag & Drop API with dragstart, dragover, dragleave, and drop events. Each Kanban column is a drop zone. When a card is dropped, the state updates, re-renders, and persists — all synchronously."

**6. Android Integration**
> "I used Google's `android` CLI to create a WebView-based Android app that loads the same HTML/CSS/JS. This demonstrates understanding of hybrid app architecture — one codebase, two platforms."

**7. AI/ML Tie-in**
> "In my university, I built a CNN-based fabric fault detection system using Python and TensorFlow. This dashboard showcases that project alongside my web development skills, demonstrating full-stack + AI capability."

### Interview Q&A Prep

| Question | Answer |
|----------|--------|
| *"What's the hardest part of this project?"* | "The Kanban drag-and-drop was tricky — handling edge cases like dropping on the column header vs. the card area, preventing duplicate imports, and ensuring the DOM re-render doesn't break drag state." |
| *"How would you scale this?"* | "I'd add a Node.js/Express backend with MongoDB for multi-user support, implement JWT auth, add WebSocket for real-time updates, and deploy via Docker on AWS/Vercel." |
| *"Why not use a database?"* | "For a single-user offline tool, LocalStorage is perfect — zero latency, no server cost, works without internet. But the architecture cleanly separates data from logic, so migrating to a REST API would only require changing the save/load functions." |
| *"What design patterns do you see?"* | "MVC separation (data.js/index.html/app.js), Observer (stats auto-update), Event Delegation (single handler for dynamic cards), Strategy (different renderers per section), and State Machine (Kanban stages)." |

---

## 📊 Salary Benchmarks (BDT/month, Dhaka 2026)

| Role | Min | Average | Max |
|------|-----|---------|-----|
| Assistant Merchandiser | 25,000 | 30,000 | 36,000 |
| Merchandiser | 30,000 | 48,000 | 73,000 |
| Senior Merchandiser | 54,000 | 79,000 | 111,000 |
| Merchandising Manager | 80,000 | 110,000 | 150,000 |

---

## 🔧 Development

### Modify Content
Edit `data.js` to change jobs, questions, templates, or links. No build step needed.

### Modify Styling
Edit `style.css` — all colors use CSS variables defined at `:root`.

### Add New Modules
1. Add a nav item in `index.html`
2. Add a content section in `index.html`
3. Add data to `data.js`
4. Add rendering logic to `app.js`

---

## 📝 License

MIT — Free to use, modify, and distribute.

---

*Built with ❤️ by S.M. Rahat — BUTEX Textile Engineer | Full-Stack Developer*
