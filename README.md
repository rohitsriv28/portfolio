# Rohit Raj Srivastava — Frontend Developer Portfolio

A premium, minimalistic personal portfolio website built with **React**, **Tailwind CSS**, and **Vite**. Features a highly polished, dark-themed design focusing on typography, micro-interactions, and professional experience. Powered by a live **Firebase** backend for seamless content management.

## ✨ Features

- **Premium Dark Aesthetics** - A cohesive dark theme utilizing custom Tailwind CSS variables for background (`#0E0F13`), surfaces, and borders.
- **Dynamic Real-Time Data** - Projects, Skills, Experience, and Education data are seamlessly fetched and synced in real-time using **Firebase Firestore**.
- **Responsive Layout** - Seamless mobile-first design ensuring perfect rendering on all devices.
- **Scroll Reveal Animations** - Smooth entry animations for content blocks using Framer Motion and custom CSS.
- **Dynamic Projects Showcase** - Curated display of professional work with a sleek, minimalist card design and smart loading states.
- **Integrated Resume Viewer** - Seamless in-app PDF viewing experience.

## 🛠️ Tech Stack

| Category            | Technologies                           |
| ------------------- | -------------------------------------- |
| **Frontend**        | React, Tailwind CSS, Vite              |
| **Backend & DB**    | Firebase (Firestore, Analytics)        |
| **Animations**      | Framer Motion                          |
| **Icons**           | Lucide React                           |
| **Typography**      | DM Serif Display, JetBrains Mono, Inter|

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components and sections
│   ├── About.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── Header.jsx
│   ├── Projects.jsx       (Dynamically powered by Firestore)
│   ├── Skills.jsx         (Dynamically powered by Firestore)
│   ├── Qualifications.jsx (Dynamically powered by Firestore)
│   ├── Resume.jsx
│   └── ...
├── config/              # Firebase configuration and DB references
├── assets/              # Images and static assets
├── utils/               # Helper functions
├── App.jsx              # Main application layout
├── main.jsx             # React entry point & routing
└── index.css            # Global styles and design tokens
```

## 🎨 Design System

The portfolio leverages a highly tailored color palette configured in `index.css`:

| Element          | CSS Variable  | Hex Code  |
| ---------------- | ------------- | --------- |
| **Background**   | `--color-bg`  | `#0E0F13` |
| **Surface**      | `--color-surface`| `#141519` |
| **Border**       | `--color-border` | `#22252E` |
| **Text**         | `--color-text`   | `#E8E9EE` |
| **Muted Text**   | `--color-muted`  | `#7C8091` |
| **Accent**       | `--color-accent` | `#3DBDB5` |

## 🚀 Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables for Firebase:
   - Create a `.env.local` file at the root.
   - Add your `VITE_FIREBASE_*` keys.
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🤝 Contact

**Rohit Raj Srivastava**

- Email: rohitraj2002ind@gmail.com
- GitHub: [@rohitsriv28](https://github.com/rohitsriv28)
- LinkedIn: [rohitsriv28](https://linkedin.com/in/rohitsriv28)

---

<p align="center">
  Forged with ❤️ using React, Firebase, & Tailwind CSS
</p>
