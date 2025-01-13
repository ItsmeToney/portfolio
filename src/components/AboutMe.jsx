import Education from "./Education";
import { motion } from "framer-motion";
export default function AboutMe() {
  return (
    <>
      <section id="about" className="pt-20 px-8 lg:px-20 overflow-x-hidden">
        <motion.h2
          className="text-3xl text-[#f8f8ff] text-center font-semibold tracking-wide pb-8"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-neutral-300 text-base font-light tracking-wide leading-relaxed"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          I am a passionate Frontend Developer dedicated to building functional,
          user-friendly, and visually engaging web applications. My journey into
          web development started with a curiosity to understand how the web
          works, and it has grown into a strong desire to create impactful
          digital experiences. I specialize in technologies like React.js,
          Tailwind CSS, and JavaScript, focusing on responsive and accessible
          design principles. I enjoy solving challenging problems and
          continuously learning about new tools and techniques to enhance my
          skills.
        </motion.p>
        <Education />
        {/* Need to add Experience section */}
      </section>
    </>
  );
}
