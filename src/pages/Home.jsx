import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { CATEGORIES, getFeaturedProducts, getOfferProducts } from "../data/products.js";

export default function Home() {
  const featured = getFeaturedProducts(4);
  const offers = getOfferProducts().slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="badge">New season offers</span>
            <h1>Everything You Need, In One Place</h1>
            <p className="lead">
              Shop a small curated catalogue — electronics, fashion, home and
              accessories — with fast client-side navigation and a local cart.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/offers" className="btn btn-outline">
                Explore Offers
              </Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-card">P</div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Shop by category</h2>
          <Link to="/categories" className="link">
            All categories →
          </Link>
        </div>
        <div className="grid grid-4">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.name} category={c} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Today&apos;s offers</h2>
          <Link to="/offers" className="link">
            View all →
          </Link>
        </div>
        <div className="grid">
          {offers.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
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

      <section className="container section">
        <h2>Why shop with us</h2>
        <ul className="perks">
          <li>✓ Quality products</li>
          <li>✓ Easy shopping</li>
          <li>✓ Great offers</li>
          <li>✓ Responsive experience</li>
        </ul>
      </section>
    </>
  );
}
