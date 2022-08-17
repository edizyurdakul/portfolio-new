import React from "react";
import { motion } from "framer-motion";
import { elements } from "../../constants";

const SkillCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={elements}
      className="h-9 w-full rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
    >
      {children}
    </motion.div>
  );
};

export default SkillCard;
