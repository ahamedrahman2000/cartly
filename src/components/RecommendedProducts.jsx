import { Link } from "react-router-dom";
import heels from "../assets/images/heels.jpg";
import juice from "../assets/images/juice.jpg";
import mam from "../assets/images/mam.jpg";
import tablet from "../assets/images/tablet.jpg";

const categories = [
  {
    id:1,
    name: "Heels",
    img: heels, 
  },
  {
    id:2,
    name: "Sprite",
    img: juice, 
  },
  {
    id:3,
    name: "MamaEarth",
    img: mam, 
  },
  {
    id:4,
    name: "Tablets",
    img: tablet, 
  },
];

const RecommendedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        Recommended Products
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((products) => (
          <Link key={products.id} to={`/product/${products.id}`}>
           <div className="shadow rounded-2xl hover:shadow-lg hover:-translate-y-1
            transition cursor-pointer p-4" >
            <img src={products.img} className=" w-full h-[200px] " />
            <p className="font-semibold">{products.name}</p> 
            <button className="mt-3 text-white bg-blue-600 w-full py-1 rounded-md">
              Add to Cart
            </button>
          </div>
          </Link>
         
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
