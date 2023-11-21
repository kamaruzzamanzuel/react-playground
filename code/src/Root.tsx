import { useState } from 'react'
import RouterButton from './advanced-buttons/RouterButton'
import { Outlet } from 'react-router-dom';

const Root = () => {
  const [count, setCount] = useState(0);

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

      <Outlet />
    </>
  )
}

export default Root