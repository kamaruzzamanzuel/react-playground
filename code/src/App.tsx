import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MuiXDataGrid from './grid-examples/mui-x-data-grid/Index'
import KendoGrid from './grid-examples/kendo-grid/Index'
import AgGrid from './grid-examples/ag-grid/Index'
import { LicenseManager } from "ag-grid-enterprise";
import Root from './Root';
import ResponsiveRowColumnGrid from './grid-system/ResponsiveRowColumnGrid';
import ClaimDetails from './claim-details/ClaimDetails';
import ButtonExamples from "./advanced-buttons/ButtonExamples";
import NotePanel from "./notes/NotePanel";

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
      },
      {
        path: "/claim-details",
        element: <ClaimDetails />,
      },
      {
        path: "/button-examples",
        element: <ButtonExamples/>
      },
      {
        path: "/notes",
        element: <NotePanel/>
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
