import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";

const ProductDisplay = (props) => {
  const { all_product , addToCart} = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { product } = props;

  

  useEffect(() => {
    const filteredProducts = all_product.filter(
      (products) => products.category === product.category
    );
    setRelatedProducts(filteredProducts);
  }, [product, all_product]);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-4">
        {/* product images */}
        <div className="flex flex-col items-center justify-center space-y-10 w-[90%]">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="border-2 border-black rounded-2xl"
            />
          </div>
          <div className="flex flex- gap-1 items-center justify-center w-full">
            <motion.div whileHover={{ y: -15 }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-[5.0rem] border-2 border-black rounded-lg cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{ y: -15 }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-[5.0rem] border-2 border-black rounded-lg cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{ y: -15 }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-[5.0rem] border-2 border-black rounded-lg cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{ y: -15 }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-[5.0rem] border-2 border-black rounded-lg cursor-pointer"
              />
            </motion.div>
          </div>
        </div>
        {/* product details */}
        <div className="flex flex-col py-5 space-y-5 w-[90%]">
          {/* product name */}
          <div>
            <p>{product.name}</p>
          </div>
          {/* product rate and reviews */}
          <div className="flex items-center space-x-2 text-2xl">
            <div className="flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p>(128)</p>
          </div>
          {/* product price */}
          <div className="flex items-center space-x-10 font-bold text-3xl">
            <p className="text-gray-500 line-through">{product.old_price}</p>
            <p>{product.new_price}</p>
          </div>
          {/* product discreption */}
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            perspiciatis porro expedita deserunt, dolores veritatis quas,
            deleniti dicta cumque similique ipsam autem. Odio possimus
            exercitationem ad commodi corrupti quibusdam optio.
          </div>
          {/* select size */}
          <div className="flex flex-col space-y-3">
            <h1 className="text-xl underline">Select size</h1>
            <div className="flex items-center space-x-3">
              <p
                onClick={() => setSelectedSize("s")}
                style={{
                  backgroundColor: selectedSize === "s" && "red",
                  color: selectedSize === "s" && "white",
                }}
                className="p-2 rounded-lg text-xl border-2 border-black flex items-center 
            justify-center w-[3rem] h-[3rem] transition duration-75 ease-in-out hover:scale-110 hover:bg-red-500
            cursor-pointer hover:text-white "
              >
                S
              </p>
              <p
                onClick={() => setSelectedSize("m")}
                style={{
                  backgroundColor: selectedSize === "m" && "red",
                  color: selectedSize === "m" && "white",
                }}
                className="p-2 rounded-lg text-xl border-2 border-black flex items-center 
            justify-center w-[3rem] h-[3rem] transition duration-75 ease-in-out hover:scale-110 hover:bg-red-500
            cursor-pointer hover:text-white "
              >
                M
              </p>
              <p
                onClick={() => setSelectedSize("l")}
                style={{
                  backgroundColor: selectedSize === "l" && "red",
                  color: selectedSize === "l" && "white",
                }}
                className="p-2 rounded-lg text-xl border-2 border-black flex items-center 
            justify-center w-[3rem] h-[3rem] transition duration-75 ease-in-out hover:scale-110 hover:bg-red-500
            cursor-pointer hover:text-white "
              >
                L
              </p>
              <p
                onClick={() => setSelectedSize("xl")}
                style={{
                  backgroundColor: selectedSize === "xl" && "red",
                  color: selectedSize === "xl" && "white",
                }}
                className="p-2 rounded-lg text-xl border-2 border-black flex items-center 
            justify-center w-[3rem] h-[3rem] transition duration-75 ease-in-out hover:scale-110 hover:bg-red-500
            cursor-pointer hover:text-white "
              >
                XL
              </p>
              <p
                onClick={() => setSelectedSize("xxl")}
                style={{
                  backgroundColor: selectedSize === "xxl" && "red",
                  color: selectedSize === "xxl" && "white",
                }}
                className="p-2 rounded-lg text-xl border-2 border-black flex items-center 
            justify-center w-[3rem] h-[3rem] transition duration-75 ease-in-out hover:scale-110 hover:bg-red-500
            cursor-pointer hover:text-white "
              >
                XXL
              </p>
              <p
                onClick={() => setSelectedSize("xxxl")}
                style={{
                  backgroundColor: selectedSize === "xxxl" && "red",
                  color: selectedSize === "xxxl" && "white",
                }}
                className="p-2 rounded-lg text-l border-2 border-black flex items-center 
            justify-center w-[3rem] h-[3rem] transition duration-75 ease-in-out hover:scale-110 hover:bg-red-500
            cursor-pointer hover:text-white "
              >
                XXXL
              </p>
            </div>
          </div>
          {/* add to cart button */}
          <div>
            <button
              className="flex items-center space-x-2 border-black border-2 px-4 py-2 text-xl 
          rounded-lg hover:bg-red-500 hover:text-white"
          onClick={()=> {addToCart(product.id)}}
            >
              <p>Add To Cart</p>
              <FaCartArrowDown size={25} />
            </button>
          </div>
          {/* tags and categories */}
          <div>
            <div className="flex items-start space-x-2">
              <span className="font-bold">Category:</span>
              <p>{product.category}, shirt , top</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-bold">Tags:</span>
              <p>{product.category}, shirt , top , modern , latest</p>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products */}
      <div className="flex flex-col space-y-3 items-center">
        <div>
          <p className="border-b-2 border-sky-700 p-2 text-2xl">Related Products</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          {relatedProducts &&
            relatedProducts.map((item, i) => {
              if (product.id !== item.id) {
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
      </div>
    </div>
  );
};

export default ProductDisplay;
