import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const SignUp = () => {
  const vars = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-red-300 w-screen min-h-[80vh]">
      <motion.div
        className="flex flex-col px-2 py-10 border-black border-2 w-[80%] md:w-[45%] items-center justify-center 
      space-y-5 rounded-lg bg-gradient-to-b from-red-300"
      >
        <h1 className="text-lg">SignUp</h1>
        <form
          action=""
          className="flex items-center justify-center flex-col w-full space-y-5"
        >
          <motion.div
            variants={vars}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
            initial="initial"
            whileInView="whileInView"
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="flex items-center justify-center w-[90%]"
          >
            <input
              type="text"
              autoComplete="false"
              placeholder="please Enter Your Name"
              className="w-[90%] px-4 py-2 focus:outline-none
        rounded-lg border-2 border-black hover:shadow-black hover:shadow-md focus:shadow-black 
        focus:shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={vars}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
            initial="initial"
            whileInView="whileInView"
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="flex items-center justify-center w-[90%]"
          >
            <input
              type="email"
              autoComplete="false"
              placeholder="please Enter Your Email"
              className="w-[90%] px-4 py-2 focus:outline-none
        rounded-lg border-2 border-black hover:shadow-black hover:shadow-md focus:shadow-black 
        focus:shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={vars}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
            initial="initial"
            whileInView="whileInView"
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="flex items-center justify-center w-[90%]"
          >
            <input
              type="password"
              autoComplete="false"
              placeholder="please Enter Your Password"
              className="w-[90%] px-4 py-2 focus:outline-none
        rounded-lg border-2 border-black hover:shadow-black hover:shadow-md focus:shadow-black 
        focus:shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={vars}
            initial="initial"
            whileInView="whileInView"
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="w-[80%] "
          >
            <span>Already Have Account ? </span>
            <button className="transition ease-in-out duration-75 hover:scale-105">
              <Link to="/login" className="text-xl underline ">
                Log In
              </Link>
            </button>
          </motion.div>
          <motion.div
            variants={vars}
            initial="initial"
            whileInView="whileInView"
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="flex items-start justify-start p-2 text-sm w-[84%] space-x-2"
          >
            <input type="checkBox" className="size-6 cursor-pointer" />
            <span>
              By Continuing , I agree to the terms of use and privacy policy
            </span>
          </motion.div>
          <motion.div
            variants={vars}
            initial="initial"
            whileInView="whileInView"
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                damping: 17,
                stiffness: 400,
              }}
              className="p-2 text-xl bg-sky-700 rounded-full text-white"
            >
              Sign Up
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
