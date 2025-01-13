/* eslint-disable react/no-unescaped-entities */
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-8 ">
      <motion.h2
        className="text-center text-[#f8f8ff] pb-8  font-semibold tracking-wide text-3xl"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let's Connect
      </motion.h2>
      <motion.p
        className="text-sm text-center text-neutral-400 mb-6 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Have a question, an idea, or want to collaborate? Reach out to me
        through any of the platforms below!
      </motion.p>
      <motion.div
        className="flex justify-center gap-6 text-[#f8f8ff]"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="mailto:tonimanthara@gmail.com">
          <MdOutlineEmail className="w-6 h-6" />
        </a>
        <a href="https://github.com/ItsmeToney">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/_toni_james_/">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/tony-james5623/">
          <FaLinkedin className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
