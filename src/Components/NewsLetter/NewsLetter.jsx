import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation , AnimatePresence } from "framer-motion";

const NewsLetter = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation()

  useEffect(() => {
    if(inView) {
        controls.start("visible")
    }
  },[inView , controls])
  return (
    <AnimatePresence>

    <div
      className="flex flex-col items-center justify-center w-screen  
    bg-gradient-to-b from-cyan-500 h-[40rem] space-y-10 text-center"
    >
    <div className="flex flex-col items-center justify-center max-w-[80rem] space-y-10">

      <motion.div 
      variants={{
        hidden:{opacity : 0 , y : 75},
        visible : {opacity : 1 , y : 0},
        whileInView : {opacity : 1 , y : 0},
      }}
      initial ="hidden"
      animate={controls}
      whileInView="whileInView"
      transition={{
        duration : 0.5,
        delay:0.1
      }}
       ref={ref}>
        <h1 className="text-3xl font-semibold">
          Get Exclusive Offers On Your Email
        </h1>
      </motion.div>
      <motion.div 
      variants={{
        hidden:{opacity : 0 , y : 75},
        visible : {opacity : 1 , y : 0},
        whileInView : {opacity : 1 , y : 0},
      }}
      initial ="hidden"
      animate={controls}
      whileInView="whileInView"
      transition={{
        duration : 0.5,
        delay:0.15
      }}
       ref={ref}>
        <h2 className="text-xl font-medium">
          Subscribe To Our NewsLetter And Stay Updated
        </h2>
      </motion.div>
      <motion.div 
      variants={{
        hidden:{opacity : 0 , y : 75},
        visible : {opacity : 1 , y : 0},
        whileInView : {opacity : 1 , y : 0},
      }}
      initial ="hidden"
      animate={controls}
      whileInView="whileInView"
      transition={{
        duration : 0.5,
        delay:0.2
      }}
       ref={ref} className="relative flex items-center justify-center ">
        <input
          type="email"
          name="your_email_id"
          id=""
          className="w-[25rem] rounded-full p-2 focus:outline-none"
          autoComplete="false"
          placeholder="Please Enter Your Email"
        />
        <button className="absolute right-0 p-2 bg-black text-white rounded-full h-full">
          Subscribe
        </button>
      </motion.div>
    </div>
    </div>
    </AnimatePresence>
  );
};

export default NewsLetter;
