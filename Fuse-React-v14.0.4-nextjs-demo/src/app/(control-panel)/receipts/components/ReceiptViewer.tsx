import React from 'react';
import { Receipt } from '../../../types/finance'; // Path from components/ up to app/types/

interface ReceiptViewerProps {
  receipt: Receipt | null;
  onClose: () => void;
}

const ReceiptViewer: React.FC<ReceiptViewerProps> = ({ receipt, onClose }) => {
  if (!receipt) {
    return null;
  }

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-1/3 bg-white shadow-xl p-6 border-l overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Receipt Details</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">&times; Close</button>
      </div>

      {/* Placeholder for Receipt Image/PDF */}
      <div className="mb-4 p-4 border rounded text-center bg-gray-50">
        <p className="text-gray-400">Receipt Image/PDF Placeholder</p>
        <div className="my-8 text-4xl">📄</div> {/* Simple icon */}
      </div>

      {/* Receipt Fields Display */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Document Information</h3>
        <p><strong>Document Name:</strong> {receipt.DocumentName}</p>
        <p><strong>Document Type:</strong> {receipt.DocumentType}</p>
      </div>

      {receipt.Invoices.map((invoice, index) => (
        <div key={index} className="mt-4 pt-4 border-t">
          <h3 className="text-lg font-semibold mb-2">Invoice #{index + 1} Details</h3>

          <div className="mb-2">
            <strong className="block text-sm font-medium text-gray-700">Invoice Number:</strong>
            <div
              tabIndex={0}
              className="mt-1 p-2 border border-gray-300 rounded shadow-sm bg-white cursor-text hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              onClick={(e) => e.currentTarget.focus()}
            >
              {invoice.InvoiceNumber}
            </div>
          </div>

          <div className="mb-2">
            <strong className="block text-sm font-medium text-gray-700">Supplier Name:</strong>
            <div
              tabIndex={0}
              className="mt-1 p-2 border border-gray-300 rounded shadow-sm bg-white cursor-text hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              onClick={(e) => e.currentTarget.focus()}
            >
              {invoice.Supplier.Name}
            </div>
          </div>

          <div className="mb-2">
            <strong className="block text-sm font-medium text-gray-700">Supplier Address:</strong>
            <div
              tabIndex={0}
              className="mt-1 p-2 border border-gray-300 rounded shadow-sm bg-white cursor-text hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              onClick={(e) => e.currentTarget.focus()}
            >
              {invoice.Supplier.Address}
            </div>
          </div>
          
          <p><strong>PO Number:</strong> {invoice['PO Number']}</p> {/* This one remains as is */}

          <div className="mb-2">
            <strong className="block text-sm font-medium text-gray-700">Invoice Date:</strong>
            <div
              tabIndex={0}
              className="mt-1 p-2 border border-gray-300 rounded shadow-sm bg-white cursor-text hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              onClick={(e) => e.currentTarget.focus()}
            >
              {invoice.InvoiceDate}
            </div>
          </div>

          <div className="mb-2">
            <strong className="block text-sm font-medium text-gray-700">Subtotal:</strong>
            <div
              tabIndex={0}
              className="mt-1 p-2 border border-gray-300 rounded shadow-sm bg-white cursor-text hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              onClick={(e) => e.currentTarget.focus()}
            >
              {invoice.Currency} {invoice.Subtotal.toFixed(2)}
            </div>
          </div>

          <div className="mb-2">
            <strong className="block text-sm font-medium text-gray-700">Tax:</strong>
            <div
              tabIndex={0}
              className="mt-1 p-2 border border-gray-300 rounded shadow-sm bg-white cursor-text hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              onClick={(e) => e.currentTarget.focus()}
            >
              {invoice.Currency} {invoice.Tax.toFixed(2)}
            </div>
          </div>

          <div className="mb-2">
            <strong className="block text-sm font-medium text-gray-700">Total:</strong>
            <div
              tabIndex={0}
              className="mt-1 p-2 border border-gray-300 rounded shadow-sm bg-white cursor-text hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              onClick={(e) => e.currentTarget.focus()}
            >
              {invoice.Currency} {invoice.Total.toFixed(2)}
            </div>
          </div>
          
          <p><strong>Balance Due:</strong> {invoice.Currency} {invoice.BalanceDue.toFixed(2)}</p> {/* This one remains as is */}
        </div>
      ))}
    </div>
  );
};

export default ReceiptViewer;
