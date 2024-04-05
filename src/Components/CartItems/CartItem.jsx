import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FaTrash } from "react-icons/fa";

const CartItem = () => {
  const { all_product, removeFromCart, cartItems , getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className="flex flex-col  w-screen items-center justify-center bg-gradient-to-b from-sky-300 p-10">
      {/* cart items */}
      <div className="flex flex-wrap w-full items-center justify-center gap-5">
        {all_product.map((item ,i) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={i} className="flex flex-col items-center justify-center">
                {/* item image */}
                <div className="w-full">
                  <img src={item.image} alt={item.name} className="w-full" />
                </div>
                {/* item price and details */}
                <div className="flex flex-col w-full">
                  <p>{item.name}</p>
                  <div className="flex space-x-5 justify-between">
                    <div>
                      <p>${item.new_price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <p>Quantity :</p>
                      <p>{cartItems[item.id]}</p>
                    </div>
                    <div className="flex space-x-3">
                      <p>Total Price :</p>
                      <p>${item.new_price * cartItems[item.id]}</p>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => removeFromCart(item.id)}>
                      <FaTrash />
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
      {/* cart totals */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center py-5">
        {/* cart totals left  */}
        <div className="w-full">
          <div className="w-full flex items-center justify-center">
            <p>Cart Total</p>
          </div>
          <div className="flex w-full items-center  justify-between">
            <p>SubTotal :</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="flex w-full items-center  justify-between">
            <p>Shipping Fee :</p>
            <p>Free</p>
          </div>
          <div className="flex w-full items-center  justify-between">
            <p>Total :</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div>
            <button className="p-2 flx items-center justify-center bg-red-500 rounded-lg text-white w-full">
                Proceed To CheckOut
            </button>
          </div>
        </div>
        {/* promo Code input */}
        <div className="flex flex-col items-center md:items-end justify-center w-full h-full py-5 space-y-5">
          <p>If You Have a Promo Code pls Enter it below </p>
          <div className="flex items-center md:items-center justify-center md:justify-end w-full">
            <input type="text" autoComplete="flase" className="focus:outline-none border-2 p-2 border-black rounded-l-lg"/>
            <button className="bg-black border-2 border-black text-white p-2 flex items-center justify-center rounded-r-lg">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
