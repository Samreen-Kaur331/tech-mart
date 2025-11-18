import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/CartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    if (qty >= 1) dispatch(updateQuantity({ id: item.id, quantity: qty }));
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow mb-4">
      <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
      <div className="flex-1 mx-4">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-700">${item.price}</p>
      </div>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
        className="w-16 text-center border rounded"
      />
      <button
        onClick={handleRemove}
        className="ml-4 bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition"
      >
        Remove
      </button>
    </div>
  );
}
