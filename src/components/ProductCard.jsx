import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function Stars({ rating }) {
  const full = Math.round(rating);
  return (
    <span className="stars" aria-label={`Rated ${rating} out of 5`}>
      {"★".repeat(full)}{"☆".repeat(5 - full)} <span className="muted">{rating.toFixed(1)}</span>
    </span>
  );
}

export default function ProductCard({ product }) {
  const { add } = useCart();
  const hasOffer = product.discount > 0 && product.originalPrice;

  return (
    <article className="card">
      <Link to={`/products/${product.id}`} className="card-media">
        {hasOffer && <span className="offer-badge">-{product.discount}%</span>}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="800"
          height="600"
        />
      </Link>
      <div className="card-body">
        <span className="badge">{product.category}</span>
        <h3 className="card-title">{product.name}</h3>
        <Stars rating={product.rating} />
        <p className="card-price">
          ${product.price.toFixed(2)}{" "}
          {hasOffer && (
            <s className="old-price">${product.originalPrice.toFixed(2)}</s>
          )}
        </p>
        <p className="card-desc">{product.description}</p>
        <div className="card-actions">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => add(product.id)}
          >
            Add to Cart
          </button>
          <Link to={`/products/${product.id}`} className="btn btn-outline btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
