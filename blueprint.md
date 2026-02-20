
# Blueprint: Powerball Lotto-Game

## Overview

This project is a web-based Powerball number generator. It provides users with a realistic and engaging experience of generating random numbers for the Powerball lottery game. The application is designed to be visually appealing, user-friendly, and mobile-responsive, mimicking the look and feel of the official Powerball website.

## Style, Design, and Features

### Current Version

The application is a fully functional Powerball number generator with a modern, dark-themed UI. It features:
- **Powerball Rules:** Generates 5 unique white balls (1-69) and 1 red Powerball (1-26).
- **Interactive UI:** Smooth animations and 3D effects on the balls.
- **Responsive Design:** Works across desktop and mobile.
- **Theme Support:** Supports both Dark and Light modes with persistent user preference.

## Plan for Current Request

1.  **Add Theme Toggle Feature:**
    -   Introduce CSS variables for colors (background, text, container, etc.) in `style.css`.
    -   Define a `.light-theme` class to override these variables for a light mode experience.
    -   Add a theme toggle button (`#theme-toggle`) in the header of `index.html`.
    -   Implement logic in `main.js` to toggle between dark and light themes.
    -   Use `localStorage` to persist the user's theme preference across sessions.
