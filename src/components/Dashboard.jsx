import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const categories = [...new Set(expenses.map(e => e.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses (₹)",
        data: categories.map(cat =>
          expenses.filter(e => e.category === cat).reduce((a, b) => a + b.amount, 0)
        ),
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      {expenses.length > 0 && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Category-wise Expense</h2>
          <Bar data={data} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
