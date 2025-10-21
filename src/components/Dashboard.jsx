import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // --- Category-wise Bar Chart ---
  const categories = [...new Set(expenses.map(e => e.category))];
  const categoryData = {
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

  // --- Monthly Bar Chart ---
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ];
  const monthlyData = {
    labels: months,
    datasets: [
      {
        label: "Monthly Expenses (₹)",
        data: months.map((_, idx) =>
          expenses
            .filter(e => new Date(e.date).getMonth() === idx)
            .reduce((a, b) => a + b.amount, 0)
        ),
        backgroundColor: "rgba(16, 185, 129, 0.7)", // green bars
      },
    ],
  };

  return (
    <div className="space-y-6">
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      
      {expenses.length > 0 && (
        <>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Category-wise Expense</h2>
            <Bar data={categoryData} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Monthly Expense</h2>
            <Bar data={monthlyData} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
