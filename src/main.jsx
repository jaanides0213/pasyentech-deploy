import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from "./Routes/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="dashboard">Dashboard</Link><br/>
        <Link to="patients">Patients</Link><br/>
        <Link to="prescription">Prescription</Link><br/>
        <Link to="appointments">Appointments</Link><br/>
        <Link to="account">Account Details</Link><br/>
      </div>
    ),
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
  {
    path: "patients",
    element: <div>Patients</div>,
  },
  {
    path: "prescription",
    element: <div>Presciption</div>,
  },
  {
    path: "appointments",
    element: <div>Appointments</div>,
  },
  {
    path: "account",
    element: <div>Account Details</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);