# NPTEL Java Exam Simulator & Practice Portal

An interactive, responsive single-page web simulator for NPTEL "Programming in Java" exam preparation.

## Features
- **Comprehensive Question Bank (180 Total Questions)**:
  - **60 Code-Completion Assignments** (Weeks 1 to 12, 5 per week) with exact boilerplate templates, sample test cases, interactive multiple choice options, and complete working solution copy buttons.
  - **120 Theory Quiz Questions** (Weeks 1 to 12, 10 per week) with full options and in-depth technical explanations.
- **Instant Interactive Feedback**:
  - Highlights correct and selected answers in real-time.
  - Shows technical rationale, modulo vs. integer division explanations, syntax rules, and tricky edge cases.
- **Section & Week Filtering**:
  - Filter by Mode (All, Programming Assignments, Theory Quizzes).
  - Filter by Week (Weeks 1 through 12).
  - Live search bar across titles, questions, code, and explanations.
- **Persistent Progress Tracking**:
  - Automatically saves answered questions, attempt counts, and session accuracy in browser `localStorage`.
  - Seamlessly maintains progress even across section changes or browser reloads.
- **Modern Responsive Dark UI**:
  - Built with clean vanilla HTML5/CSS3/JavaScript (Zero build step or external framework needed).
  - Designed for high readability on desktop, tablet, and mobile screens.

## Deployment
Since this app is a purely static client-side web application consisting of `index.html` and `data.js`, it can be immediately deployed on:
- **GitHub Pages**: Go to Repository Settings -> Pages -> Deploy from branch `main` (root).
- **Vercel / Netlify / Cloudflare Pages**: Connect this repository and set the root directory to `.`, build command empty, output directory `.`.
