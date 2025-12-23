import user from "../assets/images/user.jpg";
import user_1 from "../assets/images/user_3.jpg";
import user_2 from "../assets/images/user_2.jpg";

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Verified Buyer",
    rating: "★★★",
    img: user,
    review:
      "Absolutely loved the quality! Fast shipping and great customer service. Highly recommended.",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "Verified Buyer",
    rating: "★★★★",
    img: user_1,
    review:
      "The product is amazing for the price. Packaging was neat and delivery was on time.",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Verified Buyer",
    rating: "★★★★★",
   img: user_2,
    review:
      "Great experience! The design and quality exceeded my expectations. Will shop again.",
  },
];



const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        What Our Customers Say
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Real reviews from happy shoppers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className=" border border-gray-200 p-6  shadow-md rounded-xl"
          >
            <div className="flex space-x-2  items-center">
              <img
                src={review.img}
                alt=""
                className="rounded-full w-15 h-14 object-cover"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>

            <p className="text-yellow-400 text-lg">{review.rating}</p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {review.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
