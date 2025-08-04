import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import Introduction from "../components/introduction";
import SkillsSphere from "../components/tools";
import BackgroundParticles from "../components/background_particles";
import AchievementsAndPublications from "../components/ui/achievs_and_pubs";
import ProjectSections from "../components/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Francisco Novo</title>
        <meta
          name="description"
          content="Francisco Novo's Personal Portfolio"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ctext x='2' y='24' font-size='24'%3E👨‍💻%3C/text%3E%3C/svg%3E"
        />
      </Head>
      <main className="relative z-10">
        <Navbar />
        <BackgroundParticles />
        <Introduction />
        <ProjectSections />
        <SkillsSphere />
        <AchievementsAndPublications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
