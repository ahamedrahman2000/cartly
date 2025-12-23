import { Link } from "react-router-dom"; 
import { bestSellerProducts } from "../data/bestSellerProducts";

const BestSellers = ({addToCart}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        Best Sellers
      </h2>

     <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {bestSellerProducts.map((product) => (
              <div key={product.id}
                className="bg-white border border-gray-200 rounded-xl p-4" >
                <Link to={`/product/${product.id}`}>
                  <div className="cursor-pointer">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-48 object-contain"
                    />
                    <h3 className="font-semibold mt-4">{product.title}</h3>
                    <p className="font-bold text-blue-700">${product.price}</p>
                  </div>
                </Link>
    
                <button  onClick={() => addToCart(product) }
                  className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg" >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
    </section>
  );
};

export default BestSellers;
