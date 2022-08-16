import type { NextPage } from "next";
import React, { useEffect } from "react";
import Button from "../components/Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.35 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const section = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={section}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const Home: NextPage = () => {
  const elements = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <Section id="#introduction" className="py-32">
        <motion.h1 variants={elements} className="text-4xl font-bold">
          Ediz Yurdakul
        </motion.h1>
        <motion.h2 variants={elements} className="text-sm">
          Frontend Developer
        </motion.h2>
        <motion.p variants={elements} className="py-8">
          Hello! I’m a front-end developer based in Cape Town, South Africa. I
          spend most of my time learning more to develop my skills.
        </motion.p>
        <motion.div variants={elements} className="space-y-4">
          <Button href="#">Resume</Button>
          <Button href="#">Contact</Button>
        </motion.div>
      </Section>
      <Section id="#about" className="space-y-4">
        <motion.h1 variants={elements} className="text-4xl font-bold">
          About
        </motion.h1>
        <motion.p variants={elements}>
          Hello! I’m a frontend developer based in Cape Town, South Africa
          specialized in front end development, using modern technologies such
          as React, Next.JS , Gatsby.JS, and more.
        </motion.p>
        <motion.p variants={elements}>
          Proficient in a wide range of development and testing tools as well as
          version control tools. A continuous learner, keeping up with new
          technologies and changes to languages and frameworks such as React 18,
          Next. JS 12.
        </motion.p>
      </Section>
      <Section id="#selected-work" className="space-y-4 py-32">
        <motion.h1 variants={elements} className="text-4xl font-bold">
          Selected Work
        </motion.h1>
        <div className="grid grid-cols-1 gap-4">
          <motion.div
            variants={elements}
            className="relative h-80 w-full overflow-hidden rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          >
            <div className="space-y-4 p-8">
              <div className="flex space-x-2">
                <span className="rounded-md bg-neutral-100 p-1 text-xs font-semibold text-black">
                  NEXT.JS
                </span>
                <span className="rounded-md bg-neutral-100 p-1 text-xs font-semibold text-black">
                  STRAPI
                </span>
                <span className="rounded-md bg-neutral-100 p-1 text-xs font-semibold text-black">
                  GRAPHQL
                </span>
                <span className="rounded-md bg-neutral-100 p-1 text-xs font-semibold text-black">
                  TYPESCRIPT
                </span>
              </div>
              <h3 className="text-3xl font-bold">Hamshack Radio</h3>
              <p>
                Hamshack Radio is an online radio station and independent
                cultural platform based in Cape Town, South Africa.
              </p>
            </div>
          </motion.div>
          <motion.div variants={elements}>
            <Button href="#">View Live</Button>
          </motion.div>

          <motion.div
            variants={elements}
            className="relative h-80 w-full overflow-hidden rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          >
            <div className="relative z-10 space-y-4 p-8">
              <div className="flex space-x-2">
                <span className="rounded-md bg-neutral-100 p-1 text-xs font-semibold text-black">
                  NEXT.JS
                </span>
                <span className="rounded-md bg-neutral-100 p-1 text-xs font-semibold text-black">
                  STRAPI
                </span>
                <span className="rounded-md bg-neutral-100 p-1 text-xs font-semibold text-black">
                  GRAPHQL
                </span>
                <span className="rounded-md bg-neutral-100 p-1 text-xs font-semibold text-black">
                  TYPESCRIPT
                </span>
              </div>
              <h3 className="text-3xl font-bold">Hamshack Radio</h3>
              <p>
                Hamshack Radio is an online radio station and independent
                cultural platform based in Cape Town, South Africa.
              </p>
            </div>
          </motion.div>
          <motion.div variants={elements}>
            <Button href="#">View Live</Button>
          </motion.div>
        </div>
        <motion.div variants={elements}>
          <Button href="#">View More</Button>
        </motion.div>
      </Section>

      <Section id="#projects" className="space-y-4">
        <motion.h1 variants={elements} className="text-4xl font-bold">
          Personal Projects
        </motion.h1>
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            variants={elements}
            className="h-80 w-full rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          ></motion.div>
          <motion.div
            variants={elements}
            className="h-80 w-full rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          ></motion.div>
          <motion.div
            variants={elements}
            className="h-80 w-full rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          ></motion.div>
          <motion.div
            variants={elements}
            className="h-80 w-full rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          ></motion.div>
        </div>
        <motion.div variants={elements}>
          <Button href="#">View More</Button>
        </motion.div>
      </Section>

      <Section id="#skills" className="space-y-2 py-32">
        <motion.h1 variants={elements} className="text-4xl font-bold ">
          Skills
        </motion.h1>
        <div className="grid grid-cols-4 gap-4">
          <motion.div
            variants={elements}
            className="h-9 w-full rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          >
            React
          </motion.div>
          <motion.div
            variants={elements}
            className="h-9 w-full rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          >
            Next.js
          </motion.div>
          <motion.div
            variants={elements}
            className="h-9 w-full rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          >
            Tailwind CSS
          </motion.div>
          <motion.div
            variants={elements}
            className="h-9 w-full rounded-md bg-neutral-300 transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          >
            JavaScript
          </motion.div>
        </div>
      </Section>

      <section className="space-y-4">
        <h1 className="text-4xl font-bold ">Experience</h1>
      </section>
      <section className="py-32">
        <h1 className="text-4xl font-bold ">Contact</h1>
      </section>
    </>
  );
};

export default Home;
