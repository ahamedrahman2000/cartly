import React, { useState } from "react";

import { products } from "../data/products";

const SearchPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  
  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900">Search Products</h1>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded-lg px-5 py-3 text-gray-700 focus:ring-2 focus:ring-gray-900 outline-none"
        />
      </div>

      {search && (
        <p className="mt-4 text-gray-600">
          Showing results for: <span className="font-semibold">{search}</span>
        </p>
      )}

      {search && filtered.length === 0 && (
        <div className="mt-10 p-10 bg-gray-100 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            No matching products found 😢
          </h3>
          <p className="text-gray-600 mt-2">Try searching something else.</p>
        </div>
      )}

      {search && (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
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
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchPage;
