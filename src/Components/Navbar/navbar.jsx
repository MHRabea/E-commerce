import { useState } from "react";
import logo from "../Assets/E-commerce.png";
import { BsCart4 } from "react-icons/bs";
import { LuLogIn } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("shop");
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  const menuVars = {
    initial: { opacity: 1, width: 0 },
    animate: {
      opacity: 1,
      width: "16rem",
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      opacity: 1,
      width: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  };

  return (
    <div
      className="flex items-center justify-between font-Dosis font-medium w-screen h-[3rem] p-5
    bg-sky-300"
    >
      {/* Nav Left Side and Logo */}

      <div>
        <img src={logo} alt="logo-img" className=" h-[2rem] object-cover" />
      </div>

      {/* Nav Middle web  */}

      <div className="hidden md:flex items-center justify-center gap-5">
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
            selectedMenu === "shop" && "border-b-2 border-red-700  text-red-700"
          } 
           ease-in-out hover:border-b-2 border-red-700  hover:text-red-700 
           cursor-pointer`}
        >
          <Link to="/" className="w-full inline-block h-full p-[0.7rem]">
            Shop
          </Link>
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
            selectedMenu === "men" && "border-b-2 border-red-700  text-red-700"
          } 
           ease-in-out hover:border-b-2 border-red-700  hover:text-red-700 
           cursor-pointer `}
        >
          <Link to="/men" className="w-full inline-block h-full p-[0.7rem]">
            Men
          </Link>
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
            "border-b-2 border-red-700  text-red-700"
          }
           ease-in-out hover:border-b-2 border-red-700  hover:text-red-700 
           cursor-pointer `}
        >
          <Link to="/women" className="w-full inline-block h-full p-[0.7rem]">
            Women
          </Link>
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
            selectedMenu === "kids" && "border-b-2 border-red-700  text-red-700"
          }
           ease-in-out hover:border-b-2 border-red-700  hover:text-red-700
           cursor-pointer `}
        >
          <Link to="/kids" className="w-full inline-block h-full p-[0.7rem]">
            Kids
          </Link>
        </motion.div>
      </div>

      {/*Nav Right Side web */}

      <div className="flex items-center justify-center gap-2">
        {/* menu Button */}

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          onClick={handleToggleNav}
          className={`md:hidden flex flex-col items-center justify-center space-y-1 z-50 ${
            toggleNav && "fixed top-4 right-5"
          }`}
          animate={toggleNav ? "open" : "closed"}
        >
          <motion.span
            className={`h-[0.10rem] w-7 rounded-2xl bg-sky-900 ${
              toggleNav && "bg-white"
            }`}
            variants={{
              closed: { opacity: 1, rotate: "0deg" },
              open: { opacity: 1, rotate: "-45deg", y: 5 },
            }}
          ></motion.span>
          <motion.span
            className={`h-[0.10rem] w-7 rounded-2xl bg-sky-900 ${
              toggleNav && "bg-white"
            }`}
            variants={{
              closed: { opacity: 1, rotate: "0deg", y: 0 },
              open: { opacity: 1, rotate: "45deg", y: 0 },
            }}
          ></motion.span>
          <motion.span
            className={`h-[0.10rem] w-7 rounded-2xl bg-sky-900 ${
              toggleNav && "bg-white"
            }`}
            variants={{
              closed: { opacity: 1, rotate: "0deg" },
              open: { opacity: 0 },
            }}
          ></motion.span>
        </motion.button>
        {/* login  buttons */}
        <div className="hidden md:flex items-center justify-center">
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
            <Link to="/login">
              <LuLogIn size={20} />
            </Link>
          </motion.div>
        </div>
        {/* cart and count */}
        <div className="relative w-[3rem] h-[3rem] hidden md:flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            onClick={() => setSelectedMenu("cart")}
            className="cursor-pointer hover:text-red-700"
          >
            <Link to="/cart">
              <BsCart4 size={30} />
            </Link>
          </motion.div>
          <div
            className="bg-sky-950 flex items-center justify-center rounded-full
          h-[1.5rem] w-[1.5rem] absolute top-1 right-0 z-10 font-mono text-white text-sm"
          >
            0
          </div>
        </div>
        {/* nav mobile */}
        <AnimatePresence>
          {toggleNav && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed z-40 right-0 top-0 h-screen w-[16rem] bg-gradient-to-b from-sky-500 to-red-200 flex items-center
               justify-center flex-col overflow-hidden md:hidden"
            >
              <div
                className="flex flex-col items-center justify-center w-full h-full overflow-hidden space-y-3
              relative"
              >
                {/* menu Items */}
                <div className="overflow-hidden h-[4rem] w-[16rem] flex items-center justify-center">
                  <motion.div
                    variants={{
                      initial: { y: 60 },
                      animate: { y: 0 },
                      exit: { y: 60 },
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      delay: 0.1,
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
                      onClick={() => setSelectedMenu("shop")}
                      className={`ease-in-out cursor-pointer flex
                    items-center justify-center`}
                    >
                      <Link
                        to="/"
                        className={`w-[16rem] h-[3rem] p-[0.7rem]  flex items-center
                      justify-center space-x-1  ${
                        selectedMenu === "shop" && "scale-110"
                      }`}
                      >
                        <div
                          className={`border-white border-2 rounded-full w-[2.5rem] h-[2.5rem] 
                     hover:border-white ${
                       selectedMenu === "shop" &&
                       "border-sky-950 bg-slate-100 hover:border-black"
                     }`}
                        ></div>
                        <p
                          className={`w-[8rem] h-[2rem] border-2 border-white flex items-center
                      justify-center rounded-r-full text-xl text-white hover:border-white hover:text-white 
                      ${
                        selectedMenu === "shop" &&
                        "border-sky-950 hover:border-black text-black bg-slate-100 hover:text-sky-950"
                      }`}
                        >
                          Shop
                        </p>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="overflow-hidden h-[4rem] w-[16rem] flex items-center justify-center">
                  <motion.div
                    variants={{
                      initial: { y: 60 },
                      animate: { y: 0 },
                      exit: { y: 60 },
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
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
                      onClick={() => setSelectedMenu("men")}
                      className={`ease-in-out cursor-pointer flex
                    items-center justify-center`}
                    >
                      <Link
                        to="/men"
                        className={`w-[16rem] h-[3rem] p-[0.7rem]  flex items-center
                      justify-center space-x-1  ${
                        selectedMenu === "men" && "scale-110"
                      }`}
                      >
                        <div
                          className={`border-white border-2 rounded-full w-[2.5rem] h-[2.5rem] 
                     hover:border-white ${
                       selectedMenu === "men" &&
                       "border-sky-950 bg-slate-100 hover:border-black"
                     }`}
                        >
                          {" "}
                        </div>
                        <p
                          className={`w-[8rem] h-[2rem] border-2 border-white flex items-center
                      justify-center rounded-r-full text-xl text-white hover:border-white hover:text-white  ${
                        selectedMenu === "men" &&
                        "border-sky-950 hover:border-black text-black bg-slate-100 hover:text-sky-950"
                      }`}
                        >
                          Men
                        </p>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="overflow-hidden h-[4rem] w-[16rem] flex items-center justify-center">
                  <motion.div
                    variants={{
                      initial: { y: 60 },
                      animate: { y: 0 },
                      exit: { y: 60 },
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      delay: 0.3,
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
                      onClick={() => setSelectedMenu("women")}
                      className={`ease-in-out cursor-pointer flex
                    items-center justify-center`}
                    >
                      <Link
                        to="/women"
                        className={`w-[16rem] h-[3rem] p-[0.7rem]  flex items-center
                      justify-center space-x-1  ${
                        selectedMenu === "women" && "scale-110"
                      }`}
                      >
                        <div
                          className={`border-white border-2 rounded-full w-[2.5rem] h-[2.5rem] 
                     hover:border-white ${
                       selectedMenu === "women" &&
                       "border-sky-950 bg-slate-100 hover:border-black"
                     }`}
                        ></div>
                        <p
                          className={`w-[8rem] h-[2rem] border-2 border-white flex items-center
                      justify-center rounded-r-full text-xl text-white hover:border-white hover:text-white ${
                        selectedMenu === "women" &&
                        "border-sky-950 hover:border-black text-black bg-slate-100 hover:text-sky-950"
                      }`}
                        >
                          Women
                        </p>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="overflow-hidden h-[4rem] w-[16rem] flex items-center justify-center">
                  <motion.div
                    variants={{
                      initial: { y: 60 },
                      animate: { y: 0 },
                      exit: { y: 60 },
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      delay: 0.4,
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
                      onClick={() => setSelectedMenu("kids")}
                      className={`ease-in-out cursor-pointer flex
                    items-center justify-center`}
                    >
                      <Link
                        to="/kids"
                        className={`w-[16rem] h-[3rem] p-[0.7rem]  flex items-center
                      justify-center space-x-1  ${
                        selectedMenu === "kids" && "scale-110"
                      }`}
                      >
                        <div
                          className={`border-white border-2 rounded-full w-[2.5rem] h-[2.5rem] 
                     hover:border-white ${
                       selectedMenu === "kids" &&
                       "border-sky-950 bg-slate-100 hover:border-black"
                     }`}
                        ></div>
                        <p
                          className={`w-[8rem] h-[2rem] border-2 border-white flex items-center
                      justify-center rounded-r-full text-xl text-white hover:border-white hover:text-white ${
                        selectedMenu === "kids" &&
                        "border-sky-950 hover:border-black text-black bg-slate-100 hover:text-sky-950"
                      }`}
                        >
                          Kids
                        </p>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
                {/* cart & count Mobile */}
                <div
                  className="overflow-hidden w-[6rem] h-[6rem]
                flex items-center justify-center"
                >
                  <motion.div
                    variants={{
                      initial: { y: 100 },
                      animate: { y: 0 },
                      exit: { y: 100 },
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      delay: 0.4,
                    }}
                    className=" "
                  >
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        onClick={() => setSelectedMenu("cart")}
                        className="cursor-pointer"
                      >
                        <Link
                          to="/cart"
                          className={`w-[4.5rem] h-[4.5rem] border-2 border-black rounded-full
                          flex items-center justify-center relative hover:border-white hover:text-white ${
                            selectedMenu === "cart" &&
                            "scale-110 border-sky-950  bg-slate-100 text-sky-950 hover:text-sky-950 hover:border-sky-950"
                          }`}
                        >
                          <BsCart4 size={30} className="" />
                          <div
                            className={`bg-sky-950 flex items-center justify-center rounded-full
                        h-[1.5rem] w-[1.5rem] absolute top-0 right-0 z-10 font-mono text-white text-sm
                        outline-1 outline-dashed outline-black ${
                          selectedMenu === "cart" &&
                          "outline-white outline-dashed outline-1"
                        }`}
                          >
                            0
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                {/* login Button Mobile */}
                <div
                  className="overflow-hidden  w-[5rem] h-[5rem]
                flex items-center justify-center"
                >
                  <motion.div
                    variants={{
                      initial: { y: 100 },
                      animate: { y: 0 },
                      exit: { y: 100 },
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      delay: 0.4,
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="cursor-pointer"
                      >
                        <Link
                          to="/login"
                          className={`w-[3rem] h-[3rem] border-2 border-black rounded-full
                          flex items-center justify-center relative hover:border-white hover:text-white`}
                        >
                          <LuLogIn size={20} />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
