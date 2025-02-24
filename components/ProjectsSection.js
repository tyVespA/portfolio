import React, { useEffect, useState } from "react";
import styles from "../styles/ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";

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
          <ProjectCard
            src="/images/projectsImages/canileThumbnail.jpg"
            title="Canile di Macondo"
            description="Sito full-fledged sviluppato con NextJS"
            liveLink="https://caniledimacondo.net/"
            codeLink="https://github.com/tyVespA/shelter-testing"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay={isMobile ? "0" : "300"}
          data-aos-duration="1000"
        >
          <ProjectCard
            src="/images/projectsImages/unicopliThumbnail.jpg"
            title="unicopli.it"
            description="Sito aziendale creato utilizzando WordPress"
            liveLink="https://www.unicopli.it/"
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
            src="/images/projectsImages/meteoThumbnail.jpg"
            title="Il meteo di Pepe"
            description="SPA che sfrutta l'API di openweathermap"
            liveLink="https://weather-page-nu.vercel.app/"
            codeLink="https://github.com/tyVespA/weather-page"
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
            description="Una reinterpretazione digitale del classico gioco"
            liveLink="https://tyvespa.github.io/Etch-a-sketch/"
            codeLink="https://github.com/tyVespA/Etch-a-sketch"
          />
        </div>
      </div>
    </>
  );
}
