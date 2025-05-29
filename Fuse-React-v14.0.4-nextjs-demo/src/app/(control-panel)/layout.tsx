import React from 'react';

// Assuming Layout1 is the desired layout component
// Adjust the import path if Layout1 is located elsewhere
// import Layout1 from '@/components/theme-layouts/layout1/Layout1';

// Placeholder for Layout1 until its actual location and props are determined
const Layout1 = ({ children }: { children: React.ReactNode }) => (
  <div>
    <nav>
      <ul>
        <li><a href="/finance-dashboard">Dashboard</a></li>
        <li><a href="/receipts">Receipts</a></li>
        <li><a href="/apps/settings">Settings</a></li>
      </ul>
    </nav>
    <main>{children}</main>
  </div>
);

export default function ControlPanelLayout({ children }: { children: React.ReactNode }) {
  return <Layout1>{children}</Layout1>;
}
