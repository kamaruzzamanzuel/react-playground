import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MuiXDataGrid from './grid-examples/mui-x-data-grid/Index'
import KendoGrid from './grid-examples/kendo-grid/Index'
import AgGrid from './grid-examples/ag-grid/Index'

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

      {/* <MuiXDataGrid /> */}
      {/* <KendoGrid/> */}
      <AgGrid />
    </>
  )
}

export default App
