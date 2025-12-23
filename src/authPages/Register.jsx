import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border p-8">

        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Join us and start shopping
        </p>

        <form className="mt-8 space-y-6">
          <div>
            <label className="font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
            />
          </div>

          <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </section>
  );
};

export default Register;
