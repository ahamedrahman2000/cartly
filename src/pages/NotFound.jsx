const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      
      <h1 className="text-7xl font-bold text-blue-600">404</h1>

      <h2 className="text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      <a href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>

    </div>
  );
};

export default NotFound;
