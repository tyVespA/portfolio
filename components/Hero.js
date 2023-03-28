import React, { useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  useEffect(() => {
    setIsVisible1(true);
    // setIsVisible4(true);

    const timer1 = setTimeout(() => {
      setIsVisible2(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setIsVisible3(true);
    }, 1000);

    const timer3 = setTimeout(() => {
      setIsVisible4(true);
    }, 0);

    const timer4 = setTimeout(() => {
      setIsVisible5(true);
    }, 0);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <>
      <div className={styles.titleSection}>
        <div className={styles.heroTitle}>
          <h2 className={isVisible1 ? "fadeIn" : "hidden"}>Heading 1 👋</h2>
          <h2 className={isVisible2 ? "fadeIn" : "hidden"}>Heading 2</h2>
          <h2 className={isVisible3 ? "fadeIn" : "hidden"}>Heading 2</h2>
          {/* <h1>Ciao👋, sono Marco.</h1> */}
          <h2>
            {/* Front End{" "} */}
            <span className={`${styles.accented} ${styles.animatedGradient}`}>
              Developer
            </span>
          </h2>
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
        <Image
          src="/images/pexels-polina-zimmerman-3747503.jpg"
          height={1100 / 4}
          width={896 / 4}
          alt="Hero picture"
          className={`${styles.heroImage} ${isVisible4 ? "slideIn" : "hidden"}`}
          style={{ objectFit: "contain" }}
        />
      </div>
      <section
        className={`${styles.heroText} ${isVisible5 ? "fadeInText" : "hidden"}`}
      >
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
