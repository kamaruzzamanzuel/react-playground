import { useState } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MuiXDataGrid from './grid-examples/mui-x-data-grid/Index'
import KendoGrid from './grid-examples/kendo-grid/Index'
import AgGrid from './grid-examples/ag-grid/Index'
import { LicenseManager } from "ag-grid-enterprise";
import Root from './Root';
import ResponsiveRowColumnGrid from './grid-system/ResponsiveRowColumnGrid';
LicenseManager.setLicenseKey("KEY HERE");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/ag-grid",
        element: <AgGrid />
      },
      {
        path: "/mui-x-grid",
        element: <MuiXDataGrid />
      },
      {
        path: "/kendo-grid",
        element: <KendoGrid />
      },
      {
        path: "/responsive-row-column-grid",
        element: <ResponsiveRowColumnGrid />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
