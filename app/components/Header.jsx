import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets"; // Ensure the correct path
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen 
        flex flex-col items-center justify-center gap-4 bg-black text-white px-4"
    >
      <motion.div 
        initial={{ scale: 0 }} 
        whileInView={{ scale: 1 }} 
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="w-full"
      >
        <Image src={assets.profile_img} alt="Profile Picture" className="rounded-full w-32 h-32 sm:w-38 sm:h-38 mx-auto" />
      </motion.div>
      <motion.h3
        initial={{ y: -30, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Mohamed ElBargui{" "}
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-4 sm:w-6" />
      </motion.h3>
      <motion.h1 
        initial={{ y: -30, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-4xl lg:text-[66px] font-Ovo"
      >
        Full stack developer{" "}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I'm a full stack developer based in Morocco. I specialize in building
        high-quality websites and applications.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center">
        <motion.a
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-6 sm:px-10 py-3 border
           border-white rounded-full bg-black text-white 
           flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="Arrow Icon" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/sample-resume.pdf" download
          className="px-6 sm:px-10 py-3 border rounded-full
           border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  ); 
};

export default Header;
