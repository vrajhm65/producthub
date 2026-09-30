import { Link, useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);

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

  return (
    <section className="container section">
      <div className="details">
        <img
          src={product.image}
          alt={product.name}
          width="800"
          height="600"
          fetchPriority="high"
        />
        <div>
          <span className="badge">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="details-price">${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <p className="muted">
            Product ID: {product.id} · Demo data, no backend required.
          </p>
          <Link to="/products" className="btn btn-primary">
            ← Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}
