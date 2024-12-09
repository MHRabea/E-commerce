import { IoMdArrowForward } from "react-icons/io";
import React from "react";
import { motion } from "framer-motion";
import product14men from "../../Assets/product_14_no_bg.png";
import product23men from "../../Assets/product_23_no_bg.png";
import product25kids from "../../Assets/product_25_no_bg.png";

const CarouselTwo = () => {

    return (
        <div
            className="w-full flex items-center justify-center 
     bg-gradient-to-b from-red-300 px-5 overflow-hidden"
        >
            <div className="w-full flex items-center justify-between h-[30rem] md:flex-row flex-col px-12">
                <div
                    className="flex flex-col items-center md:items-start justify-center gap-5 w-full text-left 
        md:text-center h-full"
                >
                    <div className="flex items-center justify-center">
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="flex items-center justify-center"
                        >
                            <p>Lorem Ipsum</p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        <p className="text-xl md:text-5xl z-20 text-center md:text-left">
                            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
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
                                <img src={product14men} alt="product14" />
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
                                <img src={product23men} alt="product23" />
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
                                <img src={product25kids} alt="product25" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselTwo;
