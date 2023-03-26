import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <h1 className={styles.heroTitle}>
        Ciao, sono Marco. <br />
        Front End <span className={styles.accented}>Developer</span>, <br />
        etc etc
      </h1>
      <Image
        src="/images/profile.jpg"
        height={1100 / 4}
        width={896 / 4}
        alt="Hero picture"
        style={{ marginBottom: 30 }}
      ></Image>
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
