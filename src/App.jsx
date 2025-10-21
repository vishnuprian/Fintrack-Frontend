import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [expenses, setExpenses] = useState([]); // all expenses stored here

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard setExpenses={setExpenses} />;
      case "Reports":
        return <Reports expenses={expenses} />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard setExpenses={setExpenses} />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4 bg-gray-100 flex-1 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;