import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaSass,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import Logo from "./Logo.jsx";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <section id="skills" className="py-12 mx-4 pb-4">
        <motion.h2
          className="text-center text-[#f8f8ff] py-8 font-semibold tracking-wide text-3xl"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          Technologies
        </motion.h2>
        <motion.div
          className="flex justify-center items-center flex-wrap gap-4 lg:gap-8"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <Logo Icon={FaHtml5} color="#E44D26" initialValue={[5, -5]} />
          <Logo Icon={FaCss3Alt} color="#1572B6" initialValue={[-5, 5]} />
          <Logo
            Icon={IoLogoJavascript}
            color="#F7DF1E"
            initialValue={[5, -5]}
          />
          <Logo Icon={FaReact} color="#61DAFB" initialValue={[-5, 5]} />
          <Logo Icon={FaNodeJs} color="#8CC84B" initialValue={[5, -5]} />
          <Logo
            Icon={RiTailwindCssFill}
            color="#38BDF8"
            initialValue={[-5, 5]}
          />
          <Logo Icon={FaSass} color="#CD6799" initialValue={[5, -5]} />
          <Logo Icon={SiExpress} color="#4CAF50" initialValue={[-5, 5]} />
          <Logo Icon={FaJava} color="#007396" initialValue={[5, -5]} />
          <Logo Icon={SiMongodb} color="#47A248" initialValue={[-5, 5]} />
          <Logo Icon={SiMysql} color="#00A9E0" initialValue={[5, -5]} />
        </motion.div>
      </section>
      <hr className="mt-12 mx-8 border-[1.5px] border-neutral-800 " />
    </>
  );
}
