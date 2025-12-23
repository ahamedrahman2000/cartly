import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero2.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/2 -left-24 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
            🔥 Trending Products 2025
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Discover Your <br />
            <span className="text-blue-600">Perfect Product</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
            Shop the latest trends at unbeatable prices. Fast delivery, secure
            checkout, and premium quality — all in one place.
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Shop Now
            </Link>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Today’s Deals
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20" />

          <img
            src={heroImage}
            alt="Featured product"
            className="relative w-full max-w-md rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
