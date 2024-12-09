import { motion } from "framer-motion";

const LoadingDots = ({color}) => {
  const ContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const DotVariants = {
    animate: {
      opacity: ["0%", "100%"],
    },
  };

  const DotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <motion.div
        className={`w-[3rem] h-[2rem] flex justify-center items-center`}
        variants={ContainerVariants}
        animate="animate"
      >
        <motion.span
          className={`block w-2 h-2 ${color} rounded-[50%]`}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className={`block w-2 h-2 ${color} rounded-[50%]`}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className={`block w-2 h-2 ${color} rounded-[50%]`}
          variants={DotVariants}
          transition={DotTransition}
        />
       
      </motion.div>
    </div>

  );
};

export default LoadingDots;
