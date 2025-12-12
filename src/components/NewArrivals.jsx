import { Link } from "react-router-dom";
import heels from "../assets/images/heels.jpg";
import juice from "../assets/images/juice.jpg";
import mam from "../assets/images/mam.jpg";
import tablet from "../assets/images/tablet.jpg";

const newArrivals = [
  {
    name: "Heels",
    img: heels,
    price: 59.99,
    rate: 4.9,
  },
  {
    name: "Sprite",
    img: juice,
    price: 64.99,
    rate: 4.6,
  },
  {
    name: "MamaEarth",
    img: mam,
    price: 54.99,
    rate: 4.2,
  },
  {
    name: "Tablets",
    img: tablet,
    price: 34.99,
    rate: 4.8,
  },
];

const NewArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        New Arrivals
      </h2>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {newArrivals.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div
              className="bg-white border border-gray-200 rounded-xl p-4
             hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="font-semibold text-gray-900 mt-4">
                {product.title}
              </h3>

              <p className="text-lg font-bold text-blue-700 mt-1">
                ${product.price}
              </p>

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

export default NewArrivals;
