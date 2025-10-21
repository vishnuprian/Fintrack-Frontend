import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Reports = ({ expenses }) => {
  const categories = [...new Set(expenses.map(e => e.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses (₹)",
        data: categories.map(cat =>
          expenses.filter(e => e.category === cat).reduce((a, b) => a + b.amount, 0)
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Expense Distribution</h2>
      {expenses.length > 0 ? <Pie data={data} /> : <p>No expenses yet.</p>}
    </div>
  );
};

export default Reports;