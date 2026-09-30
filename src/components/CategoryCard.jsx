import { Link } from "react-router-dom";
import { getProductCountByCategory } from "../data/products.js";

export default function CategoryCard({ category }) {
  const count = getProductCountByCategory(category.name);

  return (
    <Link
      to={`/products?category=${encodeURIComponent(category.name)}`}
      className="category-card"
    >
      <span className="category-thumb" aria-hidden="true">
        {category.image ? (
          <img src={category.image} alt="" loading="lazy" width="800" height="600" />
        ) : (
          <span className="category-icon">{category.icon}</span>
        )}
      </span>
      <h3>
        {category.icon} {category.name}
      </h3>
      <p className="muted">{category.description}</p>
      <span className="link">
        {count} product{count === 1 ? "" : "s"} →
      </span>
    </Link>
  );
}
