export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} ProductHub. Demo catalogue project.</p>
        <p className="muted">React · React Router · Vite</p>
      </div>
    </footer>
  );
}
