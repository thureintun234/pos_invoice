import React from "react";

import { useRoutes } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import DashboardApp from "./pages/DashboardApp";
import CreateInvoice from "./pages/invoice/CreateInvoice";
import ShowInvoices from "./pages/invoice/ShowInvoices";

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "app", element: <DashboardApp /> },

        // invoices
        { path: "create-invoice", element: <CreateInvoice /> },
        { path: "show-invoices", element: <ShowInvoices /> },
      ],
    },
  ]);
}
