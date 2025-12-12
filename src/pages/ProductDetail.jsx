const product = {
  title: "Premium Wireless Headphones",
  price: 129.99,
  rating: "★★★★★",
  reviews: 124,
  description:
    "Experience incredible sound quality with our wireless headphones. Designed for comfort, long-lasting battery, and premium audio performance.",

  mainImage: "https://i.pravatar.cc/600/600",

  thumbnails: [
    "https://i.pravatar.cc/600/600?img=1",
    "https://i.pravatar.cc/600/600?img=2",
    "https://i.pravatar.cc/600/600?img=3",
    "https://i.pravatar.cc/600/600?img=4",
  ],

  colors: ["#000000", "#b0b0b0", "#2563eb"],

  sizes: ["S", "M", "L"],
};
const ProductDetail = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[500px_1fr] grid-cols-1 gap-10">
        <div>
          <img src={product.mainImage} alt=""  className="w-full h-[450px] object-cover rounded-xl"/>
        <div className="flex gap-4 mt-1">
          {product.thumbnails.map((thumb,index)=>(
            <div key={index} >
              <img src={thumb} alt="" className="w-24 h-24 rounded "/>
            </div>
          ))}
        </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="space-x-2">
            <span className="text-yellow-400">{product.rating}</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </p>

          <p className="text-blue-600 font-bold text-3xl">${product.price}</p>

          <p className="text-gray-500">{product.description}</p>

          <div>
            <p className="font-semibold">Color</p>
            <div className="flex gap-2 mt-2">
              {product.colors.map((clr, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: clr }}
                  className="w-5 h-5 rounded-full cursor-pointer ring-2 ring-transparent duration-200 hover:ring-gray-900"
                ></span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mt-4">Size</p>
           <div className="flex gap-2 mt-3">
              {product.sizes.map((size,index)=>(
                <span key={index} className="border rounded px-4 py-2 duration-200 hover:bg-gray-200 text-xs">{size}</span>
              ))}</div>
          </div>

          <div className="space-x-3 ">
            <button className="bg-gray-900 mt-4 hover:bg-gray-800 text-white text-sm px-6 py-3 rounded-md">Add to Cart</button>
            <button className="hover:bg-gray-300 duration-200 border text-sm px-6 py-3 rounded-md">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
