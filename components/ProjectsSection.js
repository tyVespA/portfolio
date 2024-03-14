import React, { useEffect, useState } from "react";
import styles from "../styles/ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";
import ProjectCardWithLinks from "./ProjectCardWithLinks";

export default function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <>
      <h2 style={{ marginBottom: 20 }}>Alcuni dei miei progretti</h2>
      <p style={{ marginBottom: 40 }}>
        Durante il mio percorso di studi, ho sviluppato numerosi progetti che
        hanno arricchito la mia esperienza come web developer. Di seguito,
        presento alcuni dei miei lavori più significativi.
      </p>
      <div className={styles.projectsContainer}>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <ProjectCardWithLinks
            src="/images/projectsImages/country-quiz-desktop-preview.jpg"
            title="unicopli.it"
            description="Sito aziendale creato utilizzando WordPress"
            liveLink="/projects/unicopli"
            codeLink="/projects/unicopli"
          />
        </div>
        {/* <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <ProjectCard
            src="/images/projectsImages/country-quiz-desktop-preview.jpg"
            title="unicopli.it"
            description="Sito aziendale creato utilizzando WordPress"
            href="/projects/unicopli"
          />
        </div> */}
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay={isMobile ? "0" : "300"}
          data-aos-duration="1000"
        >
          <ProjectCard
            src="/images/projectsImages/url-shortening-desktop-preview.jpg"
            title="Il meteo di Pepe"
            description="Pagina meteo che sfrutta l'API di openweathermap"
            href="/projects/unicopli"
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
            src="/images/projectsImages/recipes-website-desktop.png"
            title="Gym Gourmet"
            description="Un sito di ricette creato con React Router"
            href="/projects/unicopli"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay={isMobile ? "0" : "300"}
          data-aos-duration="1000"
        >
          <ProjectCard
            src="/images/projectsImages/etch-a-sketch-desktop.png"
            title="Etch a Sketch"
            description="Una reinterpretazione digitale della classica tavoletta"
            href="/projects/unicopli"
          />
        </div>
      </div>
    </>
  );
}
