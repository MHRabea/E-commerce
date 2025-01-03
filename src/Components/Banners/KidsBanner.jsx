import kid from "../Assets/product_28_no_bg.png";
import { motion } from "framer-motion";

const KidsBanner = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-red-300 h-[30rem]
    w-screen overflow-hidden">
      <div
        className="flex flex-col items-center justify-between w-full h-[30rem] md:flex-row px-12"
      >
        {/* left Side */}
        <div className="flex flex-col items-center md:items-center justify-center gap-5 w-full 
                md:text-left text-center h-full">
          <motion.div
            variants={{
              initial: { y: 70, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="initial"
            whileInView="visible"
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="flex space-x-2 items-end"
          >
            <motion.h1
              variants={{
                initial: { scale: 0 },
                visible: { scale: 1 },
              }}
              initial="initial"
              whileInView="visible"
              transition={{
                duration: 0.5,
                delay: 0.25,
                type: "spring",
                stiffness: 400,
                damping: 7,
              }}
              className="text-6xl md:text-8xl font-Dosiss text-red-500"
            >
              50%
            </motion.h1>
            <h1 className="text-lg">Off</h1>
          </motion.div>
          <div className="">
            <motion.div
              variants={{
                initial: { y: 70, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="initial"
              whileInView="visible"
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-2xl ">Limited Time Offer</h1>
              <h2 className="text-xl font-medium">12:00:00</h2>
            </motion.div>
          </div>
          <motion.div
            variants={{
              initial: { y: 70, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="initial"
            whileInView="visible"
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <button className="p-2 text-xl bg-red-400 rounded-lg md:text-3xl text-white z-50">
                Check Now
              </button>
            </motion.div>
          </motion.div>
        </div>
        {/* right Side */}
        <div className="flex items-center justify-center w-full relative h-[30rem]">
          <motion.div
            variants={{
              initial: { y: 70, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="initial"
            whileInView="visible"
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="absolute w-[12rem] md:w-[15rem] h-full bottom-0 flex items-end justify-center"
          >
            <img src={kid} alt="discount" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KidsBanner;
