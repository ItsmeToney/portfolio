/* eslint-disable react/no-unescaped-entities */
// import heroImage from "../assets/tony_james.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function animation(delay) {
  return {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: delay } },
  };
}

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col lg:flex-row justify-center items-center  pt-20 pb-10 gap-8 lg:gap-16 "
      >
        {/* <motion.img
          src={heroImage}
          alt="profile photo"
          className="h-[20rem] lg:h-[32rem] lg:pl-28 object-contain  "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        /> */}
        <div className="flex flex-col gap-4 lg:gap-8  justify-center items-center">
          <motion.p
            className="text-base font-extra light lg:text-lg text-neutral-300 "
            variants={animation(0)}
            initial="hidden"
            animate="visible"
          >
            Hello, I'am
          </motion.p>
          <motion.h1
            className="text-3xl lg:text-6xl  font-light text-[#f8f8ff] tracking-wider"
            variants={animation(0.5)}
            initial="hidden"
            animate="visible"
          >
            Tony James
          </motion.h1>
          <motion.h2
            className="text-2xl lg:text-3xl font-thin text-neutral-200 tracking-wide"
            variants={animation(1)}
            initial="hidden"
            animate="visible"
          >
            Frontend Developer
          </motion.h2>

          <motion.div
            className="flex gap-4 mt-4"
            variants={animation(1.2)}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="px-4 py-3 bg-slate-300 rounded-full  text-[#121212] text-sm font-medium"
              whileHover={{ scale: 1.1, backgroundColor: "#d1d5db" }}
              whileTap={{ scale: 0.9 }}
            >
              Download CV
            </motion.button>
            <Link to="contact" smooth={true} duration={1000}>
              <motion.button
                className="px-4 py-3 bg-slate-300 rounded-full  text-[#121212] text-sm font-medium"
                whileHover={{ scale: 1.1, backgroundColor: "#d1d5db" }}
                whileTap={{ scale: 0.9 }}
              >
                Contact info
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <hr className="mt-12 mx-8 border-[1.5px] border-neutral-800 " />
    </>
  );
}
