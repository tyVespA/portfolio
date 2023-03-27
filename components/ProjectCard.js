import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ src, title, description, href }) {
  return (
    <div>
      <Image
        src={src}
        width={500}
        height={300}
        className={styles.imageThumbnail}
        style={{ objectFit: "contain" }}
      />
      <h3 style={{ marginBottom: 10 }}>{title}</h3>
      <p style={{ marginBottom: 10 }}>{description}</p>
      <Link href={href}>Vai al progetto</Link>
    </div>
  );
}
