import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <section className="px-6 absolute md:hidden top-14 border-2 right-0 w-full bg-white rounded-lg    p-6">
      <div className="flex flex-col  overflow-hidden text-center space-y-6">
        
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
          <Link to="/account/profile" className="hover:text-blue-500">
            Profile
          </Link>
          <Link to="/customer-service" className="hover:text-blue-500">
            Customer Service
          </Link>
        
      </div>
    </section>
  );
};

export default MobileMenu;
