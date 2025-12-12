const products = [
  {
    id: 1,
    title: "Noise Cancelling Headphones",
    price: 89.99,
    img: "https://i.pravatar.cc/400/400",
    rate: 4.9,
  },
  {
    id: 2,
    title: "Minimal Wrist Watch",
    price: 49.99,
    img: "https://i.pravatar.cc/400/400",
    rate: 4.9,
  },
  {
    id: 3,
    title: "Wireless Mouse",
    price: 24.99,
    img: "https://i.pravatar.cc/400/400",
    rate: 4.9,
  },
  {
    id: 4,
    title: "Stylish Backpack",
    price: 59.99,
    img: "https://i.pravatar.cc/400/400",
    rate: 4.9,
  },
  {
    id: 5,
    title: "Sneakers",
    price: 69.99,
    img: "https://i.pravatar.cc/400/400",
    rate: 4.9,
  },
  {
    id: 6,
    title: "Smart Home Lamp",
    price: 39.99,
    img: "https://i.pravatar.cc/400/400",
    rate: 4.9,
  },
  {
    id: 7,
    title: "Bluetooth Speaker",
    price: 29.99,
    img: "https://i.pravatar.cc/400/400",
    rate: 4.9,
  },
  {
    id: 8,
    title: "Premium Sunglasses",
    price: 79.99,
    img: "https://i.pravatar.cc/400/400",
    rate: 4.9,
  },
];

const ProductListing = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[250px_1fr] grid-cols-1 gap-10">
        <div className="md:max-w-[250px]  border rounded-lg p-5 h-[550px]">
          <h1 className="font-semibold text-xl ">Filters</h1>

          <div className="flex flex-col space-y-2 mt-6">
            <p className="font-semibold">Category</p>
            <label>
              <input type="checkbox" /> Electronics
            </label>
            <label>
              <input type="checkbox" /> Fashion
            </label>
            <label>
              <input type="checkbox" /> Home
            </label>
            <label>
              <input type="checkbox" /> Sports
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
              {products.map((product) => (
                <div
                  key={product.id}
                  className="shadow rounded-2xl hover:shadow-lg hover:-translate-y-1 transition cursor-pointer p-4" >
                  <img src={product.img} className=" w-full h-[200px]"/>
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-yellow-300 text-xs mb-2"> ⭐ {product.rate}
                  </p>
                  <p className="font-bold">${product.price}</p>
                  <button className="mt-3 text-white bg-blue-600 w-full py-1 rounded-md">
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
