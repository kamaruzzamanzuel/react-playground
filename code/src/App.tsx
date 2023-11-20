import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MuiXDataGrid from './grid-examples/mui-x-data-grid/Index'
import KendoGrid from './grid-examples/kendo-grid/Index'
import AgGrid from './grid-examples/ag-grid/Index'
import { LicenseManager } from "ag-grid-enterprise";
import RouterButton from './advanced-buttons/RouterButton'
LicenseManager.setLicenseKey("KEY HERE");

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <div>
      <RouterButton to='/ag-grid'>
        AG Grid
      </RouterButton>
      <RouterButton to='/mui-x-grid'>
        MUI X Grid
      </RouterButton>
      <RouterButton to='/kendo-grid'>
        Kendo Grid
      </RouterButton>
    </div>,
  },
  {
    path: "/ag-grid",
    element: <AgGrid />,
  },
  {
    path: "/mui-x-grid",
    element: <MuiXDataGrid />,
  },
  {
    path: "/kendo-grid",
    element: <KendoGrid />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div>
        <RouterButton to='/ag-grid'>
          AG Grid
        </RouterButton>
        <RouterButton to='/mui-x-grid'>
          MUI X Grid
        </RouterButton>
        <RouterButton to='/kendo-grid'>
          Kendo Grid
        </RouterButton>
      </div>

      <RouterProvider router={router} />

    </>
  )
}

export default App
