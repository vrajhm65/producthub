import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section className="container section narrow">
        <h1>Product not found</h1>
        <p className="muted">
          No product exists with ID “{id}”. It may have been removed.
        </p>
        <Link to="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </section>
    );
  }

  const hasOffer = product.discount > 0 && product.originalPrice;

  const handleAdd = () => {
    add(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="container section">
      <div className="details">
        <div className="details-media">
          {hasOffer && <span className="offer-badge">-{product.discount}%</span>}
          <img
            src={product.image}
            alt={product.name}
            width="800"
            height="600"
            fetchPriority="high"
          />
        </div>
        <div>
          <span className="badge">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="stars" aria-label={`Rated ${product.rating} out of 5`}>
            {"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}{" "}
            <span className="muted">{product.rating.toFixed(1)} / 5</span>
          </p>
          <p className="details-price">
            ${product.price.toFixed(2)}{" "}
            {hasOffer && <s className="old-price">${product.originalPrice.toFixed(2)}</s>}{" "}
            {hasOffer && <span className="save">Save {product.discount}%</span>}
          </p>
          <p>{product.description}</p>
          <p className="muted">
            Product ID: {product.id} · Demo data, no backend required.
          </p>

          <div className="qty-row">
            <label htmlFor="qty">Quantity</label>
            <div className="qty-controls">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <input
                id="qty"
                type="number"
                min="1"
                max="99"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Math.min(99, Number(e.target.value) || 1)))}
              />
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => Math.min(99, q + 1))}
              >
                +
              </button>
            </div>
          </div>

          <div className="details-actions">
            <button type="button" className="btn btn-primary" onClick={handleAdd}>
              {added ? "Added ✓" : "Add to Cart"}
            </button>
            <Link to="/products" className="btn btn-outline">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
