# Rohit Raj Srivastava - Portfolio

A modern, responsive personal portfolio website built with **React 19**, **Tailwind CSS 4**, and **Firebase**. Features a clean dual-theme (light/dark) design with a Navy, Indigo, and Cyan color palette.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-11.10-FFCA28?logo=firebase)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)

## ✨ Features

- **Dual Theme Toggle** - Seamless light/dark mode switching with system preference detection
- **Hero Section** - Animated introduction with profile image and call-to-action buttons
- **About** - Personal bio with animated stat counters (Firebase-powered)
- **Skills** - Grid display of technical competencies with icons and context
- **Qualifications** - Side-by-side Education and Experience timelines
- **Projects** - Dynamic project gallery fetched from Firebase with filtering and pagination
- **Contact** - Streamlined mailto-based contact with location details
- **Visitor Tracking** - Anonymous visitor count stored in Firebase
- **Responsive** - Mobile-first design that adapts to all screen sizes

## 🛠️ Tech Stack

| Category            | Technologies                           |
| ------------------- | -------------------------------------- |
| **Frontend**        | React 19, Tailwind CSS 4, Vite 6       |
| **Backend/Data**    | Firebase Firestore, Firebase Analytics |
| **Icons**           | FontAwesome, Lucide React, React Icons |
| **Typography**      | Inter font family                      |
| **Package Manager** | Bun / npm                              |

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation with theme toggle
│   ├── Header.jsx       # Hero section
│   ├── About.jsx        # Bio and stats
│   ├── Skills.jsx       # Technical skills grid
│   ├── Qualifications.jsx # Education & Experience
│   ├── Projects.jsx     # Project gallery
│   ├── Contact.jsx      # Contact section
│   └── Footer.jsx       # Footer with socials
├── config/
│   └── firebase.config.js
├── utils/
│   ├── darkMode.js      # Theme management
│   ├── visitorCount.js  # Visitor tracking
│   └── ScrollToTop.jsx  # Scroll restoration
├── assets/              # Images and resume
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Design System

| Element            | Light Theme | Dark Theme |
| ------------------ | ----------- | ---------- |
| Background         | `#F8FAFC`   | `#0A0F1C`  |
| Surface            | `#FFFFFF`   | `#111827`  |
| Primary Text       | `#0F172A`   | `#F1F5F9`  |
| Accent (Primary)   | `#6366F1`   | `#6366F1`  |
| Accent (Secondary) | `#06B6D4`   | `#06B6D4`  |

## 📝 Firebase Data Structure

```
profile/
├── stats (document)
│   ├── experience: number
│   └── totalProjects: number
└── projects/
    └── items/ (collection)
        └── {projectId}
            ├── title: string
            ├── description: string
            ├── image: string
            ├── link: string
            ├── gitLink: string
            ├── category: "Personal" | "Professional"
            ├── tags: string[]
            └── priority: number
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Rohit Raj Srivastava**

- Email: rohitraj2002ind@gmail.com
- GitHub: [@rohitsriv28](https://github.com/rohitsriv28)
- LinkedIn: [rohitsriv28](https://linkedin.com/in/rohitsriv28)

---

<p align="center">
  Forged with ❤️ using React & Tailwind CSS
</p>
