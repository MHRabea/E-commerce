import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";
import hero from "../Assets/hero_image.png";
import girlBlack from "../Assets/exclusive_image.png";
import hijabGirl from "../Assets/product_6.png";
import girlBlue from "../Assets/product_12.png";
import manBlue from "../Assets/product_20.png";
import kidBlue from "../Assets/product_25.png";
import kidBlack from "../Assets/product_35.png";

const Hero = () => {
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
      className="p-5 xl:p-10 w-screen flex  items-center  justify-between h-[54rem]
    md:h-[50rem] bg-gradient-to-b from-sky-300"
    >
      {/* left Side */}
      <div
        className="flex flex-col items-start  justify-start md:justify-center
      xl:justify-center space-y-5 w-full h-full mt-14 md:mt-0"
      >
        {/* letters animation */}
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
              className="xl:text-[5rem] text-4xl md:text-[4rem] font-Madimi"
            >
              {item.letter}
            </motion.div>
          ))}
        </div>
        <p className="text-[1.9rem] md:text-[2.5rem] lg:text-[3rem] font-Dosis z-20">
          New And Exclusive <br />
          Collections
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <button
            className="p-2 xl:p-3 bg-red-400 w-[8rem] md:w-[10rem] text-white xl:w-[12rem]
            text-[0.9rem] md:text-[1.2rem] rounded-full flex flex-col items-center 
            justify-center hover:text-black "
          >
            Collections <IoMdArrowForward className="hover:text-white" />
          </button>
        </motion.div>
      </div>
      {/* right Side mobile */}
      <div className="relative w-full h-full md:hidden">
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.1,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[20rem] right-[10rem] w-[15rem] h-[15rem] rounded-full
        z-10 border-black border-2"
        >
          <img src={hero} alt="" className="object-cover" />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.2,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[0rem] right-[0rem] w-[15rem] h-[20rem] rounded-full
          z-10 border-black border-2"
        >
          <img src={girlBlack} alt="" className="object-cover" />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.3,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute bottom-[1.5rem] right-[14rem] w-[10rem] h-[10rem] rounded-full 
          border-2 border-black z-10"
        >
          <img
            src={hijabGirl}
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>
        
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute bottom-[0rem] right-0 w-[12rem] h-[14rem] rounded-full z-10 
          border-black border-2"
        >
          <img
            src={manBlue}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.6,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[25rem] right-0 w-[8rem] h-[10rem] rounded-full border-2
          border-black z-10"
        >
          <img
            src={kidBlue}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
      {/* right side tablet */}
      <div className="relative w-full h-full hidden md:flex xl:hidden">
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.1,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[20rem] right-[22rem] w-[15rem] h-[15rem] rounded-full  
        z-10 border-black border-2"
        >
          <img src={hero} alt="" className="object-cover" />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.2,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[8rem] right-[10rem] w-[15rem] h-[15rem] rounded-full z-10 border-black border-2"
        >
          <img src={girlBlack} alt="" className="object-cover" />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.3,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[5rem] left-[0rem] w-[10rem] h-[10rem] rounded-full z-10 border-2 border-black"
        >
          <img
            src={hijabGirl}
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[5rem] right-0 w-[10rem] h-[12rem] rounded-full z-10 border-black border-2"
        >
          <img
            src={manBlue}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.6,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute bottom-[10rem] right-0 w-[12rem] h-[14rem] rounded-full border-2 border-black z-10"
        >
          <img
            src={kidBlue}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
      {/* write side  */}
      <div className="relative w-full h-full hidden xl:flex">
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.1,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[20rem] right-[30rem] w-[15rem] h-[15rem] rounded-full  
        z-10 border-black border-2"
        >
          <img src={hero} alt="" className="object-cover" />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.2,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[8rem] right-[10rem] w-[20rem] h-[20rem] rounded-full z-10 border-black border-2"
        >
          <img src={girlBlack} alt="" className="object-cover" />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.3,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[5rem] left-[5rem] w-[10rem] h-[10rem] rounded-full z-10 border-2 border-black"
        >
          <img
            src={hijabGirl}
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.4,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute bottom-[5rem] right-0 w-[12rem] h-[14rem] rounded-full border-2 border-black z-10"
        >
          <img
            src={girlBlue}
            alt=""
            className="rounded-full object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[5rem] right-0 w-[10rem] h-[12rem] rounded-full z-10 border-black border-2"
        >
          <img
            src={manBlue}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.6,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[13rem] w-[8rem] h-[8rem] rounded-full z-10 border-black border-2"
        >
          <img
            src={kidBlue}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            delay: 0.7,
            type: "spring",
            stiffness: 400,
          }}
          className="absolute top-[18rem] right-0 w-[8rem] h-[8rem] rounded-full border-2 border-black z-10"
        >
          <img
            src={kidBlack}
            alt=""
            className="w-full h-full object-cover rounded-full "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
