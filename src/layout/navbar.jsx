import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { shopContext } from "../context/shopContext";

export const Navbar = () => {

  const { cartItems } = useContext(shopContext);

  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="relative flex justify-between md:block">
        <div className="flex justify-between items-center">
    
          <Link to="/" className="text-2xl font-bold">TechPhone Store</Link>

          
          <div className="text-xl hidden ml-auto md:flex space-x-40">
            <Link to="/shop" className="hover:text-gray-300 transition duration-300">Shop</Link>
            <Link to="/about" className="hover:text-gray-300 transition duration-300">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
            <Link to="/cart" className="hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-red-600 text-white text-xs rounded-full">
                  {itemCount}
                </span>
                  )}
                </Link>
              </div>
            </div>

        

        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-4 p-4">
          <Link to="/shop" className="hover:text-gray-300 transition duration-300">Shop</Link>
          <Link to="/about" className="hover:text-gray-300 transition duration-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
          <Link to="/cart" className="hover:text-gray-300 transition duration-300">
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-red-600 text-white text-xs rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
