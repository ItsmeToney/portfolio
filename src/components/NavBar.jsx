// import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen((pre) => !pre);
  }

  const navContentsClass =
    "text-[#121212] lg:text-[#f8f8ff] text-[1.2rem] font-[450]  py-4  px-4 cursor-pointer lg:hover:scale-105 active:opacity-50 transition-all duration-150 ease-in tracking-wide ";

  return (
    <motion.nav
      className="sticky top-0 bg-[#121212] z-50 pl-4 pt-4 flex justify-between lg:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
    >
      <div className="text-[#f8f8ff] font-bold text-[1.5rem]">Tony James</div>
      <div
        className={`relative  flex flex-col items-end  lg:bg-[#121212]  rounded-l-md `}
      >
        <button
          onClick={handleMenuOpen}
          className="w-12 mt-4 flex flex-col items-center justify-center gap-1  lg:hidden  "
        >
          <motion.div
            className={`w-7 h-1 ${
              isOpen ? "bg-[#f8f8ff]" : "bg-[#f8f8ff]"
            }  rounded `}
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={`w-7 h-1 ${
              isOpen ? "bg-[#f8f8ff]" : "bg-[#f8f8ff]"
            }  rounded `}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={`w-7 h-1 ${
              isOpen ? "bg-[#f8f8ff]" : "bg-[#f8f8ff]"
            }  rounded `}
            animate={isOpen ? { rotate: 135, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
        <motion.ul
          className={`${
            isOpen ? "visible" : "invisible"
          }    fixed lg:static top-20 right-0 lg:top-0  z-50 lg:flex px-10 py-4 lg:py-0  bg-[#f8f8ff] bg-opacity-35 lg:bg-opacity-0 backdrop-blur-xl rounded-l-lg `}
          animate={
            isOpen || window.innerWidth >= 1024
              ? { opacity: 1, translateX: 0, visibility: "visible" }
              : { opacity: 0, translateX: 100, visibility: "hidden" }
          }
          transition={{ duration: 0.3 }}
        >
          <li className={navContentsClass}>
            <Link
              to="home"
              smooth={true}
              duration={1000}
              onClick={handleMenuOpen}
            >
              Home
            </Link>
          </li>
          <li className={navContentsClass}>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              onClick={handleMenuOpen}
            >
              About
            </Link>
          </li>
          <li className={navContentsClass}>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              onClick={handleMenuOpen}
            >
              Skills
            </Link>
          </li>
          <li className={navContentsClass}>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              onClick={handleMenuOpen}
            >
              Projects
            </Link>
          </li>

          <li className={navContentsClass}>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={handleMenuOpen}
            >
              Contact
            </Link>
          </li>
        </motion.ul>
      </div>
    </motion.nav>
  );
}
