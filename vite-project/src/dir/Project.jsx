import "../App.css";
import "./Project.css";

export default function Project({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-img-container">
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p>
        <a target="_blank" href={project.deployedLink}>
          Deployed Application
        </a>
      </p>
      <p>
        <a target="_blank" href={project.repoLink}>
          GitHub Repository
        </a>
      </p>
    </div>
  );
}
