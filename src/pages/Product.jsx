// // src/pages/Products.jsx (simple test)
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../redux/slices/ProductSlice.js';

// export default function Products() {
//   const dispatch = useDispatch();
//   const { items, status } = useSelector(state => state.products);

//   useEffect(() => {
//     if (status === 'idle') dispatch(fetchProducts());
//   }, [dispatch, status]);

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Products (Redux) — Count: {items.length}</h2>
//       {status === 'loading' && <p>Loading...</p>}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {items.map(p => (
//           <div key={p.id} className="p-4 bg-white rounded shadow">
//             <img src={p.image} alt={p.title} className="h-40 object-contain mx-auto"/>
//             <h3 className="text-sm mt-2">{p.title}</h3>
//             <p className="font-semibold">${p.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// // This is a simple test component to verify Redux setup and product fetching.
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/ProductSlice";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;
  if (status === "failed") return <p className="text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
