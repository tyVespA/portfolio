import React, { useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={styles.titleSection}>
        <div className={styles.heroTitle}>
          <h2 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
            Ciao Line 1 👋
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            {/* Front End{" "} */}
            <span className={`${styles.accented} ${styles.animatedGradient}`}>
              Developer
            </span>
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            Line 3
          </h2>
          {/* <h1>Ciao👋, sono Marco.</h1> */}

          {/* <h2 className={isVisible ? "visible" : "hidden"}>etc etc</h2> */}
        </div>
        {/* <Image
          src="/images/profile.jpg"
          height={1100 / 4}
          width={896 / 4}
          alt="Hero picture"
          className={styles.heroImage}
          style={{ objectFit: "contain" }}
        /> */}
        <div
          className={` ${styles.imageContainer}`}
          data-aos="fade-down"
          data-aos-once="true"
          // data-aos-delay="600"
          data-aos-duration="1000"
        >
          <Image
            src="/images/heroImg.jpg"
            height={1100}
            width={896}
            alt="Hero picture"
          />
        </div>
      </div>
      <section className={styles.heroText}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            consectetur perspiciatis ipsam officia accusantium hic soluta! Quae
            sint eligendi, numquam fugiat cupiditate nulla quos, facere delectus
            sunt consequuntur soluta? Ipsum.
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            deleniti deserunt eius nemo fuga ducimus unde tenetur aliquid
            molestiae nostrum maiores debitis ipsam, consequatur esse velit
            voluptate aspernatur hic ullam!
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            omnis aspernatur libero amet veritatis nesciunt quisquam. Iusto
            porro est maxime cumque iure dolores tempore labore, at
            necessitatibus maiores eaque aliquam.
          </p>
        </div>
      </section>
    </>
  );
}
