import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { count } = useCart();
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate(query.trim() ? `/products?search=${encodeURIComponent(query.trim())}` : "/products");
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">P</span> ProductHub
        </Link>

        <form className="nav-search" role="search" onSubmit={submitSearch}>
          <label htmlFor="nav-search-input" className="sr-only">
            Search products
          </label>
          <input
            id="nav-search-input"
            type="search"
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            ⌕
          </button>
        </form>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`nav-links${open ? " open" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/categories" onClick={() => setOpen(false)}>
            Categories
          </NavLink>
          <NavLink to="/offers" onClick={() => setOpen(false)}>
            Offers
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/cart" className="cart-link" onClick={() => setOpen(false)}>
            🛒 Cart{count > 0 ? <span className="cart-badge">{count}</span> : null}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
