import Link from "next/link";
import Card from "./Card";
export default function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="project-card">
      <img alt={project.title} src={project.image} className="cover" />
      <div className="pad">
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p className="muted small">{project.description}</p>
      </div>
    </Card>
  );
}
