import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { CATEGORIES, getPopularProducts, getOfferProducts } from "../data/products.js";

export default function Home() {
  const popular = getPopularProducts(6);
  const offers = getOfferProducts().slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="badge">New season offers</span>
            <h1>Shop Smart. Live Better.</h1>
            <p className="lead">
              Electronics, fashion, home &amp; kitchen, accessories, beauty and
              fitness — 30 quality products with honest prices in rupees.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/offers" className="btn btn-outline">
                View Offers
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
        <div className="grid grid-3">
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
          {offers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Popular products</h2>
          <Link to="/products" className="link">
            View all →
          </Link>
        </div>
        <div className="grid">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Why shop with us</h2>
        <ul className="perks">
          <li>✓ Quality products</li>
          <li>✓ Great prices</li>
          <li>✓ Easy shopping</li>
          <li>✓ Responsive experience</li>
        </ul>
      </section>
    </>
  );
}
