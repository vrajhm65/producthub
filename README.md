# ProductHub

A simple, responsive demo product catalogue built with React, React Router and Vite. Created as a Thiranex mentorship capstone for "Full-Stack Deployment & Project Architecture".

## Features

- Home page with hero + 3 featured products
- Products page with 8 sample products (local data file)
- Product details page via `/products/:id` with invalid-ID handling
- About page and custom 404 page
- Client-side routing (no page reloads)
- Modular, reusable components
- Responsive layout (mobile / tablet / desktop)
- Basic performance optimizations: lazy-loaded images, code-split pages, Vite production build

## Tech stack

- React + JavaScript
- Vite
- React Router
- CSS (no UI framework)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

## Deployment (Vercel)

1. Push this folder to GitHub.
2. Import the repo in Vercel as a Vite project.
3. Build command: `npm run build`, output dir: `dist`.
4. `vercel.json` contains an SPA rewrite so refreshing `/products`, `/products/:id` and `/about` does not 404.

## Live demo

> Add your Vercel URL here after deploying, e.g. https://producthub.vercel.app

## Project structure

```
src/
├── components/ (Navbar, Footer, ProductCard)
├── pages/ (Home, Products, ProductDetails, About, NotFound)
├── data/products.js
├── App.jsx
├── main.jsx
└── index.css
```
