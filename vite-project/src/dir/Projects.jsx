import Header from "./Header";
import Project from "./Project";
import "../App.css";
import "./Projects.css";
import projectsData from "../projectsData.json";

export default function Projects() {
  return (
    <>
      <div className="shared-outer-div">
        <div className="shared-inner-div">
          <Header currentPage="projects" />
          <div className="projects-container">
            {projectsData.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
