import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border p-8">

        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Login to your account
        </p>

        <form className="mt-8 space-y-6">
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

          <div className="flex justify-between text-sm">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </section>
  );
};

export default Login;
