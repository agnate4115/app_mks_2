import React from 'react';

const FinanceDashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder for summary cards/widgets */}
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">Total Receipts</h2>
          <p className="text-3xl">0</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">Pending Review</h2>
          <p className="text-3xl">0</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">Total Spending (This Month)</h2>
          <p className="text-3xl">$0.00</p>
        </div>
      </div>
      {/* Placeholder for future charts or more detailed information */}
      <div className="mt-8 p-4 border rounded shadow">
        <h2 className="text-lg font-semibold">Spending Trend</h2>
        <p>Chart placeholder...</p>
      </div>
    </div>
  );
};

export default FinanceDashboardPage;
