import { Link } from "react-router-dom";

const orders = [
  {
    id: "ORD-10231",
    date: "2025-02-15",
    status: "Delivered",
    total: 129.99,
  },
  {
    id: "ORD-10214",
    date: "2025-02-07",
    status: "Shipped",
    total: 89.49,
  },
  {
    id: "ORD-10198",
    date: "2025-01-30",
    status: "Processing",
    total: 59.99,
  },
  {
    id: "ORD-10175",
    date: "2025-01-20",
    status: "Cancelled",
    total: 42.0,
  },
];

const OrdersList = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900">My Orders</h2>

      <div className="mt-10 space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-gray-700 font-semibold">
                  Order ID: <span className="text-gray-900">{order.id}</span>
                </p>
                <p className="text-gray-500 mt-1">Date: {order.date}</p>
                <p className="mt-2 font-medium">
                  Status:{" "}
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
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

              <div className="text-right">
                <p className="font-bold text-lg text-gray-900">
                  ${order.total}
                </p>

                <Link to={`/orders/${order.id}`}>
                  <button className="mt-3 bg-gray-900 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersList;
