import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { section } from "../../constants";

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
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

export default Section;
