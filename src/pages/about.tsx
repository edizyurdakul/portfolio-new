import type { NextPage } from "next";
import Section from "../components/Section";
import { motion } from "framer-motion";
import { elements } from "../constants";

const About: NextPage = () => {
  return (
    <Section id="#introduction" className="py-32">
      <motion.h1 variants={elements} className="text-4xl font-bold">
        About Me
      </motion.h1>
      <motion.p variants={elements} className="pt-8 pb-4">
        I’m Ediz, a front-end developer based in Cape Town, South Africa. I
        spend most of my time learning more to develop my skills.
      </motion.p>
      <motion.p variants={elements}>Currently learning the T3 stack!</motion.p>
    </Section>
  );
};

export default About;
