import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, shipping, tax } =
    useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const totalValue = cart.length > 0 ? shipping + tax + total : 0;
  // const btnDisabled = cart.length === 0;
  return (
    <section className="max-w-7xl px-6 py-16 mx-auto">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="grid md:grid-cols-[800px_1fr] grid-cols-1 mt-8 gap-8">
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border p-4 rounded-lg mb-4"
                >
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>${item.price}</p>

                    <div className="flex gap-2 mt-2">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex flex-col space-y-6 border rounded-lg p-4">
          <h1 className="text-2xl font-semibold">Order Summary</h1>
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>${shipping}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>${tax}</p>
            </div>
          </div>

          <hr />

          <div className="flex justify-between text-2xl font-semibold">
            <p>Total</p>
            <p className="text-red-500">${totalValue.toFixed(2)}</p>
          </div>

          <Link
            to="/checkout"
            className="bg-gray-800 text-white text-center py-2 rounded-lg"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
