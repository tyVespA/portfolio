import React from "react";
import styles from "../styles/Contact.module.css";
import ContactImage from "./ContactImage";

export default function Contact() {
  return (
    <>
      <h2 style={{ marginBottom: 20 }}>Per parlarci:</h2>
      <p style={{ marginBottom: 50 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nemo
        libero, est earum nobis enim rerum exercitationem assumenda ab eaque
        laudantium? Facere blanditiis odio voluptates veniam doloremque quam
        consequatur reprehenderit?
      </p>
      <div className={styles.formSection}>
        <form action="" className={styles.contactForm}>
          <div className={styles.firstRow}>
            <input type="text" name="" id="" placeholder="Nome" required />
            <input
              type="text"
              name=""
              id=""
              placeholder="Compagnia (opzionale)"
            />
          </div>
          <input type="email" name="" id="" placeholder="Email" required />
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Messaggio"
            required
            className={styles.textArea}
          ></textarea>
          <button>Invia</button>
        </form>
        <div className={styles.formSectionImage}>
          <ContactImage />
        </div>
      </div>
    </>
  );
}
