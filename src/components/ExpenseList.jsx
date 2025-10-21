import React from "react";

const ExpenseList = ({ expenses }) => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-lg font-bold mb-2">Expenses</h2>
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="border p-2">Title</th>
          <th className="border p-2">Amount (₹)</th>
          <th className="border p-2">Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((e, i) => (
          <tr key={i}>
            <td className="border p-2">{e.title}</td>
            <td className="border p-2">{e.amount}</td>
            <td className="border p-2">{e.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExpenseList;