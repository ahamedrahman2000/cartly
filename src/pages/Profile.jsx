const Profile = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        My Profile
      </h2>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 mt-12 shadow-sm">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/120"
            alt="avatar"
            className="w-28 h-28 rounded-full object-cover border"
          />

          <button className="mt-4 text-blue-600 hover:underline text-sm">
            Change Photo
          </button>
        </div>

        <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Phone</label>
            <input
              type="text"
              defaultValue="+1 234 567 890"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>
        </form>

        <button className="w-full mt-10 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Save Changes
        </button>
      </div>
    </section>
  );
};

export default Profile;
