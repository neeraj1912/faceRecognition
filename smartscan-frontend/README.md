SmartScan Attendance System – Frontend
Overview
SmartScan is a QR-based attendance system built using Next.js App Router. It allows Admins to manage users, Faculty to generate QR codes for sessions, and Students to scan them to mark attendance.
Tech Stack
Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion
Project Structure
src/app/
- page.tsx (Landing Page)
- login/
- admin-dashboard/
- faculty-dashboard/
- student-dashboard/
Routes
Public:
- /
- /login

Admin:
- /admin-dashboard
- /admin-dashboard/faculty
- /admin-dashboard/students

Faculty:
- /faculty-dashboard
- /faculty-dashboard/qr
- /faculty-dashboard/sessions
- /faculty-dashboard/students

Student:
- /student-dashboard
- /student-dashboard/scan
Installation & Setup
git clone 
cd faceRecognition
npm install
npm run dev
Open http://localhost:3000
NPM Commands
npm run dev – Start development server
npm run build – Build project
npm run start – Run production server
npm run lint – Code quality check
System Flow
Admin: Adds faculty & students
Faculty: Creates session → Generates QR → Tracks attendance
Student: Scans QR → Attendance marked
Future Improvements
Backend integration, Authentication, Database storage, Analytics dashboard
