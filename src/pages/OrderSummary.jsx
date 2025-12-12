import { Link } from "react-router-dom";

const orderItems = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 59.99,
    qty: 1,
    img: "https://via.placeholder.com/150x150?text=Headphones",
  },
  {
    id: 2,
    title: "Travel Backpack",
    price: 39.99,
    qty: 2,
    img: "https://via.placeholder.com/150x150?text=Backpack",
  },
];

const OrderSummary = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        Review Your Order
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
        <div className="lg:col-span-2 space-y-6">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">Quantity: {item.qty}</p>
                </div>
              </div>

              <p className="text-blue-700 font-bold text-lg">
                ${(item.price * item.qty).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$139.97</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$4.99</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>$7.50</span>
            </div>

            <div className="flex justify-between text-xl font-bold border-t pt-4 mt-4">
              <span>Total</span>
              <span>$152.46</span>
            </div>
            <Link to="/order-success">
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">
                Place Order
              </button>
            </Link>

            <Link to="/checkout">
              <button className="w-full text-gray-600 border border-gray-300 py-3 rounded-lg mt-4 hover:bg-gray-100 transition">
                ← Back to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
