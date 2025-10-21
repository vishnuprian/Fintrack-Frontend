import React, { useState } from "react";
import { postExpense } from "../api";
import dayjs from "dayjs";

export default function ExpenseForm({ userId, onAdded }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [description, setDescription] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [loading, setLoading] = useState(false);

  const categories = ["Food", "Groceries", "Transport", "Entertainment", "Utilities", "Shopping", "Other"];

  async function handleSubmit(e) {
    e.preventDefault();
    if (!amount || Number(amount) <= 0) {
      alert("Enter a positive amount");
      return;
    }
    const payload = {
      user_id: userId,
      
      amount: amount.toString(),
      merchantCategory: category,
      transaction_date: `${date}T00:00:00Z`,
      description,
      payment_method: paymentMethod,
      status: "SUCCESS"
    };
    try {
      setLoading(true);
      await postExpense(payload);
      setAmount("");
      setDescription("");
      if (onAdded) onAdded();
    } catch (err) {
      console.error(err);
      alert("Failed to add expense. See console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-2">Add New Expense</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <div className="text-sm text-slate-700 mb-1">Amount</div>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border bg-slate-50">₹</span>
            <input
              className="flex-1 border rounded-r-md p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              inputMode="decimal"
            />
          </div>
        </label>

        <label className="block">
          <div className="text-sm text-slate-700 mb-1">Category</div>
          <select className="w-full border rounded p-2" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>

        <label className="block">
          <div className="text-sm text-slate-700 mb-1">Date</div>
          <input type="date" className="w-full border rounded p-2" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <label className="block">
          <div className="text-sm text-slate-700 mb-1">Description</div>
          <textarea className="w-full border rounded p-2" rows="2" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="e.g., Lunch with client" />
        </label>

        <label className="block">
          <div className="text-sm text-slate-700 mb-1">Payment Method</div>
          <select className="w-full border rounded p-2" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Online Payment</option>
          </select>
        </label>

        <button disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
          {loading ? "Adding..." : "Add Expense"}
        </button>
      </form>
    </div>
  );
}