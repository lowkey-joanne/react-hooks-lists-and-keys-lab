import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {
          projects.map( parent =>  <ProjectItem key={parent.id} name={parent.name} about={parent.about} technologies={parent.technologies} />)
        }
      </div>
    </div>
    
  );
}

export default ProjectList;
