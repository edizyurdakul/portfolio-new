import { motion } from "framer-motion";
import { elements } from "../../constants";
import Button from "../Button";
import { type Project } from "contentlayer/generated";

const ProjectCard = ({ project }: { project: Project }) => {
  console.log(project);
  return (
    <>
      <motion.div
        variants={elements}
        className="h-60 w-full overflow-hidden rounded-md transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
      >
        <div className="space-y-4 p-8">
          <div className="flex space-x-2">
            {project.skills.map((skill) => {
              return (
                <span
                  key={project.slug + skill}
                  className="rounded-md p-1 text-xs font-semibold bg-neutral-300 text-black"
                >
                  {skill}
                </span>
              );
            })}
          </div>
          <h3 className="text-3xl font-bold">{project.title}</h3>
          <p>{project.summary}</p>
        </div>
      </motion.div>
      <motion.div variants={elements} className="space-y-4">
        <Button href={project.liveUrl}>View Live</Button>
        <Button href={project.githubUrl}>View GitHub</Button>
      </motion.div>
    </>
  );
};

export default ProjectCard;
