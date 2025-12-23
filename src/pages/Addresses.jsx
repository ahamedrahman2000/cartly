const addresses = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Main Street, New York, USA",
  },
];

const Addresses = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto ">
        <h2 className="text-2xl font-bold">My Addresses</h2>

        <div className="mt-6 space-y-4">
          {addresses.map((addr) => (
            <div key={addr.id} className="border rounded-xl p-6 bg-white">
              <p className="font-semibold">{addr.name}</p>
              <p className="text-gray-600 mt-1">{addr.address}</p>

              <div className="mt-4 flex gap-4 text-sm">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-lg">
          Add New Address
        </button>
      </section>
    </div>
  );
};

export default Addresses;
