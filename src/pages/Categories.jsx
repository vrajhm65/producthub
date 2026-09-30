import CategoryCard from "../components/CategoryCard.jsx";
import { CATEGORIES } from "../data/products.js";

export default function Categories() {
  return (
    <section className="container section">
      <h1>Categories</h1>
      <p className="muted">Browse products by category.</p>
      <div className="grid grid-4">
        {CATEGORIES.map((c) => (
          <CategoryCard key={c.name} category={c} />
        ))}
      </div>
    </section>
  );
}
