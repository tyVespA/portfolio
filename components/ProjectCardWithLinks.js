import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectCardWithLinks.module.css";

export default function ProjectCard({
  src,
  title,
  description,
  liveLink,
  codeLink,
  alt,
}) {
  const [isLiveLinkHovered, setIsLiveLinkHovered] = useState(false);
  const [isCodeLinkHovered, setIsCodeLinkHovered] = useState(false);
  return (
    <div className={styles.projectCardWrapper}>
      <Link href={liveLink}>
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
        onMouseOver={() => setIsLiveLinkHovered(true)}
        onMouseOut={() => setIsLiveLinkHovered(false)}
        className={`${styles.projectLink} ${"underlineOnHover"} ${
          isLiveLinkHovered ? styles.underlined : ""
        }`}
      >
        Sito Live →
      </Link>
      <Link
        href={codeLink}
        onMouseOver={() => setIsCodeLinkHovered(true)}
        onMouseOut={() => setIsCodeLinkHovered(false)}
        className={`${styles.projectLink} ${"underlineOnHover"} ${
          isCodeLinkHovered ? styles.underlined : ""
        }`}
      >
        Codice →
      </Link>
    </div>
  );
}
