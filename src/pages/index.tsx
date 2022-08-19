import type { NextPage } from "next";
import { motion } from "framer-motion";
import { elements } from "../constants";
import Button from "../components/Button";
import Section from "../components/Section";

const Home: NextPage = () => {
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
          <Button href="/resume">Resume</Button>
          <Button href="mailto:edizyurdakul@gmail.com" external>
            Contact
          </Button>
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
            className="relative h-80 w-full overflow-hidden rounded-md transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
          >
            <div className="space-y-4 p-8">
              <div className="flex space-x-2">
                <span className="rounded-md p-1 text-xs font-semibold">
                  NEXT.JS
                </span>
                <span className="rounded-md p-1 text-xs font-semibold">
                  STRAPI
                </span>
                <span className="rounded-md p-1 text-xs font-semibold">
                  GRAPHQL
                </span>
                <span className="rounded-md p-1 text-xs font-semibold">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      {/* TODO: Add Experience */}
      {/* <section className="space-y-4">
        <h1 className="text-4xl font-bold ">Experience</h1>
      </section> */}
      <section className="py-32 space-y-4">
        <h1 className="text-4xl font-bold">Contact</h1>
        <Button href="mailto:edizyurdakul@gmail.com" external>
          Contact
        </Button>
      </section>
    </>
  );
};

export default Home;
