import React from "react";
import { useParams } from "react-router-dom";

// Dummy Order Data (You can move to data folder later)
const orderDetailsData = {
  "ORD-10231": {
    id: "ORD-10231",
    date: "2025-02-15",
    status: "Delivered",
    total: 129.99,
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      postalCode: "10001",
      country: "USA",
    },
    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        qty: 1,
        img: "https://via.placeholder.com/120?text=Headphones",
      },
      {
        id: 2,
        name: "Mini Camera",
        price: 69.99,
        qty: 1,
        img: "https://via.placeholder.com/120?text=Camera",
      },
    ],
  },
};

const OrderDetails = () => {
  const { orderId } = useParams();
  const order = orderDetailsData[orderId];

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Order not found.</h2>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900">Order Summary</h2>

        <div className="mt-6 flex flex-col gap-3 text-gray-700">
          <p>
            <span className="font-semibold">Order ID:</span> {order.id}
          </p>
          <p>
            <span className="font-semibold">Order Date:</span> {order.date}
          </p>
          <p className="font-semibold">
            Status:
            <span
              className={`ml-2 px-3 py-1 rounded-full text-sm ${
                order.status === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : order.status === "Shipped"
                  ? "bg-blue-100 text-blue-700"
                  : order.status === "Processing"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {order.status}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
          <p className="text-gray-700">{order.shippingAddress.name}</p>
          <p className="text-gray-700">{order.shippingAddress.address}</p>
          <p className="text-gray-700">
            {order.shippingAddress.city}, {order.shippingAddress.postalCode}
          </p>
          <p className="text-gray-700">{order.shippingAddress.country}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>

          <div className="flex justify-between text-gray-700 mb-3">
            <span>Subtotal</span>
            <span>${order.total - 10}</span>
          </div>

          <div className="flex justify-between text-gray-700 mb-3">
            <span>Shipping</span>
            <span>$10.00</span>
          </div>

          <div className="flex justify-between font-bold text-gray-900 text-lg mt-2">
            <span>Total</span>
            <span>${order.total}</span>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6">Items in this order</h3>

        <div className="space-y-6">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-6 border-b last:border-none"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-28 h-28 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-gray-600 mt-1">Quantity: {item.qty}</p>
              </div>

              <p className="text-lg font-bold text-gray-900">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
