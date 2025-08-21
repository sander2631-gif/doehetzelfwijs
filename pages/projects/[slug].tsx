import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { projects, Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div>
      <Navbar />
      <section className="container">
        <Card>
          <img alt={project.title} src={project.image} className="cover" />
          <div className="pad">
            <h1>{project.title}</h1>
            <p className="muted small">{project.description}</p>
            <h3>Stappenplan</h3>
            <ol className="steps">
              {project.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
            <h3>Productadvies</h3>
            <div className="buttons">
              {project.products.map((p, i) => (
                <Button key={i} href={p.url}>{p.name}</Button>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const project = projects.find(p => p.slug === slug)!;
  return { props: { project } };
};
