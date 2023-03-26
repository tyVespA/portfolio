import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio v0.1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar />
        <section>
          <Hero />
        </section>
        <section>
          <Skills />
        </section>
        <Link href="/projects">Projects</Link>
      </Layout>
    </>
  );
}
