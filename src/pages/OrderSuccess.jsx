import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
      
      <div className="bg-white max-w-xl w-full p-10 rounded-2xl shadow-lg text-center border border-gray-200">

       
        <div className="text-green-600 text-6xl mb-4">✔</div>

        <h2 className="text-3xl font-bold text-gray-900">Order Placed Successfully!</h2>

        <p className="text-gray-600 mt-3">
          Thank you for shopping with us. Your order has been confirmed.
        </p>

   
        <div className="mt-6 bg-gray-100 py-3 rounded-lg text-gray-700 font-medium">
          Order ID: <span className="font-bold text-gray-900">#123456</span>
        </div>

    
        <div className="mt-6 text-left space-y-3">
          <div className="flex justify-between">
            <span>Items</span>
            <span>3</span>
          </div>

          <div className="flex justify-between">
            <span>Total Amount</span>
            <span>$152.46</span>
          </div>

          <div className="flex justify-between">
            <span>Payment</span>
            <span>Paid</span>
          </div>
        </div>

   
        <div className="mt-10 space-y-4">

          <Link to="/">
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Go to Home
            </button>
          </Link>

          <Link to="/orders">
            <button className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition">
              View My Orders
            </button>
          </Link>

        </div>
      </div>

    </section>
  );
};

export default OrderSuccess;
