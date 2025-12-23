const CustomerService = () => {
  const faqs = [
    { id: 1, question: "How do I track my order?", answer: "Go to your orders page and click 'Track Order' to see the latest status." },
    { id: 2, question: "How can I return a product?", answer: "You can initiate a return from your order details page within 30 days of delivery." },
    { id: 3, question: "How to contact support?", answer: "Email us at support@example.com or call 1-800-123-4567." },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Service</h2>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerService;
