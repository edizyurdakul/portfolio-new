import { motion } from "framer-motion";
import { elements } from "../../constants";
import Section from "../Section";
import ProjectCard from "./card";
import { Projects } from "../../types";
import { type Project } from "contentlayer/generated";

const ProjectsSection = ({ projects }: Projects) => {
  return (
    <Section id="#projects" className="space-y-4 py-32">
      <motion.h1 variants={elements} className="text-4xl font-bold">
        Personal Projects
      </motion.h1>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project: Project) => {
          return <ProjectCard key={project.slug} project={project} />;
        })}
      </div>
    </Section>
  );
};

export default ProjectsSection;
