# Blueprint: 오늘 뭐 먹지? (Dinner Menu Recommender)

## Overview

This project is a web-based "Dinner Menu Recommender" designed to help users solve the daily dilemma of what to eat for dinner. It provides random suggestions from various cuisines (Korean, Western, Japanese, Chinese, etc.) with an engaging UI.

## Style, Design, and Features

### Current Version

The application has been pivoted from a Powerball generator to a dinner menu recommender. It features:
- **Random Recommendation:** Suggests a menu item with a shuffle animation.
- **Categorization:** Displays the cuisine category (e.g., KOREAN, WESTERN).
- **Interactive UI:** Smooth transitions and a modern, card-based display.
- **Responsive Design:** Optimized for both desktop and mobile use.
- **Theme Support:** Supports Dark and Light modes with persistent preference.
- **Partnership Inquiry:** Integrated Formspree contact form for inquiries.
- **Community Interaction:** Integrated Disqus for user comments and community discussion.

## Implementation Details

1.  **UI Overhaul:**
    -   Removed lotto-specific elements.
    -   Implemented a `menu-container` with a `menu-display` area for result cards.
    -   Styled the result card with typography that emphasizes the menu name.
2.  **Logic Update:**
    -   Created a comprehensive list of popular dinner menus.
    -   Implemented a "shuffle" animation that cycles through menus before picking a final result.
3.  **Theming:**
    -   Maintained the CSS variable system for seamless theme switching.
    -   Added a mint-green accent color (`--accent-color`) for a "fresh/food" aesthetic.
