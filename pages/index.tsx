import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { categories, projects, comparisons } from "@/data/projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero container">
        <h1>Vind alle doe-het-zelf informatie op één plek</h1>
        <p className="muted">Handleidingen, tips en productadviezen voor jouw verbouwproject.</p>
        <div className="search">
          <form action="/">
            <input name="q" placeholder="Waar ben je mee bezig?" aria-label="zoek" />
            <Button>Zoek</Button>
          </form>
        </div>
      </section>

      <section id="categories" className="container">
        <h2>Categorieën</h2>
        <div className="grid">
          {categories.map((cat, i) => (
            <Card key={i}>
              <img alt={cat.title} src={cat.image} className="cover" />
              <div className="pad">
                <strong>{cat.title}</strong>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="container">
        <h2>Projecten</h2>
        <div className="grid">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section id="comparisons" className="container">
        <h2>Vergelijkingen</h2>
        {comparisons.map((comp, i) => (
          <Card key={i}>
            <div className="pad">
              <h3>{comp.title}</h3>
              <p className="muted small">{comp.description}</p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Prijs (€)</th>
                      <th>Rating</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comp.items.map((it, idx) => (
                      <tr key={idx}>
                        <td>{it.name}</td>
                        <td>{it.price.toFixed(2)}</td>
                        <td>{it.rating.toFixed(1)}/5</td>
                        <td><a className="link" href={it.url} target="_blank" rel="noopener noreferrer">bekijk</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <footer className="footer">
        <div className="container">
          <span className="muted small">© {new Date().getFullYear()} DoeHetZelfWijs.nl</span>
        </div>
      </footer>
    </div>
  );
}
