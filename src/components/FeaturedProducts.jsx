import heels from "../assets/images/heels.jpg";
import juice from "../assets/images/juice.jpg";
import mam from "../assets/images/mam.jpg";
import tablet from "../assets/images/tablet.jpg";

import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    title: "Noise Cancelling Headphones",
    price: 129.99,
    image: "https://picsum.photos/300/300",
  },
  {
    id: 2,
    title: "Smart Watch Series 7",
    price: 199.99,
    image: "https://picsum.photos/300/300",
  },
  {
    id: 3,
    title: "Portable Bluetooth Speaker",
    price: 89.99,
    image: "https://picsum.photos/300/300",
  },
  {
    id: 4,
    title: "Gaming Mouse RGB",
    price: 49.99,
    image: "https://picsum.photos/300/300",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        Featured Products
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="bg-white cursor-pointer border border-gray-200 rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="font-semibold text-gray-900 mt-4">{product.title}</h3>
              <p className="text-lg font-bold text-blue-700 mt-1">${product.price}</p>

              <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
