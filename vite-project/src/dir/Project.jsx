import "../App.css";
import "./Project.css";

export default function Project({ project }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <div className="projects-toggle-container">
        <div className="project-card-img-container">
          <img src={project.image} alt={project.title} />
        </div>
        <p>
          <a target="_blank" href={project.deployedLink}>
            Live App
          </a>
        </p>
        <p>
          <a target="_blank" href={project.repoLink}>
            GitHub Repo
          </a>
        </p>
      </div>
    </div>
  );
}
