import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatINR } from "../data/products.js";
import ProductImage from "../components/ProductImage.jsx";

export default function Cart() {
  const { items, count, subtotal, inc, dec, remove } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (items.length === 0) {
    return (
      <section className="container section narrow center">
        <h1>Your cart is empty</h1>
        <p className="muted">Add some products to get started.</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="container section">
      <h1>Cart ({count})</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {items.map(({ product, qty }) => (
            <article key={product.id} className="cart-row">
              <Link to={`/products/${product.id}`}>
                <ProductImage product={product} width="200" height="150" />
              </Link>
              <div className="cart-info">
                <h3>{product.name}</h3>
                <p className="muted">{product.brand} · {formatINR(product.price)} each</p>
                <div className="qty-controls qty-sm">
                  <button type="button" aria-label={`Decrease quantity of ${product.name}`} onClick={() => dec(product.id)}>
                    −
                  </button>
                  <span aria-live="polite">{qty}</span>
                  <button type="button" aria-label={`Increase quantity of ${product.name}`} onClick={() => inc(product.id)}>
                    +
                  </button>
                </div>
              </div>
              <div className="cart-line">
                <p className="card-price">{formatINR(product.price * qty)}</p>
                <button
                  type="button"
                  className="link danger"
                  onClick={() => remove(product.id)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Summary</h2>
          <p className="summary-row">
            <span>Subtotal</span> <span>{formatINR(subtotal)}</span>
          </p>
          <p className="summary-row">
            <span>Delivery</span> <span>Free</span>
          </p>
          <p className="summary-row total">
            <span>Total</span> <span>{formatINR(subtotal)}</span>
          </p>
          <Link to="/products" className="btn btn-outline">
            Continue Shopping
          </Link>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowCheckout(true)}
          >
            Proceed to Checkout
          </button>
        </aside>
      </div>

      {showCheckout && (
        <div className="modal-backdrop" onClick={() => setShowCheckout(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Checkout"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Checkout</h2>
            <p>Checkout functionality is coming soon.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowCheckout(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
