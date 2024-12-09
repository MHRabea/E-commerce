import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useEffect, useState } from "react";

import { IoMdArrowForward } from "react-icons/io";
import product14men from "../Assets/product_14_no_bg.png";
import product18men from "../Assets/product_18_no_bg.png";
import product19men from "../Assets/product_19_no_bg.png";
import product21men from "../Assets/product_21_no_bg.png";
import product23men from "../Assets/product_23_no_bg.png";
import product25kids from "../Assets/product_25_no_bg.png";
import product28kids from "../Assets/product_28_no_bg.png";
import product35kids from "../Assets/product_35_no_bg.png";
import product6women from "../Assets/product_6_no_bg.png";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const carousels = [
    {
      title: "Welcome",
      text: "new and exclusive collections",
      buttonText: "More",
      middleImg: product19men,
      leftImg: product35kids,
      rightImg: product6women,
    },
    {
      title: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      buttonText: "More",
      middleImg: product18men,
      leftImg: product28kids,
      rightImg: product21men,
    },
    {
      title: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      buttonText: "More",
      middleImg: product14men,
      leftImg: product25kids,
      rightImg: product23men,
    },
  ];

  const slideTo = (index) => {
    setCurrent(index);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? carousels.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === carousels.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    let intervalId;

    if (!isHovered) {
      intervalId = setInterval(nextSlide, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className="relative flex items-center justify-center w-screen overflow-hidden h-[30rem] 
    bg-gradient-to-b from-red-300">
      <AnimatePresence>
        {carousels.map(
          (carousel, index) =>
            index === current && (
              <motion.div
                key={index}
                className="absolute w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, x: direction === 1 ? "100%" : "-100%" }}
                animate={{
                  opacity: current === index ? 1 : 0,
                  x: current === index ? 0 : direction === 1 ? "-100%" : "100%",
                }}
                exit={{ opacity: 0, x: direction === 1 ? "-100%" : "100%" }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  className="w-full flex items-center justify-between h-[30rem] md:flex-row 
            flex-col px-12"
                >
                  <motion.div
                    className="flex flex-col items-center md:items-start justify-center gap-5 w-full 
                text-left md:text-center h-full"
                  >
                    <motion.div
                      initial={{ y: -200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.7,
                        delay: 0.5,
                      }}
                      className="flex items-center justify-center"
                    >
                      <p className="text-4xl md:text-8xl font-Madimi">
                        {carousel.title}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ y: 300, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5,
                      }}
                    >
                      <p className="text-xl md:text-5xl z-20 text-center md:text-left">
                        {carousel.text}
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ y: 300, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.6,
                          delay: 0.4,
                        },
                      }}
                      className="flex items-center justify-center"
                    >
                      <button
                        className="p-2 text-black flex items-center justify-center hover:text-red-500 gap-2
               md:text-4xl border-0 hover:border-b-2 border-black"
                      >
                        <p>{carousel.buttonText}</p>
                        <div>
                          <IoMdArrowForward />
                        </div>
                      </button>
                    </motion.div>
                  </motion.div>

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
                            delay: 0.5,
                          }}
                        >
                          <img src={carousel.middleImg} alt="product19" />
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
                            delay: 0.8,
                          }}
                        >
                          <img src={carousel.rightImg} alt="product6" />
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
                            delay: 1.2,
                          }}
                        >
                          <img src={carousel.leftImg} alt="product35" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
        )}
      </AnimatePresence>
      <LayoutGroup>
        <motion.div
          layout
          className="absolute z-20 bottom-[2rem] flex items-center justify-center w-full gap-2"
        >
          {carousels.map((carousel, index) => (
            <button
              type="button"
              key={index}
              className={`bg-sky-500 w-3 h-3 rounded-full transition ease-in-out duration-400 hover:scale-125
             hover:bg-sky-900 ${index === current && "bg-sky-900 scale-125"}`}
              onClick={() => slideTo(index)}
            ></button>
          ))}
        </motion.div>
      </LayoutGroup>
      <IoIosArrowDropleftCircle
        className="absolute left-4 text-4xl cursor-pointer"
        onClick={prevSlide}
      />
      <IoIosArrowDroprightCircle
        className="absolute right-4 text-4xl cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Hero;
