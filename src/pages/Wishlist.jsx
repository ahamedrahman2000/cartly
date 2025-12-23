 

const wishlistItems = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 59.99,
    img: "https://via.placeholder.com/300?text=Headphones",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 79.99,
    img: "https://via.placeholder.com/300?text=Watch",
  },
];

const Wishlist = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900">My Wishlist</h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-4 hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="text-blue-700 font-bold mt-1">${item.price}</p>

            <div className="mt-4 space-y-2">
              <button className="w-full bg-gray-900 text-white py-2 rounded-lg">
                Add to Cart
              </button>
              <button className="w-full text-red-600 text-sm">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
