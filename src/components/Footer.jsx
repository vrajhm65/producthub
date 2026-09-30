import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">ProductHub</p>
          <p className="muted">A lightweight frontend-only demo shop.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </nav>
        <p className="muted">© {new Date().getFullYear()} ProductHub · React · React Router · Vite</p>
      </div>
    </footer>
  );
}
