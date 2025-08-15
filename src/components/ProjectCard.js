import React from "react";

function ProjectCard({ image, title, description, github }) {
  return (
    <div
      className="project-card"
      onClick={() => github !== "#" && window.open(github, "_blank")}
    >
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="hover-icon">🔗</div>
      </div>
      <h3>{title}</h3>
      <p className="project-desc">{description}</p>
    </div>
  );
}

export default ProjectCard;
