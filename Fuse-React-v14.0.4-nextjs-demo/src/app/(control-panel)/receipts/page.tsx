import React from 'react';
import { Receipt } from '../../types/finance'; // Adjusted path

const ReceiptListPage = () => {
  const mockReceipts: Receipt[] = [
    {
      DocumentType: 'Receipt',
      DocumentName: 'Office Supplies Purchase',
      Invoices: [
        {
          InvoiceNumber: 'INV-2023-001',
          Supplier: { Name: 'Staples', Address: '123 Main St' },
          'PO Number': 'PO-123',
          InvoiceDate: '2023-10-15',
          BalanceDue: 75.00,
          Currency: 'USD',
          Subtotal: 70.00,
          Tax: 5.00,
          Total: 75.00,
        },
      ],
    },
    {
      DocumentType: 'Invoice',
      DocumentName: 'Software Subscription',
      Invoices: [
        {
          InvoiceNumber: 'INV-2023-002',
          Supplier: { Name: 'Adobe', Address: '456 Tech Rd' },
          'PO Number': 'PO-456',
          InvoiceDate: '2023-10-20',
          BalanceDue: 199.99,
          Currency: 'USD',
          Subtotal: 199.99,
          Tax: 0.00,
          Total: 199.99,
        },
      ],
    },
    {
      DocumentType: 'Receipt',
      DocumentName: 'Team Lunch Catering',
      Invoices: [
        {
          InvoiceNumber: 'INV-2023-003',
          Supplier: { Name: 'Good Eats Catering', Address: '789 Food Ave' },
          'PO Number': 'PO-789',
          InvoiceDate: '2023-10-22',
          BalanceDue: 250.00,
          Currency: 'USD',
          Subtotal: 230.00,
          Tax: 20.00,
          Total: 250.00,
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Receipts</h1>
      <div className="mb-4 flex space-x-4">
        <input type="text" placeholder="Filter by domain/email..." className="p-2 border rounded" />
        <input type="date" placeholder="Filter by date..." className="p-2 border rounded" />
      </div>
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">Document Name</th>
            <th className="py-2 px-4 border-b text-left">Invoice No.</th>
            <th className="py-2 px-4 border-b text-left">Supplier</th>
            <th className="py-2 px-4 border-b text-left">
              Invoice Date <button>↑</button><button>↓</button>
            </th>
            <th className="py-2 px-4 border-b text-left">Total</th>
            <th className="py-2 px-4 border-b text-left">Currency</th>
            <th className="py-2 px-4 border-b text-left">Status</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockReceipts.map((receipt, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{receipt.DocumentName}</td>
              <td className="py-2 px-4 border-b">{receipt.Invoices[0]?.InvoiceNumber || 'N/A'}</td>
              <td className="py-2 px-4 border-b">{receipt.Invoices[0]?.Supplier?.Name || 'N/A'}</td>
              <td className="py-2 px-4 border-b">{receipt.Invoices[0]?.InvoiceDate || 'N/A'}</td>
              <td className="py-2 px-4 border-b">{receipt.Invoices[0]?.Total?.toFixed(2) || 'N/A'}</td>
              <td className="py-2 px-4 border-b">{receipt.Invoices[0]?.Currency || 'N/A'}</td>
              <td className="py-2 px-4 border-b">{'Pending'}</td> {/* Placeholder status */}
              <td className="py-2 px-4 border-b">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceiptListPage;
