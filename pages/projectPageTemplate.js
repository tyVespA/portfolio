import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
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
      <main className="projectPageMain">
        <h1>Project Title</h1>
        <div className="projectPageLinks">
          <Link
            href="https://github.com/tyVespA"
            className="underlineOnHoverAccent"
          >
            Code
          </Link>
          <p>|</p>
          <Link
            href="https://github.com/tyVespA"
            className="underlineOnHoverAccent"
          >
            Deployment
          </Link>
        </div>
      </main>
      <div className="tempSpacer"></div>
    </Layout>
  );
}
