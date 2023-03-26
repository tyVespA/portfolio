import React from "react";
import styles from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <>
      <h2 style={{ marginBottom: 20 }}>Le mie conoscenze:</h2>
      <p style={{ marginBottom: 20 }}>
        Lorem ipsum dlior sit amet consectetur adipisicing elit. Vliuptatibus
        neque esse quam odio veritatis maiores id omnis consequatur dliores
        nobis nostrum qui deserunt ratione, hic ipsa consequuntur nisi quae?
        Expedita!
      </p>
      <ul className={styles.skillList}>
        <li>Skill1</li>
        <li>Skill1</li>
        <li>Skill1</li>
        <li>Skill1</li>
        <li>Skill1</li>
        <li>Skill1</li>
        <li>Skill1</li>
      </ul>
    </>
  );
}
