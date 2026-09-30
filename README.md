# ProductHub

A small, responsive frontend-only e-commerce demo built with React, React Router and Vite. Created as a Thiranex mentorship capstone for "Full-Stack Deployment & Project Architecture".

## Features

- Home page: hero, 6 category cards, Today's Offers, Popular Products
- Products page: 30 products with instant search (name, brand, category, description), 6 category filters, sorting
- Categories page with product counts, linking to filtered products
- Offers page showing only discounted products with realistic discounts
- Product details via `/products/:id` with quantity selector and invalid-ID handling
- Cart (React Context + localStorage): add, remove, quantity controls, subtotal, badge count, checkout placeholder
- Prices in Indian Rupees (₹) with `en-IN` formatting
- Client-side routing, modular components, responsive layout, lazy images with fallback, code-split pages

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
4. `vercel.json` contains an SPA rewrite so refreshing `/products`, `/products/:id`, `/categories`, `/offers`, `/cart` and `/about` does not 404.

## Live demo

> Add your Vercel URL here after deploying, e.g. https://producthub.vercel.app

## Project structure

```
src/
├── components/ (Navbar, Footer, ProductCard, CategoryCard, ProductImage)
├── pages/ (Home, Products, ProductDetails, Categories, Offers, Cart, About, NotFound)
├── context/ (CartContext)
├── data/products.js
├── App.jsx
├── main.jsx
└── index.css
```
