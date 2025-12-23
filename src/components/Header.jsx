import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../pages/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import user from "../assets/images/user.jpg";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const [show, setShow] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="flex justify-between max-w-7xl mx-auto items-center px-6 h-16">
        <a
          href="/" 
          className="text-3xl font-bold cursor-pointer hover:scale-105 duration-300"
        >
          Cartly
        </a>
        <nav className="space-x-8  items-center hidden md:block">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-500">
            Shop
          </Link>

          <Link to="/sell" className="hover:text-blue-500">
            Sell
          </Link>
          <Link to="/account" className="hover:text-blue-500">
            Your Account
          </Link>
          <Link to="/customer-service" className="hover:text-blue-500">
            Customer Service
          </Link>
        </nav>

        <div className="flex gap-2 md:space-x-5 items-center">
          <Link to="/search" className="text-2xl">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          <div className="relative">
            <Link to="/cart" className="text-3xl cursor-pointer">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <span className="bg-red-400 text-white text-sm rounded-full px-2 absolute -top-1 -right-3">
              {count > 0 && (
                <span className="absolute -top-0 right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {count}
                </span>
              )}
            </span>
          </div>

          <Link to="/account">
            <img
              src={user}
              alt=""
              className=" hover:scale-105 duration-300 hidden cursor-pointer md:flex rounded-full w-[50px] h-[50px] object-cover"
            />
          </Link>

          <button
            className="md:hidden text-2xl font-bold relative"
            onClick={() => setShow(!show)}
          >
            {" "}
            {show ? "✖" : "☰"}
          </button>

          {show && <MobileMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
