import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";

export default function Products() {
  return (
    <section className="container section">
      <h1>Products</h1>
      <p className="muted">Showing {products.length} sample products.</p>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
