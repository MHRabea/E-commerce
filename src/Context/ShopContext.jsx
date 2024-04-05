import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            console.log(updatedCart); // Log the updated cart
            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
            console.log(updatedCart); // Log the updated cart
            return updatedCart;
        });
    };


    const contextValue = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    );

};

export default ShopContextProvider;