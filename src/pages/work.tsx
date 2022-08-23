import type { NextPage } from "next";
import Section from "../components/Section";
import { motion } from "framer-motion";
import { elements } from "../constants";
import WorkCard from "src/components/Works/card";
import Button from "src/components/Button";
import { allWorks, Work } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import { Works } from "src/types";

const Work: NextPage<Works> = ({ works }) => {
  return (
    <Section id="#work" className="space-y-4 py-32">
      <motion.h1 variants={elements} className="text-4xl font-bold">
        Work
      </motion.h1>
      <div className="space-y-4">
        {works.map((work: Work) => {
          return <WorkCard key={work.slug} work={work} />;
        })}
      </div>
      <motion.div variants={elements}>
        <Button href="/projects">View More</Button>
      </motion.div>
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
        "skills",
        "liveUrl",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  // .filter((project) => project.featured === true);

  return { props: { works } };
}

export default Work;
