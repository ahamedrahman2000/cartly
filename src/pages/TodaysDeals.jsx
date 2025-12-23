const TodaysDeals = () => {
  const deals = [
    { id: 1, title: "Smartphone", price: 299.99, img: "https://via.placeholder.com/300x300?text=Phone" },
    { id: 2, title: "Laptop", price: 899.99, img: "https://via.placeholder.com/300x300?text=Laptop" },
    { id: 3, title: "Headphones", price: 49.99, img: "https://via.placeholder.com/300x300?text=Headphones" },
    { id: 4, title: "Backpack", price: 39.99, img: "https://via.placeholder.com/300x300?text=Backpack" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Today's Deals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img src={deal.img} alt={deal.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <h3 className="font-semibold text-gray-900 mt-4">{deal.title}</h3>
            <p className="text-lg font-bold text-red-600 mt-1">${deal.price}</p>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodaysDeals;
