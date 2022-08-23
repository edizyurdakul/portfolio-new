import type { NextPage } from "next";
import ProjectsSection from "../components/Projects";
import { type Projects } from "../types";
import { allProjects } from "contentlayer/generated";
import { pick } from "contentlayer/client";

const Projects: NextPage<Projects> = ({ projects }) => {
  return <ProjectsSection projects={projects} />;
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
  // .filter((project) => project.featured === true);

  return { props: { projects } };
}

export default Projects;
