import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/ProductSlice";
import { addToCart } from "../redux/slices/CartSlice";
import { motion } from "framer-motion";
import Slider from "../components/Slider.jsx";
import Banner from "../components/Banner.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  // 🔹 Fetch all products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // 🔹 Show loading or error states
  if (status === "loading")
    return <p className="text-center mt-10 text-lg">Loading products...</p>;
  if (status === "failed")
    return <p className="text-center text-pink-500 mt-10">{error}</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🟡 Top Hero Section */}
  
      <Slider />
    <Banner />
      {/* 🛍️ Product Listing */}
      <section className="p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((product) => (
            <motion.div
              key={product.id}
              className="border p-4 rounded-xl shadow hover:shadow-lg transition bg-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto mb-4 object-contain"
              />
              <h3 className="font-semibold text-sm mb-2 text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-700 font-bold mb-3">
                ${product.price}
              </p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="mt-auto w-full bg-pink-400 text-white py-2 rounded-sm hover:bg-pink-500 transition"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
