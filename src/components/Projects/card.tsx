import { motion } from "framer-motion";
import { elements } from "../../constants";
import Button from "../Button";
import { Project } from "../../types/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={elements}
      className="h-60 w-full overflow-hidden rounded-md transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
    >
      <div className="space-y-4 p-8">
        <div className="flex space-x-2">
          {project.techs.map((tech) => {
            return (
              <span
                key={tech.id}
                className="rounded-md p-1 text-xs font-semibold bg-purple-600"
              >
                {tech.name}
              </span>
            );
          })}
        </div>
        <h3 className="text-3xl font-bold">Hamshack Radio</h3>
        <p>
          Hamshack Radio is an online radio station and independent cultural
          platform based in Cape Town, South Africa.
        </p>
      </div>
      <motion.div variants={elements}>
        <Button href="#">View Live</Button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
