import ProductCard from "../components/ProductCard.jsx";
import { getOfferProducts } from "../data/products.js";

export default function Offers() {
  const offers = getOfferProducts();

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Today&apos;s Best Offers</h1>
            <p className="lead">Save more on selected products. Discounts applied automatically.</p>
          </div>
        </div>
      </section>
      <section className="container section">
        <p className="muted">{offers.length} products on sale.</p>
        <div className="grid">
          {offers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
