import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./layout/index";
import DashboardApp from "./pages/DashboardApp";
import CreateInvoice from "./pages/invoice/CreateInvoice";
import ShowInvoices from "./pages/invoice/ShowInvoices";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import AuthRoute from "./routers/AuthRoute";
import PrivateRoute from "./routers/PrivateRoute";

export default function Router() {
  const auth = useSelector((state) => state.auth);

  return useRoutes([
    {
      path: "/dashboard",
      element: (
        <AuthRoute auth={auth}>
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        </AuthRoute>
      ),
      children: [
        { path: "app", element: <DashboardApp /> },

        // invoices
        { path: "create-invoice", element: <CreateInvoice /> },
        { path: "show-invoices", element: <ShowInvoices /> },
      ],
    },
    {
      path: "/auth/login",
      element: (
        <PrivateRoute auth={auth}>
          <Login />
        </PrivateRoute>
      ),
    },
    { path: "/", element: <Navigate to='/dashboard/app' /> },
    { path: "404", element: <Page404 /> },
    { path: "*", element: <Navigate to='/404' /> },
  ]);
}
