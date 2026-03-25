# INT308 Security Summary Interactive App

A premium, interactive web application built with React, Vite, and Tailwind CSS v4, designed to provide an easy-to-read, dual-language (Thai/English) study guide for INT308 Security. The app replaces standard static PDF reading and offers a categorized interactive Quiz system for exam preparation.

## Features

- **Bilingual Interface**: Seamlessly switch between Thai and English layouts dynamically.
- **Interactive Summary View**: A fully categorized summary mapped exactly to the 10 core chapters. Features a sticky left-sidebar navigation and responsive image overlays.
- **Categorized Quiz Engine**: Test your knowledge across multiple categories (Security Basics, Cryptography, Data Center & DR, etc.). Includes score tracking and answer explanations.
- **Premium UI/UX**: Designed with dark mode glassmorphism, Framer Motion animations, and Lucide React icons.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Structure
- `/src/data/summary.js`: Contains all the raw content objects for the summary view.
- `/src/data/quiz.js`: Contains all categorized questions, answers, and explanations.
- `/src/components/*`: UI components including Navbar, SummaryView, and QuizView.

## Deployment
This app can be deployed trivially to Vercel, Netlify, or GitHub Pages. Just set the build command to `npm run build` and output directory to `dist/`.
