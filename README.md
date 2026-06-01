# Wins Tracker

A habit tracking app built to help you stay consistent with your goals. Every day you show up is a mark on your calendar — track your streaks and look back on your progress to push through the difficult days.

🔗 **Live Demo:** https://winstrackerreact.netlify.app/

---

## Built With

- React
- Vite
- localStorage
- Netlify

---

## Features

- Add and delete custom habits with a color of your choice
- Click any calendar day to log a habit — a colored dot appears for each tracked habit
- Habit cards display a running total of how many days each habit has been logged
- Edit mode to manage your habits
- Data persists on refresh via localStorage
- Month navigation to view past and future months

---

## What I Learned

This project was my first React app, built as a step up from a vanilla JS version of the same app. In vanilla JS I had to manually create DOM elements, store data, and re-render everything on page refresh — often writing the same logic twice.

Rebuilding this in React taught me:
- Component based architecture and how to break UI into reusable pieces
- State management with useState and when state should live in a parent vs child component
- Passing data down via props and events up via callback functions
- useEffect for syncing state with localStorage
- How React's render model eliminates the need to manually update the DOM

---

## Screenshots

