import React from 'react';

const SettingsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Email Sync Configuration Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Email Sync Configuration</h2>
        <div className="space-y-4 bg-white p-6 shadow rounded-lg">
          <div>
            <label htmlFor="emailServer" className="block text-sm font-medium text-gray-700">Server Address</label>
            <input type="text" id="emailServer" className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm" placeholder="e.g., imap.company.com" />
          </div>
          <div>
            <label htmlFor="emailPort" className="block text-sm font-medium text-gray-700">Port</label>
            <input type="text" id="emailPort" className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm" placeholder="e.g., 993" />
          </div>
          <div>
            <label htmlFor="emailUser" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="emailUser" className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm" placeholder="e.g., user@company.com" />
          </div>
          <div>
            <label htmlFor="emailPassword" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="emailPassword" className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm" />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save Email Config</button>
        </div>
      </div>

      {/* Domain Setup Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Domain Setup</h2>
        <div className="space-y-4 bg-white p-6 shadow rounded-lg">
          <div>
            <label htmlFor="companyDomain" className="block text-sm font-medium text-gray-700">Company Email Domain</label>
            <input type="text" id="companyDomain" className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm" placeholder="e.g., company_domain.com" />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Domain</button>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Registered Domains:</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>example.com (Placeholder)</li>
              {/* Added domains would be listed here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
