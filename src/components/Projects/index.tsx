import { motion } from "framer-motion";
import { elements } from "../../constants";
import Button from "../Button";
import Section from "../Section";
import ProjectCard from "./card";
import { Projects, Project } from "../../types/projects";

const ProjectsSection = ({ projects }: Projects) => {
  return (
    <Section id="#projects" className="space-y-4 py-32">
      <motion.h1 variants={elements} className="text-4xl font-bold">
        Personal Projects
      </motion.h1>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project: Project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <motion.div variants={elements}>
        <Button href="#">View More</Button>
      </motion.div>
    </Section>
  );
};

export default ProjectsSection;
