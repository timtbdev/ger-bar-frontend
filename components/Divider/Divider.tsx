import { FC } from "react";
import { ArrowCircleDownIcon as Icon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { fadeAnim, spring } from "@libs/animation";
interface Props {
  title?: string;
}

const Divider: FC<Props> = ({ title }) => {
  let divider;
  if (title) {
    divider = (
      <motion.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={fadeAnim}
        transition={spring}
        className="relative mb-6 mt-6 sm:mb-10 lg:mb-4"
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center">
          <div
            className="inline-flex items-center shadow-sm px-4 py-1.5 border border-dashed border-gray-300 dark:border-gray-700 capitalize text-md leading-5 font-base rounded-full text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"
          >
            <Icon
              className="-ml-1.5 mr-1 h-6 w-6 text-gray-400"
              aria-hidden="true"
            />
            <span>{title}</span>
          </div>
        </div>
      </motion.div>
    );
  } else {
    divider = (
      <motion.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={fadeAnim}
        transition={spring}
        className="w-full mb-6 mt-16 sm:mb-10 md:mb-6 lg:mb-4 border-t border-dashed border-gray-300 dark:border-gray-700"
      ></motion.div>
    );
  }

  return divider;
};
export default Divider;
