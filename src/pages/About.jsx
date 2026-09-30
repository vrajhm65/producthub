export default function About() {
  return (
    <section className="container section narrow">
      <h1>About ProductHub</h1>
      <p>
        ProductHub is a demonstration product catalogue created as a
        full-stack / web-development capstone project.
      </p>
      <ul className="about-list">
        <li>
          <strong>React</strong> with functional components
        </li>
        <li>
          <strong>React Router</strong> for client-side routing
        </li>
        <li>
          <strong>Responsive design</strong> for mobile, tablet and desktop
        </li>
        <li>
          <strong>Component-based architecture</strong> with reusable UI
          components
        </li>
        <li>
          <strong>Deployment</strong> as a static production build on Vercel
        </li>
      </ul>
      <p className="muted">
        Products are stored locally in <code>src/data/products.js</code>. No
        backend or database is required for this demo.
      </p>
    </section>
  );
}
