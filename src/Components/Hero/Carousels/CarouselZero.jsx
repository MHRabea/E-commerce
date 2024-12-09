import { IoMdArrowForward } from "react-icons/io";
import React from "react";
import { motion } from "framer-motion";
import product19men from "../../Assets/product_19_no_bg.png";
import product35kids from "../../Assets/product_35_no_bg.png";
import product6women from "../../Assets/product_6_no_bg.png";

const CarouselZero = () => {
  const letters = [
    {
      letter: "W",
      delay: 0.1,
    },
    {
      letter: "e",
      delay: 0.2,
    },
    {
      letter: "l",
      delay: 0.3,
    },
    {
      letter: "c",
      delay: 0.4,
    },
    {
      letter: "o",
      delay: 0.5,
    },
    {
      letter: "m",
      delay: 0.6,
    },
    {
      letter: "e",
      delay: 0.7,
    },
  ];
  return (
    <div
      className="w-full flex items-center justify-center 
     bg-gradient-to-b from-red-300 px-5 overflow-hidden flex-shrink-0"
    >
      <div className="w-full flex items-center justify-between h-[30rem] md:flex-row flex-col px-12">
        <div
          className="flex flex-col items-center md:items-start justify-center gap-5 w-full text-left 
        md:text-center h-full"
        >
          <div className="flex items-center justify-center">
            {letters.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                }}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 1.5,
                  delay: item.delay,
                  type: "spring",
                  stiffness: 400,
                }}
                className="text-4xl md:text-8xl font-Madimi"
              >
                {item.letter}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
            }}
          >
            <p className="text-xl md:text-5xl z-20 text-center md:text-left">
              New And Exclusive Collections
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
              },
            }}
            className="flex items-center justify-center"
          >
            <button
              className="p-2 text-black flex items-center justify-center hover:text-red-500 gap-2
               md:text-4xl border-0 hover:border-b-2 border-black"
            >
              <p>Collections</p>
              <div>
                <IoMdArrowForward />
              </div>
            </button>
          </motion.div>
        </div>

        {/* rhite side  */}
        <div className="w-full h-[30rem] flex ">
          <div className="flex items-center justify-center relative w-full h-full">
            <div
              className="flex items-center justify-center absolute bottom-0 z-20 w-[12rem] 
              md:w-auto"
            >
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                }}
              >
                <img src={product19men} alt="product19" />
              </motion.div>
            </div>
            <div
              className="flex items-center justify-center absolute bottom-0 right-2 w-[12rem] 
              md:w-auto translate-x-12 md:translate-x-0"
            >
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
              >
                <img src={product6women} alt="product6" />
              </motion.div>
            </div>
            <div
              className="flex items-center justify-center absolute bottom-0 left-0 w-[10rem] 
              md:w-[15rem] -translate-x-10 md:translate-x-10"
            >
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 1,
                }}
              >
                <img src={product35kids} alt="product35" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselZero;
