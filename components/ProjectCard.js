import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({
  src,
  title,
  description,
  liveLink,
  codeLink,
  alt,
}) {
  // const [isHovered, setIsHovered] = useState(false);
  const [isLiveLinkHovered, setIsLiveLinkHovered] = useState(false);
  const [isCodeLinkHovered, setIsCodeLinkHovered] = useState(false);

  return (
    <div className={styles.projectCardWrapper}>
      <Link href={liveLink} target="_blank">
        <div
          className={styles.imageWrapper}
          onMouseOver={() => setIsLiveLinkHovered(true)}
          onMouseOut={() => setIsLiveLinkHovered(false)}
        >
          <Image
            src={src}
            width={450}
            height={260}
            alt={alt}
            className={`${styles.imageThumbnail} ${
              isLiveLinkHovered ? styles.zoomedIn : ""
            }`}
            style={{ objectFit: "cover", backgroundPosition: "center" }}
          />
        </div>
      </Link>
      <h3 style={{ marginBottom: 10 }}>{title}</h3>
      <p style={{ marginBottom: 10 }}>{description}</p>
      <Link
        href={liveLink}
        target="_blank"
        onMouseOver={() => setIsLiveLinkHovered(true)}
        onMouseOut={() => setIsLiveLinkHovered(false)}
        className={`${styles.projectLink} ${"underlineOnHover"} ${
          isLiveLinkHovered ? styles.underlined : ""
        }`}
      >
        Sito Live →
      </Link>
      {codeLink && (
        <Link
          href={codeLink}
          target="_blank"
          onMouseOver={() => setIsCodeLinkHovered(true)}
          onMouseOut={() => setIsCodeLinkHovered(false)}
          className={`${styles.projectLink} ${"underlineOnHover"} ${
            isCodeLinkHovered ? styles.underlined : ""
          }`}
        >
          Codice e descrizione →
        </Link>
      )}
    </div>
  );
}
