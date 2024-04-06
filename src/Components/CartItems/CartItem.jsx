import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FaTrash } from "react-icons/fa";

const CartItem = () => {
  const {
    all_product,
    removeFromCart,
    cartItems,
    getTotalCartAmount,
    getTotalCartItems,
  } = useContext(ShopContext);
  return (
    <div className="flex flex-col  w-screen items-center justify-center bg-gradient-to-b from-red-300 p-10 space-y-10">
      {/* cart items */}
      <div className="flex flex-wrap w-full items-center justify-center gap-5">
        {all_product.map((item, i) => {
          if (cartItems[item.id] > 0) {
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center  w-[8rem] border-x-2 border-black px-2 rounded-lg"
              >
                {/* item image */}
                <div className="w-full py-2">
                  <img src={item.image} alt={item.name} className="w-full rounded-lg" />
                </div>
                {/* item price and details */}
                <div className="flex flex-col w-full space-y-4">
                  <p className="text-sm font-bold">{item.name}</p>
                  <div className="w-full flex flex-col space-y-5">
                    <div className="flex w-full items-center  justify-between border-b-2 border-black">
                      <p className="font-bold">Price :</p>
                      <p>${item.new_price}</p>
                    </div>
                    <div className="flex w-full items-center  justify-between border-b-2 border-black">
                      <p className="font-bold">Quantity :</p>
                      <p>{cartItems[item.id]}</p>
                    </div>
                    <div className="flex w-full items-center  justify-between border-b-2 border-black">
                      <p className="font-bold">Total :</p>
                      <p>${cartItems[item.id] * item.new_price}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-full flex items-center justify-center p-2 text-white bg-red-500 rounded-lg space-x-3"
                    >
                     <p>Remove</p> <FaTrash />
                    </button>
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
        <div className="flex flex-col md:flex-row w-full items-center justify-center py-5 space-y-5 md:space-y-0">
          {/* cart totals left  */}
          <div className="w-full flex flex-col space-y-5">
            <div className="w-full flex items-center justify-center">
              <p className="bg-black p-2 rounded-lg text-white border-b-2 border-red-500">
                Cart Totals
              </p>
            </div>
            <div className="flex w-full items-center  justify-between border-b-2 border-black">
              <p className="font-bold">SubTotal :</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="flex w-full items-center  justify-between border-b-2 border-black">
              <p className="font-bold">Shipping Fee :</p>
              <p>Free</p>
            </div>
            <div className="flex w-full items-center  justify-between border-b-2 border-black">
              <p className="font-bold">Total :</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div>
              <button className="p-2 flx items-center justify-center bg-black rounded-lg text-white w-full">
                Proceed To CheckOut
              </button>
            </div>
          </div>
          {/* promo Code input */}
          <div className="flex flex-col items-center md:items-end justify-center w-full h-full py-5 space-y-5">
            <p>If You Have a Promo Code pls Enter it below </p>
            <div className="flex items-center md:items-center justify-center md:justify-end w-full">
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
