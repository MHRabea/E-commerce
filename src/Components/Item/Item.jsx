import {motion} from "framer-motion";
const Item = (props) => {
  return (
    <motion.div 
    whileHover={{scale: 1.05}}
    className="flex flex-col items-center justify-center w-[20rem] font-Madimi"
    >

    <motion.div
    variants={{
        initial : {scale : 0.7},
        animate : {scale : 1},
    }}
    initial="initial"
    whileInView="animate"
    transition={{
        duration: 0.3,
        delay: 0.1 * props.id,
        stiffness: 400,
        damping: 17,
        type: "spring",
    }}
     className="flex flex-col items-center justify-center w-[20rem] ">
      <img src={props.img} alt="popular-product-img" />
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