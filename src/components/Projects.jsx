import { PROJECTS } from "../projects.js";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="text-center text-[#f8f8ff] pt-20  px-2 font-semibold tracking-wide text-3xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="flex flex-col gap-12 my-12 overflow-x-hidden">
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex items-center gap-8 py-8 ">
              <motion.a
                href={project.url}
                className=" flex-1 flex justify-center h-20 w-20 lg:h-28 lg:w-28  object-contain"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img src={project.image} alt={project.title} />
              </motion.a>
              <motion.div
                className="flex-1 flex flex-col gap-4"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-lg font-normal text-left">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-300 font-light text-left">
                  {project.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      <hr className="mt-12 mx-8 border-[1.5px] border-neutral-800 " />
    </>
  );
}
