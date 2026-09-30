import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container section narrow center">
      <h1>404 — Page not found</h1>
      <p className="muted">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </section>
  );
}
