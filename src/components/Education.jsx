import { motion } from "framer-motion";
import { EDUCATION_DATA } from "../education.js";
import Icons from "./Icons.jsx";

export default function Education() {
  return (
    <>
      <section id="education" className="pt-20 px-2">
        <motion.h2
          className="text-[#f8f8ff] text-center text-2xl font-semibold tracking-wider pb-10"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>

        <motion.div className="text-[#f8f8ff] ">
          {EDUCATION_DATA.map((data, index) => (
            <div key={index} className="flex overflow-x-hidden ">
              <motion.span
                className="text-sm w-1/3 flex justify-center pt-2 pr-4"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.4 }}
              >
                {data.year}
              </motion.span>
              <div className="relative w-2/3 flex  gap-4 pb-10 ">
                <motion.span
                  className="absolute top-0 w-1 h-full bg-neutral-800"
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <span className="absolute flex justify-center items-center left-[-1rem]  right-0 h-8 w-8  bg-neutral-800 rounded-full ">
                    <Icons Icon={data.icon} className="" />
                  </span>
                </motion.span>

                <motion.div
                  className="flex flex-col gap-4 ml-7 lg:ml-16"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.4 }}
                >
                  <h3 className="text-2xl text-neutral-100 font-semibold">
                    {data.degree}
                  </h3>
                  <p className="text-xl font-normal text-neutral-200">
                    {data.institution}
                  </p>
                  <p className="text-sm text-neutral-300 font-light  ">
                    {data.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      <hr className="mt-12 mx-8 border-[1.5px] border-neutral-800 " />
    </>
  );
}
