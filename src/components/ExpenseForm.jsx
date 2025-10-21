import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [form, setForm] = useState({ title: "", amount: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ ...form, amount: parseFloat(form.amount) });
    setForm({ title: "", amount: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow flex space-x-4">
      <input
        className="border p-2 flex-1"
        placeholder="Expense Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        className="border p-2 w-32"
        placeholder="Amount (₹)"
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />
      <input
        className="border p-2 w-32"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />
      <button className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
  );
};

export default ExpenseForm;