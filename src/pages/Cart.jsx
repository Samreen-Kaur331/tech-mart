import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
  // if you added decreaseQuantity reducer, import it here
} from "../redux/slices/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
// Get cart state from Redux store
  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

// Handle empty cart
  if (!cartItems || cartItems.length === 0)
    return <p className="text-center mt-10">Your cart is empty 🛒</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between mb-4 border-b pb-4"
        >
   // Item details
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>

  // Quantity controls
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                  })
                )
              }
              className="px-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1,
                  })
                )
              }
              className="px-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

    //remove button
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
// Total and Clear Cart
      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mb-4">
          Items in cart: {totalQuantity}
        </p>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
