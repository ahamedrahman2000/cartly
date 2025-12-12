import heroImage from "../assets/images/hero2.jpg";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">

        <div className="md:text-left text-center space-y-4 ">
          <h1 className="text-4xl md:text-5xl font-bold ">Discover Your Perfect Product</h1>
          <p className="text-gray-600">
            ShopMate offers the latest products at unbeatable prices. Fast
            delivery, secure checkout, and 24/7 support.
          </p>

          <div className="justify-center md:justify-start flex space-x-4">
            <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700">Shop Now</button>
            <button className="bg-gray-300 rounded-md py-2 px-4 hover:bg-gray-400">Explore Categories</button>
          </div>
        </div>

        <div className="">
          <img src={heroImage} alt="Product Image" className="rounded-2xl w-full h-full duration-300 hover:scale-105 mt-3"/>
        </div>

      </div>
    </section>
  );
};

export default Hero;
