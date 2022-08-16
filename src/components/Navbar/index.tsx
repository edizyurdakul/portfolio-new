import { motion } from "framer-motion";
// import { SunIcon, MoonIcon } from "@heroicons/react/solid";
// import { Menu, Transition } from "@headlessui/react";

// const ThemeButton = () => {
//   const { systemTheme, theme, setTheme } = useTheme();
//   const currentTheme = theme === "system" ? systemTheme : theme;
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   if (!mounted) return null;

//   return (
//     <AnimatePresence exitBeforeEnter>
//       {currentTheme === "dark" && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setTheme("light")}
//           className="rounded-md p-2 transition-colors hover:bg-white/10"
//         >
//           <SunIcon key={"light"} className="h-6 w-6 text-white" role="button" />
//         </motion.div>
//       )}
//       {currentTheme === "light" && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           key={"dark"}
//           onClick={() => setTheme("dark")}
//           className="rounded-md p-2 transition-colors hover:bg-black/10"
//         >
//           <MoonIcon className="h-6 w-6 text-black" role="button" />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

function Navbar() {
  const list = {
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

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={list}
      className="flex items-center justify-between space-x-12 py-4"
    >
      <nav className="flex">
        <a
          href="#introduction"
          aria-label="Skip navigation and go to introduction"
          className="absolute top-[-25%] p-2 transition-all ease-in-out focus:top-[10%]"
        >
          Skip to content
        </a>
        <motion.ul className="flex items-center space-x-4">
          <motion.li variants={item}>
            <a href="#about" className="nav-link">
              About
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="#about" className="nav-link">
              Work
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="#about" className="nav-link">
              Projects
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="#about" className="nav-link">
              Skills
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="#about" className="nav-link">
              Experience
            </a>
          </motion.li>
        </motion.ul>
      </nav>
      {/* <motion.div className="w-fit" variants={item}>
        {ThemeButton()}
      </motion.div> */}
    </motion.header>
  );
}

export default Navbar;
