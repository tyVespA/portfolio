import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import styles from "@/styles/projectPageTemplate.module.css";

export default function projectTemplate() {
  return (
    <Layout>
      <Head>
        <title>Project Title</title>
        <meta name="Project Title" content="Project Title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <h1>Project Title</h1>
        <div className={styles.links}>
          <Link href="https://github.com/tyVespA" className="underlineOnHover">
            Code
          </Link>
          <p>|</p>
          <Link href="https://github.com/tyVespA" className="underlineOnHover">
            Deployment
          </Link>
        </div>
      </main>
      <div className={styles.tempSpacer}></div>
    </Layout>
  );
}
