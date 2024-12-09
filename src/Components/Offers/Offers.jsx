import { motion } from "framer-motion";
import product6 from "../Assets/product_6_no_bg.png";

const Offers = () => {
  return (
    <div
      className="flex items-center justify-center bg-gradient-to-b from-red-300 h-[30rem]
    w-screen overflow-hidden"
    >
      <div className="flex flex-col items-center justify-between w-full h-[30rem] md:flex-row px-12">
        <div
          className="flex flex-col items-center md:items-start justify-center gap-5 w-full 
                md:text-left text-center h-full"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <p className="text-2xl font-Madimi md:text-6xl">
              Exclusive Offers For you
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <p className="text-xl font-serif underline md:text-3xl">
              Only for the best Selling Products
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <button
              className="p-2 text-xl bg-red-400 rounded-lg md:text-3xl text-white 
            hover:text-sky-300 hover:drop-shadow-customBlack text-center flex items-center justify-center"
            >
              Check Now
            </button>
          </motion.div>
        </div>
        <div className="w-full flex items-center justify-center h-[30rem] relative">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute w-[12rem] md:w-[15rem] h-full bottom-0 flex items-end justify-center"
          >
            <img src={product6} alt="product_6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
