import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpg";

const images = [image1,image2,image3,image4 ,image5];


function Slider() {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);


    return (
  <section className="flex flex-col sm:flex-row w-full h-[400px] sm:h-[500px] mt-4">
   
    <div className="w-full sm:w-1/2 flex flex-col justify-center items-start bg-white text-black px-8 sm:px-16">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-pink-500">TechMart</span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl mb-6 max-w-md"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Discover the latest electronics at unbeatable prices.  
        Quality you can trust, deals you can’t miss.
      </motion.p>

      <motion.button
        className="bg-pink-400 hover:bg-pink-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>



    <div className="relative w-full sm:w-1/2 h-[400px] sm:h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 w-full h-full ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  </section>
);
}
export default Slider;
   