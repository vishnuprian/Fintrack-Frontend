import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = ["Dashboard", "Reports", "Settings"];

  return (
    <div className="w-64 bg-white shadow-md flex flex-col h-screen">
      <div className="p-6 text-2xl font-bold border-b">FinTrack</div>
      <ul className="mt-6 flex-1">
        {tabs.map(tab => (
          <li
            key={tab}
            className={`p-4 cursor-pointer ${
              activeTab === tab ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;