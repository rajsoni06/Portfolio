import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, projects.length));
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.slice(0, visibleCount).map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
      {visibleCount < projects.length && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <button
  onClick={loadMore}
  style={{
    position: "relative",
    overflow: "hidden",
    padding: "12px 26px",
    borderRadius: "19px", // Slightly rounded borders for a modern look
    
    color: "white",
    fontSize: "16px",
    fontFamily: "inherit",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    background: `linear-gradient(145deg, 
    rgba(59, 198, 255, 1) 10%, 
    rgba(2, 132, 199, 1) 40%, 
    rgba(37, 99, 235, 1) 70%, 
    rgba(255, 255, 255, 0.5) 100%)`, 
boxShadow: "0 5px 15px rgba(2, 132, 199, 0.3), inset 0 2px 6px rgba(255, 255, 255, 0.5)", 
    transition: "all 0.3s ease, transform 0.3s ease",
    transform: "perspective(1000px) translateZ(0px)", // Default 3D perspective
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "perspective(1000px) scale(1.05) translateZ(10px)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "perspective(1000px) scale(1) translateZ(0px)";
    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2), 0 6px 15px rgba(0, 0, 0, 0.15)";
  }}
>
  Show More Projects
</button>

        </div>
      )}
    </section>
  );
};