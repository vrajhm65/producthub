import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <Link to={`/products/${product.id}`} className="card-media">
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
        <p className="card-price">${product.price.toFixed(2)}</p>
        <p className="card-desc">{product.description}</p>
        <Link to={`/products/${product.id}`} className="btn btn-outline">
          View Details
        </Link>
      </div>
    </article>
  );
}
