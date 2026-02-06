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
        hanno arricchito la mia esperienza come sviluppatore. Di seguito,
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
            liveLink="https://canile-di-macondo.vercel.app/"
            codeLink="https://github.com/tyVespA/canile-di-macondo"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay={isMobile ? "0" : "300"}
          data-aos-duration="1000"
        >
          <ProjectCard
            src="/images/projectsImages/tracciaPesoThumbnail.jpg"
            title="TracciaPeso"
            description="Full Stack MERN App con autenticazione"
            liveLink="https://traccia-peso.vercel.app/"
            codeLink="https://github.com/tyVespA/TracciaPeso"
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
            codeLink="https://github.com/tyVespA/meteo-di-pepe"
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
