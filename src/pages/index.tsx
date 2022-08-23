import type { NextPage } from "next";
import { motion } from "framer-motion";
import { elements } from "../constants";
import { allProjects, allWorks, Project, Work } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import { Projects, Works } from "src/types";
import Button from "../components/Button";
import Section from "../components/Section";
import ProjectCard from "src/components/Projects/card";
import WorkCard from "src/components/Works/card";

interface IPageProps {
  projects: Projects;
  works: Works;
}

const Home: NextPage<IPageProps> = ({ projects, works }) => {
  console.log(typeof works);
  return (
    <>
      <Section id="#introduction" className="py-32">
        <motion.h1 variants={elements} className="text-4xl font-bold">
          Ediz Yurdakul
        </motion.h1>
        <motion.h2 variants={elements} className="text-sm">
          Frontend Developer
        </motion.h2>
        <motion.p variants={elements} className="py-8">
          Hello! I’m a front-end developer based in Cape Town, South Africa. I
          spend most of my time learning more to develop my skills.
        </motion.p>
        <motion.div variants={elements} className="space-y-4">
          <Button href="/resume">Resume</Button>
          <Button href="mailto:edizyurdakul@gmail.com" external>
            Contact
          </Button>
        </motion.div>
      </Section>
      <Section id="#about" className="space-y-4">
        <motion.h1 variants={elements} className="text-4xl font-bold">
          About
        </motion.h1>
        <motion.p variants={elements}>
          Hello! I’m a frontend developer based in Cape Town, South Africa
          specialized in front end development, using modern technologies such
          as React, Next.JS , Gatsby.JS, and more.
        </motion.p>
        <motion.p variants={elements}>
          Proficient in a wide range of development and testing tools as well as
          version control tools. A continuous learner, keeping up with new
          technologies and changes to languages and frameworks such as React 18,
          Next. JS 12.
        </motion.p>
      </Section>
      <Section id="#work" className="space-y-4 py-32">
        <motion.h1 variants={elements} className="text-4xl font-bold">
          Work
        </motion.h1>
        <div className="space-y-4">
          {works.map((work: Work) => {
            return <WorkCard key={work.slug} work={work} />;
          })}
        </div>
        <motion.div variants={elements}>
          <Button href="/projects">View More</Button>
        </motion.div>
      </Section>

      <Section id="#projects" className="space-y-4">
        <motion.h1 variants={elements} className="text-4xl font-bold">
          Personal Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project: Project) => {
            return <ProjectCard key={project.slug} project={project} />;
          })}
        </div>
        <motion.div variants={elements}>
          <Button href="/projects">View More</Button>
        </motion.div>
      </Section>

      <section className="py-32 space-y-4">
        <h1 className="text-4xl font-bold">Contact</h1>
        <Button href="mailto:edizyurdakul@gmail.com" external>
          Contact
        </Button>
      </section>
    </>
  );
};

export function getStaticProps() {
  const projects = allProjects
    .map((project) =>
      pick(project, [
        "slug",
        "title",
        "summary",
        "publishedAt",
        "featured",
        "skills",
        "githubUrl",
        "liveUrl",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  const works = allWorks
    .map((work) =>
      pick(work, [
        "slug",
        "title",
        "summary",
        "publishedAt",
        "skills",
        "liveUrl",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  // .filter((project) => project.featured === true);

  return { props: { projects, works } };
}

export default Home;
