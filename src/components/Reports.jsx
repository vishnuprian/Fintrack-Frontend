import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


export default function Reports({ analytics }) {
  const { by_category = {}, by_day = {}, total_spent = 0 } = analytics || {};

  const catData = Object.entries(by_category).map(([k, v]) => ({ name: k, value: Number(v) }));
  const dayData = Object.entries(by_day)
    .sort(([a], [b]) => new Date(a) - new Date(b))
    .map(([k, v]) => ({ date: k, value: Number(v) }));

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Expense Breakdown</h3>
          <div className="text-sm text-slate-500">View spending by category</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">₹{Number(total_spent).toFixed(2)}</div>
          <div className="text-sm text-slate-500">This month</div>
        </div>
      </div>

      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={catData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => `₹${Number(value).toFixed(2)}`} />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}