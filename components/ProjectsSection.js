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
      <div className={styles.projectsContainer}>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <ProjectCard
            src="/images/projectsImages/recipes-website-desktop.png"
            title="Project 1"
            description="Lorem isapdasjd"
            href="/projects"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <ProjectCard
            src="/images/projectsImages/weather-page-desktop.png"
            title="Project 1"
            description="Lorem isapdasjd"
            href="/projects"
          />
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <ProjectCard
            src="/images/projectsImages/etch-a-sketch-desktop.png"
            title="Project 1"
            description="Lorem isapdasjd"
            href="/projects"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <ProjectCard
            src="/images/projectsImages/news-homepage-desktop.png"
            title="Project 1"
            description="Lorem isapdasjd"
            href="/projects"
          />
        </div>
      </div>
    </>
  );
}
