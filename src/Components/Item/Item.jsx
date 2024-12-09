import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Item = (props) => {
  const handleItemClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center w-[20rem] font-Madimi"
    >
      <motion.div
       initial={{opacitu:0}}
       animate={{opacity:1}}
        transition={{
          duration: 0.3,
        }}
        className="flex flex-col items-center justify-center w-[20rem] space-y-3 "
      >
        <Link to={`/product/${props.id}`}>
          <img
            onClick={handleItemClick}

            src={props.img}
            alt="popular-product-img"
            className="rounded-xl border-2 border-black"
          />
        </Link>
        <div className="w-full">
          <p>{props.name}</p>
        </div>
        <div className="flex w-full gap-5 text-xl">
          <p>${props.new_price}</p>
          <p className="text-gray-500 line-through">${props.old_price}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Item;
