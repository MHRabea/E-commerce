import { motion } from "framer-motion";
import kid from "../Assets/product_28_no_bg.png";
const KidsBanner = () => {
  return (
    <div className="flex items-center justify-center w-screen h-[20rem]  bg-gradient-to-b from-red-300">
      <div
        className="w-full max-w-[60rem] px-10 flex items-center justify-center h-full overflow-hidden
     "
      >
        {/* left Side */}
        <div className="w-1/4 flex flex-col space-y-2">
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
              className="text-[4rem] leading-[4rem] font-Dosiss text-red-500"
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
              className="flex flex-col space-y-2"
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
          className="w-3/4 h-full flex justify-end"
        >
          <img src={kid} alt="discount" className="h-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default KidsBanner;
