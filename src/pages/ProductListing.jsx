import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

const ProductListing = ({ addToCart }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== value));
    }
  };
  const displayProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category)
        );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[250px_1fr] grid-cols-1 gap-10">
        <div className="md:max-w-[250px]  border rounded-lg p-5 h-[550px]">
          <h1 className="font-semibold text-xl ">Filters</h1>

          <div className="flex flex-col space-y-2 mt-6">
            <p className="font-semibold">Category</p>
            <label>
              <input
                type="checkbox"
                value="Electronics"
                onChange={handleCheck}
              />{" "}
              Electronics
            </label>
            <label>
              <input type="checkbox" value="Fashion" onChange={handleCheck} />{" "}
              Fashion
            </label>
            <label>
              <input
                type="checkbox"
                value="Accessories"
                onChange={handleCheck}
              />{" "}
              Accessories
            </label>
            <label>
              <input type="checkbox" value="Footwear" onChange={handleCheck} />{" "}
              Footwear
            </label>
          </div>

          <div className="flex flex-col space-y-2 mt-6">
            <h1 className="font-semibold">Price Range</h1>
            <input type="range" />
            <p>$0 - $200</p>
          </div>

          <div className="flex flex-col space-y-2 mt-6">
            <h1 className="font-semibold">Rating</h1>
            <label>
              <input type="checkbox" /> ★★★★
            </label>
            <label>
              <input type="checkbox" /> ★★★
            </label>
            <label>
              <input type="checkbox" /> ★★
            </label>
            <label>
              <input type="checkbox" /> ★
            </label>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold ">All Products</h1>
            <select className="rounded-lg p-2 font-semibold">
              <option value="">Sort by: Featured</option>
              <option value="">Price: Low to High</option>
              <option value="">Price: High to Low</option>
              <option value="">Newest</option>
            </select>
          </div>

          <div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-xl p-4"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="cursor-pointer">
                      <img
                        src={product.image}
                         alt={product.title || product.name}
                        className="w-full h-48 object-contain"
                      />
                      <h3 className="font-semibold mt-4">{product.title}</h3>
                      <p className="font-bold text-blue-700">
                        ${product.price}
                      </p>
                    </div>
                  </Link>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
