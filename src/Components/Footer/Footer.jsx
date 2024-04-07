import logo from "../Assets/cart logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("");
    }
  }, [controls, inView]);
  return (
    <div className="w-screen bg-red-500 p-10 flex items-center justify-center flex-col md:flex-row ">
      <div
        className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full
      max-w-[80rem] space-y-10 md:space-y-0 md:space-x-10"
      >
        {/* Logo & name */}
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
            whileInView: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          whileInView="whileInView"
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="flex flex-col items-center justify-center space-y-2 "
        >
          <div className="w-[6rem] h-[6rem] flex items-center justify-center rounded-full bg-cyan-100">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
        </motion.div>
        {/* Sections */}
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
            whileInView: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          whileInView="whileInView"
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="flex flex-col items-center justify-center space-y-5"
        >
          <div
            className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 text-lg 
        text-cyan-50 underline "
          >
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                whileInView: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              whileInView="whileInView"
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
            >
              Company
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                whileInView: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              whileInView="whileInView"
              transition={{
                duration: 0.5,
                delay: 0.11,
              }}
            >
              Products
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                whileInView: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              whileInView="whileInView"
              transition={{
                duration: 0.5,
                delay: 0.12,
              }}
            >
              About Us
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                whileInView: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              whileInView="whileInView"
              transition={{
                duration: 0.5,
                delay: 0.13,
              }}
            >
              Privacy & Policies
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                whileInView: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              whileInView="whileInView"
              transition={{
                duration: 0.5,
                delay: 0.14,
              }}
            >
              Locations
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                whileInView: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              whileInView="whileInView"
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
            >
              Contact Us
            </motion.div>
          </div>
          <div>
            <h2 className="border-b-2">
              &copy; E-Commerce . All Rights Reserved
            </h2>
          </div>
        </motion.div>
        {/* Social Icons */}
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
            whileInView: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          whileInView="whileInView"
          transition={{
            duration: 0.5,
            delay: 0.16,
          }}
          className="flex flex-col items-center justify-center  space-y-8"
        >
          <div className="flex items-center justify-center space-x-4">
            <FaInstagram size={30} className="text-cyan-50" />
            <FaWhatsapp size={30} className="text-cyan-50" />
            <FaPinterest size={30} className="text-cyan-50" />
            <FaFacebookMessenger size={30} className="text-cyan-50" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
