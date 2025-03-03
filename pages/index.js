import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import SkillsInProgress from "@/components/SkillsInProgress";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Marco Migliavacca</title>
        <meta name="description" content="Web Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <Layout>
        {/* <Navbar /> */}
        <section className="heroSection">
          <Hero />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <SkillsInProgress />
        </section>
        <section>
          <ProjectsSection />
        </section>
        <section>
          <Contact />
        </section>
        {/* <Footer /> */}
        {/* <Link href="/projects">Projects</Link> */}
      </Layout>
    </>
  );
}
