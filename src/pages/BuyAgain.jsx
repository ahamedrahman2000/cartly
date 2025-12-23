const BuyAgain = () => {
  // Dummy products
  const products = [
    { id: 1, title: "Bluetooth Speaker", price: 39.99, img: "https://via.placeholder.com/300x300?text=Speaker" },
    { id: 2, title: "Running Shoes", price: 69.99, img: "https://via.placeholder.com/300x300?text=Shoes" },
    { id: 3, title: "Denim Jacket", price: 49.99, img: "https://via.placeholder.com/300x300?text=Jacket" },
    { id: 4, title: "Smart Watch", price: 79.99, img: "https://via.placeholder.com/300x300?text=Watch" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Buy Again</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img src={product.img} alt={product.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4">{product.title}</h3>
            <p className="text-lg font-bold text-blue-700 mt-1">${product.price}</p>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuyAgain;
