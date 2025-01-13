/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Icons from "./Icons.jsx";

export default function Logo({ Icon, color, initialValue }) {
  return (
    <motion.div
      className="p-4 border-4 border-neutral-800  rounded-2xl"
      animate={{
        y: initialValue,
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      <Icons color={color} Icon={Icon} className="text-5xl lg:text-7xl" />
    </motion.div>
  );
}
