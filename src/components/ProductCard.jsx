import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatINR } from "../data/products.js";
import ProductImage from "./ProductImage.jsx";

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
        <ProductImage product={product} width="800" height="600" />
      </Link>
      <div className="card-body">
        <span className="badge">{product.category}</span>
        <p className="card-brand">{product.brand}</p>
        <h3 className="card-title">{product.name}</h3>
        <Stars rating={product.rating} />
        <p className="card-price">
          {formatINR(product.price)}{" "}
          {hasOffer && (
            <>
              <s className="old-price">{formatINR(product.originalPrice)}</s>{" "}
              <span className="save">{product.discount}% off</span>
            </>
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
