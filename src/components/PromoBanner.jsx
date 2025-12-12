import camera from "../assets/images/camera.jpg";
const PromoBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between overflow-hidden items-center bg-blue-600 rounded-2xl p-6  ">
            
        <div className=" space-y-4">
          <h1 className="text-white text-2xl font-bold ">
            Up to 50% OFF On Electonics!
          </h1>
          <p className="text-white">
            Grab the best deals before they are gone.Limited time offer.
          </p>
          <button className="bg-white  text-blue-700 text-1xl rounded px-4 py-2">
            Shop Now
          </button>
        </div>

        <img src={camera} alt="" className="w-[400px] h-[300px] mt-3" />
      </div>
    </section>
  );
};

export default PromoBanner;
