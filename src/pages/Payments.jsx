const payments = [
  {
    id: 1,
    type: "Visa",
    number: "**** **** **** 1234",
  },
];

const Payments = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Payment Methods</h2>

      <div className="mt-6 space-y-4">
        {payments.map((card) => (
          <div
            key={card.id}
            className="border rounded-xl p-6 bg-white flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{card.type}</p>
              <p className="text-gray-600">{card.number}</p>
            </div>

            <button className="text-red-600">Remove</button>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-lg">
        Add New Card
      </button>
    </div>
  );
};

export default Payments;
