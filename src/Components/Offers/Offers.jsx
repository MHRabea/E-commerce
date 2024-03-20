import girlBlack from "../Assets/exclusive_image.png";
import { motion } from "framer-motion";
const Offers = () => {
  return (
    <div className="flex items-start md:items-center justify-between w-screen p-10 bg-gradient-to-b from-red-300">
      {/* left side */}
      <motion.div
        variants={{
          initial: {
            y: 40,
            scale: 0.8,
          },
          animate: {
            y: 0,
            scale: 1,
          },
        }}
        initial="initial"
        whileInView="animate"
        className="w-[25%] space-y-3"
      >
        <div>
          <h1 className="text-2xl font-Madimi md:text-[3rem] md:leading-[3rem]">
            Exclusive Offers For you
          </h1>
        </div>
        <div>
          <p className="text-xl font-serif underline md:text-3xl">
            Only for the best Selling Products
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <button className="p-2 text-xl bg-red-400 rounded-lg md:text-3xl text-white">
            Check Now
          </button>
        </motion.div>
      </motion.div>
      {/* right side */}
      <div className="w-[75%] flex items-center justify-end">
        <motion.div
          variants={{
            initial: {
              y: 40,
              scale: 0.8,
            },
            animate: {
              y: 0,
              scale: 1,
            },
          }}
          initial="initial"
          whileInView="animate"
          className=""
        >
          <img src={girlBlack} alt="Exclusive-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default Offers;
