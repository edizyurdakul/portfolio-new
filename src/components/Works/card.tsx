import { motion } from "framer-motion";
import { elements } from "../../constants";
import Button from "../Button";
import { type Work } from "contentlayer/generated";

const WorkCard = ({ work }: { work: Work }) => {
  return (
    <>
      <motion.div
        variants={elements}
        className="h-60 w-full overflow-hidden rounded-md transition-colors duration-300 ease-in-out border border-neutral-800 bg-black/0 hover:bg-neutral-900"
      >
        <div className="space-y-4 p-8">
          <div className="flex space-x-2">
            {work.skills.map((skill) => {
              return (
                <span
                  key={work.slug + skill}
                  className="rounded-md p-1 text-xs font-semibold bg-neutral-300 text-black"
                >
                  {skill}
                </span>
              );
            })}
          </div>
          <h2 className="text-3xl font-bold">{work.title}</h2>
          <p>{work.summary}</p>
        </div>
      </motion.div>
      <motion.div variants={elements}>
        <Button href={work.liveUrl}>View Live</Button>
      </motion.div>
    </>
  );
};

export default WorkCard;
