import { Link } from "react-router-dom";
import{motion} from 'framer-motion'
import { FaShoppingCart} from "react-icons/fa";
// import { useAuth0 } from "@auth0/auth0-react";
export default function Navbar() {
  
  // const { loginWithRedirect,isAuthenticated ,logout } = useAuth0();
  return (
   
  <nav className="py-0.5 flex justify-between items-center bg-gradient-to-l from-pink-400 to-white-1000 border-b-1 border-pink-300 shadow-md">
     <motion.h1
       className="px-1 py-1 flex   container mx-auto flexjustify-between items-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
    
      <div className="container mx-auto flex justify-between items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKloVvREaT59Iw6pOoo-cz5qG6AxoGX5ND0A&s" alt="TechMart Logo" className="w-auto h-22" />
       
        <ul className="flex space-x-8 justify-between items-center ">
           
          <li><Link to="/" className="text-gray-800 font-medium font-sans  hover:text-pink-500 ">Home</Link></li>
         
          <li><Link to="/Product" className="hover:text-pink-400 font-medium">Product</Link></li>
          <li><Link to="/contact" className="hover:text-pink-400 font-medium">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-pink-400 font-medium"><FaShoppingCart size={18}/></Link></li>

            {/* { isAuthenticated ?( <li><Link>  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></Link></li>):(
                   <li><Link ><button onClick={() => loginWithRedirect()}>Log In</button></Link></li>
                 )
         } 
          
         */}
        </ul>
      </div> </motion.h1>
    </nav>
  );
}
   