import React from "react";
import styles from "../styles/Contact.module.css";
import ContactImage from "./ContactImage";

export default function Contact() {
  return (
    <>
      <h2 style={{ marginBottom: 20 }}>Per parlarci:</h2>
      <p className={styles.contactParagraph}>
        Se siete interessati a collaborare o avete domande sui miei progetti,
        non esitate a contattarmi tramite il modulo sottostante. Sarò lieto di
        rispondere a tutte le vostre richieste e di discutere eventuali
        opportunità di lavoro insieme.
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
