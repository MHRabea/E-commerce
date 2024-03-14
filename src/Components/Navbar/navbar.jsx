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
          className={`md:hidden flex flex-col items-center justify-center space-y-1 z-50 ${toggleNav && 'sticky top-2'}`}
          animate={toggleNav ? "open" : "closed"}
        >
          <motion.span
            className="h-[0.10rem] w-7 rounded-2xl bg-sky-900"
            variants={{
              closed: { opacity: 1, rotate: "0deg" },
              open: { opacity: 1, rotate: "-45deg", y: 5 },
            }}
          ></motion.span>
          <motion.span
            className="h-[0.10rem] w-7 rounded-2xl bg-sky-900"
            variants={{
              closed: { opacity: 1, rotate: "0deg", y: 0 },
              open: { opacity: 1, rotate: "45deg", y: 0 },
            }}
          ></motion.span>
          <motion.span
            className="h-[0.10rem] w-7 rounded-2xl bg-sky-900"
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
              variants={{
                initial: { opacity: 1, width: 0 },
                animate: { opacity: 1, width: "16rem" },
                exit: { opacity: 1, width: 0 },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed z-40 right-0 top-0 h-screen w-[16rem] bg-white"
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
                <Link
                  to="/men"
                  className="w-full inline-block h-full p-[0.7rem]"
                >
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
                <Link
                  to="/women"
                  className="w-full inline-block h-full p-[0.7rem]"
                >
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
                <Link
                  to="/kids"
                  className="w-full inline-block h-full p-[0.7rem]"
                >
                  Kids
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
