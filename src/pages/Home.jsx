import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { getFeaturedProducts } from "../data/products.js";

export default function Home() {
  const featured = getFeaturedProducts(3);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Discover products, simply.</h1>
            <p className="lead">
              ProductHub is a lightweight demo catalogue built with React.
              Browse products, view details, and experience fast client-side
              routing.
            </p>
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-card">P</div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Featured products</h2>
          <Link to="/products" className="link">
            View all →
          </Link>
        </div>
        <div className="grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
