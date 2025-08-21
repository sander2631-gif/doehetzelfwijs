export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="/" className="brand">🔨 DoeHetZelfWijs.nl</a>
        <div className="nav-links">
          <a href="/#categories">Categorieën</a>
          <a href="/#projects">Projecten</a>
          <a href="/#comparisons">Vergelijkingen</a>
        </div>
      </div>
    </nav>
  );
}
