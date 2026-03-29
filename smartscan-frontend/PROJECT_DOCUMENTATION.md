# SmartScan Attendance System - Project Documentation

This document provides a comprehensive overview of the SmartScan Attendance full-stack frontend. It details the technologies used, application architecture, available pages/endpoints, and operational scripts.

## 🛠️ Technology Stack

This project is built using modern, cutting-edge web development tools to guarantee performance, scaling, and a premium user experience.

- **Framework**: `Next.js 16` (Using the new App Router) - Provides server-side rendering, routing syntax, and optimized performance.
- **UI Library**: `React 19` - Powers the interactive components and states.
- **Language**: `TypeScript` - Adds strict static typing, reducing runtime errors and improving code quality.
- **Styling**: `Tailwind CSS v4` - A highly-customizable utility-first CSS framework used for all the aesthetics, glassmorphism, and responsive designs.
- **Animations**: `Framer Motion` - Used for smooth, dynamic page transitions and interactive component micro-animations.
- **Icons**: `Lucide React` - A beautiful, consistent open-source icon library.
- **Utilities**: `clsx` and `tailwind-merge` - Helper utilities used to elegantly combine and conditionally merge Tailwind CSS classes across components.

---

## 🧭 Application Endpoints (Routes)

Because this app is built on the **Next.js App Router** (`src/app`), directories natively define the URL routes. 

### 1. Public Routes
- **`/`** `(src/app/page.tsx)`
  - **Purpose**: At the project root, this serves as the main Landing Page welcoming visitors to the platform.
- **`/login`** `(src/app/login/page.tsx)`
  - **Purpose**: The centralized authentication page where Admins, Faculty, and Students log in.

### 2. Admin Workflows
- **`/admin-dashboard`** `(src/app/admin-dashboard/page.tsx)`
  - **Purpose**: The main overview dashboard for system administrators summarizing system health.
- **`/admin-dashboard/faculty`** `(src/app/admin-dashboard/faculty/page.tsx)`
  - **Purpose**: Interface for Admins to view, add, or manage Faculty credentials and data.
- **`/admin-dashboard/students`** `(src/app/admin-dashboard/students/page.tsx)`
  - **Purpose**: Interface for Admins to view, add, or manage Student credentials and data.

### 3. Faculty Workflows
- **`/faculty-dashboard`** `(src/app/faculty-dashboard/page.tsx)`
  - **Purpose**: The main dashboard for teachers/professors to manage their classes.
- **`/faculty-dashboard/qr`** `(src/app/faculty-dashboard/qr/page.tsx)`
  - **Purpose**: Dedicated page where faculty dynamically generate a QR Code for high-security, real-time student scanning.
- **`/faculty-dashboard/sessions`** `(src/app/faculty-dashboard/sessions/page.tsx)`
  - **Purpose**: Interface to view past class sessions, attendance records, and logs.
- **`/faculty-dashboard/students`** `(src/app/faculty-dashboard/students/page.tsx)`
  - **Purpose**: Specific view for faculty to manage the exact students enrolled in their courses.

### 4. Student Workflows
- **`/student-dashboard`** `(src/app/student-dashboard/page.tsx)`
  - **Purpose**: The main interface for normal students showing overall attendance metrics and upcoming classes.
- **`/student-dashboard/scan`** `(src/app/student-dashboard/scan/page.tsx)`
  - **Purpose**: Interactive interface where the student uses their device's camera to scan the Faculty's QR Code, registering their attendance securely.

---

## 💻 Available NPM Commands

These are the operational commands configured natively in `package.json` for development and production. Run these in the terminal at the project root:

- **`npm run dev`**
  - **What it does**: Starts the local development server (usually on `http://localhost:3000`).
  - **When to use**: During active code development. It supports Hot Module Replacement (HMR) meaning changes automatically reflect in the browser.

- **`npm run build`**
  - **What it does**: Compiles the entire application into highly optimized, minified static HTML, CSS, and JS chunks.
  - **When to use**: Before deploying configuring the app for a production environment.

- **`npm run start`**
  - **What it does**: Runs the compiled production build created strictly via `npm run build`.
  - **When to use**: When you want to preview the exact production performance locally or deploy the Node.js process to a server.

- **`npm run lint`**
  - **What it does**: Runs ESLint statically analyzing the codebase.
  - **When to use**: Before committing code to ensure there are no formatting problems, typescript errors, or bad practices.

---

## 📖 How It All Connects (The Flow)

1. **Authentication Flow**: Everyone starts at `/login`. Based on their credentials, the system determines their Role (Admin, Faculty, Student) and strictly routes them to their respective Dashboards ensuring high security boundaries.
2. **Attendance Loop**: 
   - A **Faculty** member goes to `/faculty-dashboard/qr` securely generating an active graphical QR Session logic.
   - **Students** in the classroom open `/student-dashboard/scan` and point their device at the screen. Resulting in a captured attendance registry.
3. **Analytics**: Both Faculty and Admins view these processed, captured records through `/faculty-dashboard/sessions` and `/admin-dashboard` to gauge classroom success.
