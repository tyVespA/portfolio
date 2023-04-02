import React from "react";
import styles from "../styles/Contact.module.css";
import ContactImage from "./ContactImage";

export default function Contact() {
  return (
    <>
      <h2 style={{ marginBottom: 20 }}>Per parlarci:</h2>
      <p className={styles.contactParagraph}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nemo
        libero, est earum nobis enim rerum exercitationem assumenda ab eaque
        laudantium? Facere blanditiis odio voluptates veniam doloremque quam
        consequatur reprehenderit?
      </p>
      <div className={styles.formSection}>
        <form
          action="https://formspree.io/f/xlekppdn"
          method="POST"
          className={styles.contactForm}
        >
          <div className={styles.firstRow}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              required
            />
            <input
              type="text"
              name="compagnia"
              id="compagnia"
              placeholder="Compagnia (opzionale)"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            name="messaggio"
            id="messaggio"
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
