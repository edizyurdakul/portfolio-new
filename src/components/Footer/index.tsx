import React from "react";
import { elements } from "../../constants";
import { motion } from "framer-motion";
import { NavLink } from "../Navbar";

const Footer = () => {
  return (
    <footer className="flex flex-col text-neutral-500 pb-16">
      <div className="h-[1px] bg-neutral-800 my-8"></div>
      <div className="grid grid-cols-3 gap-2">
        <motion.ul className="flex flex-col space-y-4">
          <motion.li variants={elements}>
            <NavLink href="/">Home</NavLink>
          </motion.li>
          <motion.li variants={elements}>
            <NavLink href="/about">About</NavLink>
          </motion.li>
          <motion.li variants={elements}>
            <NavLink href="/work">Work</NavLink>
          </motion.li>
          <motion.li variants={elements}>
            <NavLink href="/projects">Projects</NavLink>
          </motion.li>
        </motion.ul>
        <motion.ul className="flex flex-col space-y-4">
          <motion.li variants={elements}>
            <NavLink href="/github" external>
              Twitter
            </NavLink>
          </motion.li>
          <motion.li variants={elements}>
            <NavLink href="/twitter" external>
              LinkedIn
            </NavLink>
          </motion.li>
          <motion.li variants={elements}>
            <NavLink href="/twitter" external>
              Twitter
            </NavLink>
          </motion.li>
          <motion.li variants={elements}>
            <NavLink href="/resume">Resume</NavLink>
          </motion.li>
        </motion.ul>
        <motion.ul className="flex flex-col space-y-4">
          <motion.li variants={elements}>
            <NavLink href="/guestbook">Guestbook</NavLink>
          </motion.li>
          <motion.li variants={elements}>
            <NavLink href="/snippets">Snippets</NavLink>
          </motion.li>
        </motion.ul>
      </div>
    </footer>
  );
};

export default Footer;
