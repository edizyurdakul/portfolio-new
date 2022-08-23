import { motion } from "framer-motion";
import { elements } from "../../constants";
import Button from "../Button";
import { type Project } from "contentlayer/generated";
import { useRouter } from "next/router";

const ProjectCard = ({ project }: { project: Project }) => {
  console.log(project);
  const router = useRouter();
  const isHome = router.asPath === "/";

  if (isHome) {
    return (
      <motion.div
        variants={elements}
        className="h-80 w-full rounded-md p-4 transition-colors duration-300 ease-in-out hover:bg-black/0 border border-neutral-800 bg-black/0 flex flex-col space-y-4"
      >
        <h3 className="text-3xl font-bold ">{project.title}</h3>
        <p className="flex-grow">{project.summary}</p>
        <motion.div variants={elements} className="space-y-4 justify-end ">
          <Button href={project.liveUrl}>Live</Button>
          <Button href={project.githubUrl}>GitHub</Button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        variants={elements}
        className="h-60 w-full overflow-hidden rounded-md transition-colors duration-300 ease-in-out hover:bg-black/0 border border-neutral-800 bg-black/0 hover:bg-neutral-900"
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
          <h2 className="text-3xl font-bold">{project.title}</h2>
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
