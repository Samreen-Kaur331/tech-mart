import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-2"
      />
      <h3 className="text-sm font-semibold">{product.title}</h3>
      <p className="font-bold mt-1">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}
