import { motion } from "framer-motion";
import { elements } from "../../constants";
import Section from "../Section";
import { Works } from "../../types";
import { type Work } from "contentlayer/generated";
import WorkCard from "./card";

const WorkSection = ({ works }: Works) => {
  return (
    <Section id="#projects" className="space-y-4 py-32">
      <motion.h1 variants={elements} className="text-4xl font-bold">
        Works
      </motion.h1>
      <div className="grid grid-cols-1 gap-4">
        {works.map((work: Work) => {
          return <WorkCard key={work.slug} work={work} />;
        })}
      </div>
    </Section>
  );
};

export default WorkSection;
