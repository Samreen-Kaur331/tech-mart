import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";

import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
