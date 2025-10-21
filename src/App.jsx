import React, { useEffect, useState } from "react";
import TopNav from "./components/TopNav";
import Card from "./components/Card";
import ExpenseForm from "./components/ExpenseForm";
import History from "./components/History";
import Reports from "./components/Reports";
import { fetchAnalytics } from "./api";
import dayjs from "dayjs";

export default function App() {
  const userId = "user1"; 
  const [month, setMonth] = useState(dayjs().format("YYYY-MM"));
  const [analytics, setAnalytics] = useState({ total_spent: 0, by_category: {}, by_day: {} });
  const [transactions, setTransactions] = useState([]); 
  const [reloadFlag, setReloadFlag] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAnalytics(userId, month);
        setAnalytics(data);
        
        
        setTransactions([]); 
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, [userId, month, reloadFlag]);

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <div className="text-sm text-slate-500">Daily Expenses</div>
            <div className="text-2xl font-bold">₹{(analytics.by_day && Object.values(analytics.by_day)[0]) ? Number(Object.values(analytics.by_day)[0]).toFixed(2) : "0.00"}</div>
          </Card>
          <Card>
            <div className="text-sm text-slate-500">Monthly Expenses</div>
            <div className="text-2xl font-bold">₹{Number(analytics.total_spent || 0).toFixed(2)}</div>
          </Card>
          <Card>
            <div className="text-sm text-slate-500">Select Month</div>
            <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className="mt-2 border rounded p-2" />
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <Reports analytics={analytics} />
            <History items={transactions} />
          </div>

          <div className="col-span-1">
            <ExpenseForm userId={userId} onAdded={() => setReloadFlag(f => f + 1)} />
          </div>
        </div>
      </main>
    </div>
  );
}