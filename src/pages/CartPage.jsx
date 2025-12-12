import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 129.99,
    qty: 1,
    image: "https://picsum.photos/120/120",
  },
  {
    id: 2,
    title: "Smart Watch Pro",
    price: 89.99,
    qty: 2,
    image: "https://picsum.photos/120/120",
  },
];

const CartPage = () => {
  return (
    <section className="max-w-7xl px-6 py-16 mx-auto">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="grid md:grid-cols-[800px_1fr] grid-cols-1 mt-8 gap-8">
        <div className="space-y-4">
          {cartItems.map((cart) => (
            <div key={cart.id} className="flex gap-4 border p-4 rounded-lg ">
              <img src={cart.image} alt="" className="w-24 " />

              <div className="flex flex-col space-y-3 w-full">
                <p className="font-semibold">{cart.title}</p>

                <div className="flex justify-between">
                  <p className="font-bold text-blue-600">${cart.price}</p>

                  <button className="text-red-600 ">Remove</button>
                </div>

                <div className="flex space-x-2 ">
                  <span className="border px-2 rounded">-</span>

                  <p>{cart.qty}</p>

                  <span className="border px-2 rounded">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-6 border rounded-lg p-4">
          <h1 className="text-2xl font-semibold">Order Summary</h1>
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$309.97</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>$4.99</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>$6.50</p>
            </div>
          </div>

          <hr />

          <div className="flex justify-between text-2xl font-semibold">
            <p>Total</p>
            <p className="text-red-500">$321.46</p>
          </div>

          <Link to="/checkout" className="bg-gray-800 text-white text-center py-2 rounded-lg">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
