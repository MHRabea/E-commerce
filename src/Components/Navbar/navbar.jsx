import { useState } from "react";
import logo from "../Assets/E-commerce.png";
import { BsCart4 } from "react-icons/bs";
import { LuLogIn } from "react-icons/lu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("shop");

  return (
    <div className="flex items-center justify-between font-Dosis font-medium w-screen h-[3rem] p-3">
      {/* Nav Left Side and Logo */}

      <div>
        <img src={logo} alt="logo-img" className=" h-[2rem] object-cover" />
      </div>

      {/* Nav Middle  */}

      <div className="flex items-center justify-center gap-5">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          onClick={() => setSelectedMenu("shop")}
          className={`${
            selectedMenu === "shop" &&
            "border-b-2 border-red-700 p-2 text-red-700"
          } 
           ease-in-out hover:border-b-2 border-red-700 hover:p-2 hover:text-red-700 
           cursor-pointer p-2`}
        >
          Shop
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          onClick={() => setSelectedMenu("men")}
          className={`${
            selectedMenu === "men" &&
            "border-b-2 border-red-700 p-2 text-red-700"
          } 
           ease-in-out hover:border-b-2 border-red-700 hover:p-2 hover:text-red-700 
           cursor-pointer p-2`}
        >
          Men
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          onClick={() => setSelectedMenu("women")}
          className={`${
            selectedMenu === "women" &&
            "border-b-2 border-red-700 p-2 text-red-700"
          } 
           ease-in-out hover:border-b-2 border-red-700 hover:p-2 hover:text-red-700 
           cursor-pointer p-2`}
        >
          Women
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          onClick={() => setSelectedMenu("kids")}
          className={`${
            selectedMenu === "kids" &&
            "border-b-2 border-red-700 p-2 text-red-700"
          } 
           ease-in-out hover:border-b-2 border-red-700 hover:p-2 hover:text-red-700 
           cursor-pointer p-2`}
        >
          Kids
        </motion.div>
      </div>

      {/*Nav Right Side  */}

      <div className="flex items-center justify-center  gap-2">
        {/* login  buttons */}
        <div className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="cursor-pointer hover:text-red-700"
          >
            <LuLogIn size={20} />
          </motion.div>
        </div>
        {/* cart and count */}
        <div className="relative w-[3rem] h-[2rem] flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="cursor-pointer hover:text-red-700"
          >
            <BsCart4 size={25} />
          </motion.div>
          <div
            className="bg-sky-950 flex items-center justify-center rounded-full 
          h-[1rem] w-[1rem] absolute top-0 right-0 z-10 font-mono text-white"
          >
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
