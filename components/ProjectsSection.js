import React from "react";
import styles from "../styles/ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <>
      <h2 style={{ marginBottom: 20 }}>I miei ultimi progretti</h2>
      <p style={{ marginBottom: 40 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus natus
        illo vero nam numquam sed eius molestias reprehenderit quaerat, aliquam
        libero cum suscipit quo dolor laborum soluta. Amet, nobis optio.
      </p>
      <div className={styles.projectsContainer} style={{ marginBottom: 80 }}>
        <ProjectCard
          src="/images/pexels-polina-zimmerman-3747503.jpg"
          title="Project 1"
          description="Lorem isapdasjd"
          href="/projects"
        />
        <ProjectCard
          src="/images/pexels-polina-zimmerman-3747503.jpg"
          title="Project 1"
          description="Lorem isapdasjd"
          href="/projects"
        />
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="/images/pexels-polina-zimmerman-3747503.jpg"
          title="Project 1"
          description="Lorem isapdasjd"
          href="/projects"
        />
        <ProjectCard
          src="/images/pexels-polina-zimmerman-3747503.jpg"
          title="Project 1"
          description="Lorem isapdasjd"
          href="/projects"
        />
      </div>
    </>
  );
}
