import { useState } from "react";

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: "", feedback: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setForm({ name: "", feedback: "" }); // Clear form after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4">📬 Share Your Feedback</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <textarea
        placeholder="Your Feedback"
        value={form.feedback}
        onChange={(e) => setForm({ ...form, feedback: e.target.value })}
        rows="5"
        className="border border-gray-300 rounded px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-300 w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
