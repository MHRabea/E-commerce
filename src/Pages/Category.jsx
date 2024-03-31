import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from "../Components/Item/Item";
import { motion } from "framer-motion";

const Category = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="flex flex-col">
      {/* banner */}
      <div>{props.banner}</div>
      {/* products */}
      <div className="flex flex-col w-screen bg-gradient-to-b from-red-500 items-center justify-center">
        <div className="w-full flex flex-col p-5 items-center justify-center">
          <div className="w-full flex flex-col space-y-3 items-center justify-center py-[2rem]">
            <div className="flex items-center justify-center space-x-3 text-xl">
              <p>Showing </p>
              <p className="font-Madimi">1-12</p>
              <p>out of</p>
              <p className="font-Madimi">36</p>
              <p>Products</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scsale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-black 
            text-white rounded-full cursor-pointer"
            >
              <p>Sort by</p>
              <RiArrowDropDownLine size={20} />
            </motion.div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            {all_product.map((item, i) => {
              if (props.category === item.category) {
                return (
                  <Item
                    name={item.name}
                    number={item.number}
                    id={item.id}
                    key={i}
                    img={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scsale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <button
              className="flex items-center justify-center px-4 py-2 rounded-full 
            text-2xl bg-black text-white mt-10"
            >
              Explore More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Category;
