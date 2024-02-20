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
          <p className="out-of-time">
            Sorry, I know it looks shit. Ran out of time :/
          </p>
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
