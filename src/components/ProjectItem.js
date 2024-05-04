import React from "react";

function ProjectItem({ name, about, technologies }) {

  const tech = technologies.map(values => <span key={values}>{values}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
