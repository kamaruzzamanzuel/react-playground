import { useState } from 'react'
import RouterButton from './advanced-buttons/RouterButton'
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';

const Root = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>

      <div className="card">
        <button className='vite-increment' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className='t-flex t-justify-center t-gap-5 t-pb-5'>
        <RouterButton to='/ag-grid' className='btn-color-primary' variant='outlined'>
          AG Grid
        </RouterButton>
        {/* <RouterButton to='/mui-x-grid' target="_blank" className='hover:text-black hover:!bg-white'> */}
        <RouterButton to='/mui-x-grid' className='btn-color-primary' color='secondary'>
          MUI X Grid
        </RouterButton>
        <RouterButton to='/kendo-grid'>
          Kendo Grid
        </RouterButton>
        <RouterButton to='/responsive-row-column-grid'>
          Responsive Row Column Grid
        </RouterButton>
        <RouterButton to='/claim-details'>
          Claim Details
        </RouterButton>
        <RouterButton to='/notes'>
          Notes
        </RouterButton>
        <RouterButton to='/button-examples'>
          Button Examples
        </RouterButton>
      </div>

      <Outlet />
    </>
  )
}

export default Root;