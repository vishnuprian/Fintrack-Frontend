import React from "react";

export default function History({ items = [] }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Transactions</h3>
        <div className="text-sm text-slate-500">{items.length} results</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-500">
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">Description</th>
              <th className="py-2">Category</th>
              <th className="py-2">Payment</th>
              <th className="py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-3">{(it.transaction_date||"").slice(0,10)}</td>
                <td className="py-3">{it.description || "-"}</td>
                <td className="py-3">{it.merchantCategory}</td>
                <td className="py-3">{it.payment_method || "-"}</td>
                <td className="py-3 text-right">₹{Number(it.amount).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}