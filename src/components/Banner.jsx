import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Truck } from "lucide-react";

const Banner = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left bg-gradient-to-b from-white to-pink-100">
    

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 md:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-xl w-[200px]">
          <Zap className="text-pink-500 w-8 h-8 mb-2" />
          <h4 className="font-semibold">Latest Tech</h4>
          <p className="text-gray-500 text-sm text-center">Always up-to-date gadgets</p>
        </div>

        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-xl w-[200px]">
          <ShieldCheck className="text-pink-500 w-8 h-8 mb-2" />
          <h4 className="font-semibold">Secure Shopping</h4>
          <p className="text-gray-500 text-sm">100% genuine products</p>
        </div>

        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-xl w-[200px]">
          <Truck className="text-pink-500 w-8 h-8 mb-2" />
          <h4 className="font-semibold">Fast Delivery</h4>
          <p className="text-gray-500 text-sm text-center">Get your order in 2–4 days</p>
        </div>
      </motion.div>

      
      <motion.div
        className="space-y-4 md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-900">
          Upgrade Your Tech with <span className="text-pink-500">TechMart</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Get the latest gadgets, smart devices, and accessories — all in one
          place. Enjoy exclusive deals and fast delivery!
        </p>
        <button className="bg-pink-400 hover:bg-pink-600 text-black font-semibold px-6 py-3  rounded-full transition">
          Explore Now
        </button>
      </motion.div>

      
    </section>
  );
};

export default Banner;
