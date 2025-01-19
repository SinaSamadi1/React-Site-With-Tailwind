// src/layout/Footer.js
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 mt-12">
        <div className="md:grid grid-cols-3">
          
          <div className="mb-6 leading-10 px-8 md:pl-16">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gray-300 transition duration-300">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300 transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          
          <div className="mb-6 leading-10 px-8 md:px-0">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Contact Us</h3>
            <ul>
              <li>Email: support@techphonestore.com</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Address: 123 Tech Street, City, Country</li>
            </ul>
          </div>

        
          <div className="leading-10 px-8 md:px-0">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 md:m-auto">
              <Link to="#" className="hover:text-gray-300 transition duration-300">
                <i className="fab fa-facebook-f text-2xl"></i>
              </Link>
              <Link to="#" className="hover:text-gray-300 transition duration-300">
                <i className="fab fa-twitter text-2xl"></i>
              </Link>
              <Link to="#" className="hover:text-gray-300 transition duration-300">
                <i className="fab fa-instagram text-2xl"></i>
              </Link>
              <Link to="#" className="hover:text-gray-300 transition duration-300">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </Link>
            </div>
        </div>
      </div>
      <div className="text-center mt-8">
          <p className="text-sm">© 2025 TechPhone Store. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
