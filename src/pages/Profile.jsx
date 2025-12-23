import user from "../assets/images/user.jpg";

const Profile = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        My Profile
      </h2>

      <div className="bg-white border border-gray-200 rounded-3xl p-10 mt-12 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={user}
              alt="avatar"
              className="w-[200px] h-[200px] rounded-full object-cover border-4 border-gray-200 shadow-md"
            />
           
          </div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">Ahamed Rahman</h3>
          <p className="text-gray-500 text-sm">ahamed@gmail.com</p>
        </div>

        <form className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              defaultValue="Ahamed Rahman"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              defaultValue="ahamed@gmail.com"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Phone</label>
            <input
              type="text"
              defaultValue="9884680243"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>

        <button className="w-full mt-12 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </section>
  );
};

export default Profile;
