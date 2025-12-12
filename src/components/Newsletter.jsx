const Newsletter = () => {
  return (
    <section>
      <div className="flex flex-col items-center max-w- text-center text-white space-y-4">
        <h1 className="text-3xl md:text-2xl  font-extrabold">
          Stay Updated with Our Latest Offers
        </h1>
        <p className="text-gray-300 text-lg">
          Join our newsletter and get exclusive deals, new arrivals, and more!
        </p>
        <div className="space-x-4 ">
          <input
            placeholder="Enter your email"
            className="p-2 rounded w-full "
          />
          <button className="rounded mt-2 bg-blue-600 font-semibold p-2 px-4">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
