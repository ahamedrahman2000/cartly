const Settings = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Account Settings</h2>

      <div className="mt-6 bg-white border rounded-xl p-6 space-y-6">

        <div>
          <label className="block font-medium">Change Password</label>
          <input
            type="password"
            placeholder="New password"
            className="mt-2 w-full border rounded-lg px-4 py-2"
          />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" />
          <span>Email Notifications</span>
        </div>

        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg">
          Save Settings
        </button>

      </div>
    </div>
  );
};

export default Settings;
