import React from "react";

export default function TopNav() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold">FT</div>
          <h1 className="text-lg font-semibold">Expense Tracker</h1>
        </div>
        <nav className="space-x-6 text-sm text-slate-600">
          <a className="hover:text-slate-800" href="/">Dashboard</a>
          <a className="text-blue-600 font-medium" href="/#expenses">Expenses</a>
          <a className="hover:text-slate-800" href="/#reports">Reports</a>
          <a className="hover:text-slate-800" href="/#settings">Settings</a>
        </nav>
      </div>
    </header>
  );
}