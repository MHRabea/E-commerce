import { useState, useEffect, useContext } from "react";
import logo from "../Assets/E-commerce.png";
import { useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { LuLogIn } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setSelectedMenu("shop");
        break;
      case "/men":
        setSelectedMenu("men");
        break;
      case "/women":
        setSelectedMenu("women");
        break;
      case "/kids":
        setSelectedMenu("kids");
        break;
      case "/login":
        setSelectedMenu("login");
        break;
      case "/cart":
        setSelectedMenu("cart");
        break;
      default:
        setSelectedMenu("");
    }
  }, [location.pathname]);


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
    <div className="flex items-center justify-center font-Dosis font-medium w-screen bg-red-300">
      <div className="w-full max-w-[99rem] flex items-center justify-between h-[6rem] p-8">
        {/* Nav Left Side and Logo */}

        <div className="w-[3rem] h-[3rem] bg-cyan-100 rounded-full">
          <img src={logo} alt="logo-img" className="w-full h-full" />
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
              selectedMenu === "shop" &&
              "border-b-2 border-red-700  text-red-700"
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
              selectedMenu === "men" &&
              "border-b-2 border-red-700  text-red-700"
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
              selectedMenu === "kids" &&
              "border-b-2 border-red-700  text-red-700"
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
            className={`md:hidden flex flex-col  items-center justify-center space-y-1 z-50 ${
              toggleNav && "fixed top-[2.5rem] right-[2rem]"
            }`}
            animate={toggleNav ? "open" : "closed"}
          >
            <motion.span
              className={`h-[0.10rem] w-7 rounded-2xl bg-sky-900 relative ${
                toggleNav && "bg-white"
              }`}
              variants={{
                closed: { opacity: 1, rotate: "0deg" },
                open: { opacity: 1, rotate: "-45deg", y: 5 },
              }}
            >
              {" "}
              {getTotalCartItems() > 0 && !toggleNav && location.pathname !== "/cart" && (
                <div className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-red-500 z-50"></div>
              )}
            </motion.span>
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
          {/* login buttons */}
          <div
            className="overflow-hidden hidden md:flex  w-[3rem] h-[3rem]
                 items-center justify-center"
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
                duration: 0.5,
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
                  onClick={() => setSelectedMenu("login")}
                  className="cursor-pointer"
                >
                  <Link
                    to="/login"
                    className={`w-[2rem] h-[2rem] border-2 border-black rounded-full
                          flex items-center justify-center relative hover:border-white hover:text-white`}
                  >
                    <LuLogIn size={20} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* Cart and Count */}
          <div
            className="overflow-hidden w-[4rem] h-[4rem]
                hidden md:flex items-center justify-center"
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
                duration: 0.5,
              }}
              className=" "
            >
              <div className="flex items-center justify-center">
                <motion.div
                  whileHover={
                    selectedMenu === "cart" ? { scale: 1 } : { scale: 1.1 }
                  }
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
                    style={{
                      borderColor: selectedMenu === "cart" ? "white" : "black",
                      color: selectedMenu === "cart" ? "white" : "black",
                    }}
                    className={`w-[3rem] h-[3rem] border-2 border-white text-white rounded-full
                          flex items-center justify-center relative  ${
                            selectedMenu === "cart" && "scale-110"
                          }`}
                  >
                    <BsCart4 size={30} className="" />
                    <div
                      className={`bg-sky-950 flex items-center justify-center rounded-full
                        h-[1rem] w-[1rem] absolute top-0 right-0 z-10 font-mono text-white text-sm
                        outline-1 outline-dashed outline-white ${
                          selectedMenu === "cart" && ""
                        }`}
                    >
                      {getTotalCartItems()}
                    </div>
                    {/* red dot indicator */}
                    {getTotalCartItems() > 0 && location.pathname !== "/cart" && (
                      <div
                        className={`bg-red-500 flex items-center justify-center rounded-full
                        w-3 h-3 absolute top-0 left-0 z-10`}
                      ></div>
                    )}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* nav mobile */}
          <AnimatePresence>
            {toggleNav && (
              <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed z-40 right-0 top-0 h-screen w-[16rem] bg-gradient-to-b from-red-500 flex items-center
               justify-center flex-col overflow-hidden md:hidden backdrop-blur-md"
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
                        whileHover={
                          selectedMenu === "shop"
                            ? { scale: 1 }
                            : { scale: 1.1 }
                        }
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
                        selectedMenu === "shop" && "scale-125"
                      }`}
                        >
                          <p
                            style={{
                              borderColor:
                                selectedMenu === "shop" ? "black" : "white",
                              color:
                                selectedMenu === "shop" ? "black" : "white",
                            }}
                            className={`w-[8rem] h-[2rem] border-2 border-white flex items-center
                      justify-center rounded-full text-xl text-white 
                      ${selectedMenu === "shop" && ""}`}
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
                        whileHover={
                          selectedMenu === "men" ? { scale: 1 } : { scale: 1.1 }
                        }
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
                        selectedMenu === "men" && "scale-125"
                      }`}
                        >
                          <p
                            style={{
                              borderColor:
                                selectedMenu === "men" ? "black" : "white",
                              color: selectedMenu === "men" ? "black" : "white",
                            }}
                            className={`w-[8rem] h-[2rem] border-2 border-white flex items-center
                      justify-center rounded-full text-xl text-white 
                      ${selectedMenu === "men" && ""}`}
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
                        whileHover={
                          selectedMenu === "women"
                            ? { scale: 1 }
                            : { scale: 1.1 }
                        }
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
                        selectedMenu === "women" && "scale-125"
                      }`}
                        >
                          <p
                            style={{
                              borderColor:
                                selectedMenu === "women" ? "black" : "white",
                              color:
                                selectedMenu === "women" ? "black" : "white",
                            }}
                            className={`w-[8rem] h-[2rem] border-2 border-white flex items-center
                      justify-center rounded-full text-xl text-white 
                      ${selectedMenu === "women" && ""}`}
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
                        whileHover={
                          selectedMenu === "kids"
                            ? { scale: 1 }
                            : { scale: 1.1 }
                        }
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
                        selectedMenu === "kids" && "scale-125"
                      }`}
                        >
                          <p
                            style={{
                              borderColor:
                                selectedMenu === "kids" ? "black" : "white",
                              color:
                                selectedMenu === "kids" ? "black" : "white",
                            }}
                            className={`w-[8rem] h-[2rem] border-2 border-white flex items-center
                      justify-center rounded-full text-xl text-white 
                      ${selectedMenu === "kids" && ""}`}
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
                        delay: 0.5,
                      }}
                      className=" "
                    >
                      <div className="flex items-center justify-center">
                        <motion.div
                          whileHover={
                            selectedMenu === "cart"
                              ? { scale: 1 }
                              : { scale: 1.1 }
                          }
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
                            style={{
                              borderColor:
                                selectedMenu === "cart" ? "black" : "white",
                              color:
                                selectedMenu === "cart" ? "black" : "white",
                            }}
                            className={`w-[4.5rem] h-[4.5rem] border-2 border-white text-white rounded-full
                          flex items-center justify-center relative  ${
                            selectedMenu === "cart" && "scale-110"
                          }`}
                          >
                            <BsCart4 size={30} className="" />
                            <div
                              className={`bg-sky-950 flex items-center justify-center rounded-full
                        h-[1.5rem] w-[1.5rem] absolute top-0 right-0 z-10 font-mono text-white text-sm
                        outline-1 outline-dashed outline-white ${
                          selectedMenu === "cart" && ""
                        }`}
                            >
                              {getTotalCartItems()}
                            </div>
                                                {/* red dot indicator */}

                            {getTotalCartItems() > 0 && location.pathname !== "/cart" && (
                              <div
                                className={`bg-red-500 flex items-center justify-center rounded-full
                        w-3 h-3 absolute top-0 left-0 z-10`}
                              ></div>
                            )}
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
                        delay: 0.6,
                      }}
                    >
                      <div className="flex items-center justify-center">
                        <motion.div
                          whileHover={
                            selectedMenu === "login"
                              ? { scale: 1 }
                              : { scale: 1.1 }
                          }
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          className="cursor-pointer"
                        >
                          <Link
                            onClick={() => setSelectedMenu("login")}
                            to="/login"
                            style={{
                              color: selectedMenu === "login" && "black",
                              borderColor: selectedMenu === "login" && "black",
                            }}
                            className={`w-[3rem] h-[3rem] border-2 border-white rounded-full
                          flex items-center justify-center relative text-white ${
                            selectedMenu === "login" && "scale-110"
                          }`}
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
    </div>
  );
};

export default Navbar;
