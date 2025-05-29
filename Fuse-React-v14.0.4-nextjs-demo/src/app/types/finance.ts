export interface Supplier {
  Name: string;
  Address: string;
}

export interface Invoice {
  InvoiceNumber: string;
  Supplier: Supplier;
  'PO Number': string; // Keep as string key due to space
  InvoiceDate: string; // Representing date as string (e.g., ISO format)
  BalanceDue: number;  // Representing decimal as number
  Currency: string;
  Subtotal: number;    // Representing decimal as number
  Tax: number;         // Representing decimal as number
  Total: number;       // Representing decimal as number
}

export interface Receipt {
  DocumentType: string;
  DocumentName: string;
  Invoices: Invoice[];
}
