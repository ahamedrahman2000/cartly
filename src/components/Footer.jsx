import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
          <div className="text-white">
            <Link to="/" className="text-3xl font-extrabold hover:scale-105">Cartly</Link>
            <p className="text-gray-400 mt-3">
              Your favorite online destination for the best products, deals, and
              experiences.
            </p>
          </div>

          <nav className="text-gray-400 flex flex-col space-y-2">
            <h1 className="mb-3 text-white font-semibold">Quick Links</h1>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-500">
              Shop
            </Link>
            <Link to="/buy-again" className="hover:text-blue-500">
              Buy Again
            </Link>
            <Link to="/sell" className="hover:text-blue-500">
              Sell
            </Link>
            <Link to="/account" className="hover:text-blue-500">
              Your Account
            </Link>
          </nav>

          <nav className="text-gray-400 flex flex-col space-y-2">
            <h1 className="mb-3 text-white font-semibold">Support</h1>
            <Link to="/help" className="hover:text-blue-500">
              Help Center
            </Link>
            <Link to="/returns" className="hover:text-blue-500">
              Returns
            </Link>
            <Link to="/privacy-policy" className="hover:text-blue-500">
              Privacy Policy
            </Link>
            <Link to="/terms-condition" className="hover:text-blue-500">
              Terms & Conditions
            </Link>
            <Link to="/customer-service" className="hover:text-blue-500">
              Customer Service
            </Link>
          </nav>

          <Newsletter />
        </div>
      </div>
      <div className="text-white text-center border-t mt-10 pt-6 border-gray-500">
        © {new Date().getFullYear()} Cartly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
