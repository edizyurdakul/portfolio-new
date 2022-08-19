import type { NextPage } from "next";
import { motion } from "framer-motion";
import { elements } from "../constants";
// import Button from "../components/Button";
import Section from "../components/Section";
import ProjectsSection from "../components/Projects";
import { Projects } from "../types/projects";
import {
  allPosts,
  allProjects,
  allWorks,
  Post,
  Project,
  Work,
} from "contentlayer/generated";
import { pick } from "contentlayer/client";

const Projects: NextPage<Projects> = ({ projects }) => {
  console.log(projects);
  return (
    <Section id="#projects" className="space-y-4 py-32">
      <motion.h1 variants={elements} className="text-4xl font-bold">
        Personal Projects
      </motion.h1>
      <div className="grid grid-cols-1 gap-4">
        {/* <ProjectsSection projects={projects} /> */}
      </div>
      {/* <motion.div variants={elements}>
        <Button href="#">View More</Button>
      </motion.div> */}
    </Section>
  );
};

export function getStaticProps() {
  const works = allWorks
    .map((work) =>
      pick(work, [
        "slug",
        "title",
        "summary",
        "publishedAt",
        "liveUrl",
        "skills",
        "image",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

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
    )
    .filter((project) => project.featured === true);

  const posts = allPosts
    .map((post) =>
      pick(post, ["slug", "title", "summary", "publishedAt", "readingTime"])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3);

  return { props: { works, projects, posts } };
}

export default Projects;
