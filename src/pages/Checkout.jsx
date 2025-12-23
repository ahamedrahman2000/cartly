import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cart, shipping, tax } = useContext(CartContext);
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">Checkout</h1>
      <div className="grid md:grid-cols-[700px_1fr] gap-5">
        <div className="space-y-5">
          <div className="border border-gray-200 rounded-md p-4 space-y-3">
            <h1 className="font-bold ">Contact Information</h1>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md p-2 w-full border-gray-200"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-2 w-full border-gray-200"
              />
            </div>

            <input
              type="email"
              placeholder="Eamil Address"
              className="border rounded-md p-2 w-full border-gray-200"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-md p-2 w-full border-gray-200"
            />
          </div>
          <div className="border border-gray-200 rounded-md p-4 space-y-3">
            <h1 className="font-bold ">Shipping Address</h1>
            <input
              type="text"
              placeholder="Street Address"
              className="border rounded-md p-2 w-full border-gray-200"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="City"
                className="border rounded-md p-2 w-full border-gray-200"
              />
              <input
                type="text"
                placeholder="State"
                className="border rounded-md p-2 w-full border-gray-200"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="border rounded-md p-2 w-full border-gray-200"
              />
            </div>
            <select className="border text-gray-400 rounded-md p-2 w-full border-gray-200 ">
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UAE</option>
              <option>Africa</option>
            </select>
          </div>
          <div className="border border-gray-200 rounded-md p-4 space-y-3">
            <h1 className="font-bold ">Payment Method</h1>

            <div className="border  text-gray-400  border-gray-200 rounded-md p-2">
              <input type="checkbox" /> <label>Credit / Debit Card</label>
            </div>
            <div className="border  text-gray-400  border-gray-200 rounded-md p-2">
              <input type="checkbox" /> <label>Cash on Delivery</label>
            </div>
            <div className="border  text-gray-400  border-gray-200 rounded-md p-2">
              <input type="checkbox" /> <label>UPI wallet</label>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Card Number"
                className="border border-gray-300 rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Card Holder"
                className="border border-gray-300 rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Expiry Date"
                className="border border-gray-300 rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="CVV"
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>

          <div className="space-y-5">
            <div className="space-y-4">
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="    items-center border p-4 rounded-lg mb-4"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="font-semibold">{item.title}</span>
                          <span>Quantity</span>
                        </div>

                        <div className="flex justify-between">
                          <span>${item.price}</span>
                          <span>{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span> <span>$129.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span> <span>${shipping}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span> <span>${tax}</span>
              </div>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-4 mt-4">
              <span>Total</span>
              <span> </span>
            </div>
            <Link to="/order-summary">
              <button className="w-full bg-gray-900 text-white py-3 mt-5 rounded-lg hover:bg-gray-800 transition">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
