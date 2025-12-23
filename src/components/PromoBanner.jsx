import { Link } from "react-router-dom";
import camera from "../assets/images/camera.jpg";

const PromoBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="  flex flex-col md:flex-row items-center justify-between
        bg-gradient-to-r from-blue-600 to-indigo-600
        rounded-3xl p-8 md:p-12 overflow-hidden">
 
        <div className="space-y-4 max-w-lg">
          <span className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full">
            Limited Offer
          </span>

          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
            Up to <span className="text-yellow-300">50% OFF</span> on Electronics
          </h1>

          <p className="text-blue-100">
            Grab the best deals before they’re gone. Don’t miss this limited-time offer.
          </p>

          <Link
            to="/products"
            className="inline-block bg-white text-blue-700 font-semibold
              px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Shop Now →
          </Link>
        </div>
 
        <div className="mt-8 md:mt-0">
          <img
            src={camera}
            alt="Promo Product"
            className="w-[320px] md:w-[380px] drop-shadow-2xl rounded-lg transform md:translate-x-6"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
