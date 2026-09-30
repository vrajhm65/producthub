import { Link } from "react-router-dom";
import { getProductCountByCategory } from "../data/products.js";

export default function CategoryCard({ category }) {
  const count = getProductCountByCategory(category.name);

  return (
    <Link
      to={`/products?category=${encodeURIComponent(category.name)}`}
      className="category-card"
    >
      <span className="category-icon" aria-hidden="true">
        {category.icon}
      </span>
      <h3>{category.name}</h3>
      <p className="muted">{category.description}</p>
      <span className="link">
        {count} product{count === 1 ? "" : "s"} →
      </span>
    </Link>
  );
}
