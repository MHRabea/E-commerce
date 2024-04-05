import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FaTrash } from "react-icons/fa";

const CartItem = () => {
  const { all_product, removeFromCart, cartItems } = useContext(ShopContext);
  return (
    <div className="flex flex-col  w-screen items-center justify-center bg-gradient-to-b from-sky-300 p-10">
      <div className="flex flex-wrap w-full items-center justify-center">
        {all_product.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div className="flex flex-col items-center justify-center">
                <div className="w-full">
                  <img src={item.image} alt={item.name} className="w-full" />
                </div>
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
                      <p>{item.new_price * cartItems[item.id]}</p>
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
    </div>
  );
};

export default CartItem;
