import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const CartItem = () => {
  const {
    all_product,
    removeFromCart,
    cartItems,
    getTotalCartAmount,
    getTotalCartItems,
  } = useContext(ShopContext);

  const vars = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-col  w-screen items-center justify-center bg-gradient-to-b from-red-300 p-10 space-y-10">
      {/* cart items */}
      <div className="flex flex-wrap w-full items-center justify-center gap-5">
        {all_product.map((item, i) => {
          if (cartItems[item.id] > 0) {
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-slate-200  w-[10rem] border-b-2  border-black p-2 rounded-lg"
              >
                {/* item image */}
                <motion.div
                  variants={vars}
                  initial="initial"
                  whileInView="whileInView"
                  transition={{
                    duration: 0.5,
                  }}
                  className="w-full py-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full rounded-lg"
                  />
                </motion.div>
                {/* item price and details */}
                <div className="flex flex-col w-full space-y-4">
                  <motion.p
                    variants={vars}
                    initial="initial"
                    whileInView="whileInView"
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    className="text-sm"
                  >
                    {item.name}
                  </motion.p>
                  <div className="w-full flex flex-col space-y-5">
                    <motion.div
                      variants={vars}
                      initial="initial"
                      whileInView="whileInView"
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      className="flex w-full items-center  justify-between border-b-2 border-black"
                    >
                      <p className="font-bold">Price :</p>
                      <p>${item.new_price}</p>
                    </motion.div>
                    <motion.div
                      variants={vars}
                      initial="initial"
                      whileInView="whileInView"
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                      }}
                      className="flex w-full items-center  justify-between border-b-2 border-black"
                    >
                      <p className="font-bold">Quantity :</p>
                      <p>{cartItems[item.id]}</p>
                    </motion.div>
                    <motion.div
                      variants={vars}
                      initial="initial"
                      whileInView="whileInView"
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                      }}
                      className="flex w-full items-center  justify-between border-b-2 border-black"
                    >
                      <p className="font-bold">Total :</p>
                      <p>${cartItems[item.id] * item.new_price}</p>
                    </motion.div>
                  </div>
                  <div>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: 0.1,
                          delay: 0,
                        },
                      }}
                      whileTap={{
                        scale: 0.9,
                        transition: {
                          duration: 0.1,
                          delay: 0,
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                        duration: 0.5,
                        delay: 0.1,
                      }}
                      variants={vars}
                      initial="initial"
                      whileInView="whileInView"
                      onClick={() => removeFromCart(item.id)}
                      className="w-full flex items-center justify-center p-2 text-white bg-red-500 rounded-lg space-x-3"
                    >
                      <p>Remove</p> <FaTrash />
                    </motion.button>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      {getTotalCartItems() > 0 ? (
        /* cart totals */
        <div className="flex flex-col md:flex-row md:space-x-8 w-full items-center justify-center py-5 space-y-5 md:space-y-0">
          {/* cart totals left  */}
          <div className="w-full flex flex-col space-y-5">
            <motion.div
              variants={vars}
              initial="initial"
              whileInView="whileInView"
              transition={{
                duration: 0.5,
              }}
              className="w-full flex items-center justify-center"
            >
              <p className="bg-black p-2 rounded-lg text-white border-b-2 border-red-500">
                Cart Totals
              </p>
            </motion.div>
            <motion.div
              variants={vars}
              initial="initial"
              whileInView="whileInView"
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="flex w-full items-center  justify-between border-b-2 border-black"
            >
              <p className="font-bold">SubTotal :</p>
              <p>${getTotalCartAmount()}</p>
            </motion.div>
            <motion.div
              variants={vars}
              initial="initial"
              whileInView="whileInView"
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="flex w-full items-center  justify-between border-b-2 border-black"
            >
              <p className="font-bold">Shipping Fee :</p>
              <p>Free</p>
            </motion.div>
            <motion.div
              variants={vars}
              initial="initial"
              whileInView="whileInView"
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="flex w-full items-center  justify-between border-b-2 border-black"
            >
              <p className="font-bold">Total :</p>
              <p>${getTotalCartAmount()}</p>
            </motion.div>
            <div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.1,
                    delay: 0,
                  },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: {
                    duration: 0.1,
                    delay: 0,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  duration: 0.5,
                  delay: 0.1,
                }}
                variants={vars}
                initial="initial"
                whileInView="whileInView"
                className="p-2 flx items-center justify-center bg-black rounded-lg text-white w-full"
              >
                Proceed To CheckOut
              </motion.button>
            </div>
          </div>
          {/* promo Code input */}
          <div className="flex flex-col items-center  justify-center w-full py-5  space-y-5 ">
            <p>If You Have a Promo Code pls Enter it below </p>
            <div className="flex items-center md:items-center justify-center  w-full">
              <input
                type="text"
                autoComplete="flase"
                className="focus:outline-none border-2 p-2 border-black rounded-l-lg"
              />
              <button className="bg-black border-2 border-black text-white p-2 flex items-center justify-center rounded-r-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen">
          <p>There is Nothing in your cart</p>
        </div>
      )}
    </div>
  );
};

export default CartItem;
