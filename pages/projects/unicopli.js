import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function projectTemplate() {
  return (
    <Layout>
      <Head>
        <title>Unicopli</title>
        <meta name="Unicopli" content="Unicopli" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <main className="projectPageMain">
        <h1>Unicopli</h1>
        <div className="projectPageLinks">
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
