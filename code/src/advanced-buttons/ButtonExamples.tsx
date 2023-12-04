import React from 'react';
import RouterButton from './RouterButton';
import { CheckCircle, Delete, Segment } from '@mui/icons-material';
// import CheckCircle from ''

export const ButtonExamples = () => {
  return (
    <>
      <h3>Button Color Primary</h3>

      <div className='t-flex t-justify-center t-items-center t-gap-5 t-pb-5'>
        {/* <Button component="a" href="/">
          Home 2
        </Button> */}
        <RouterButton variant='outlined' className='btn-color-primary'>
          Outlined
        </RouterButton>
        <RouterButton variant='outlined' className='btn-color-primary' disabled >
          Outlined Disabled
        </RouterButton>
        <RouterButton className='btn-color-primary'>
          Regular
        </RouterButton>
        <RouterButton className='btn-color-primary' disabled>
          Regular Disabled
        </RouterButton>
        <RouterButton className='btn-color-primary btn-small'>
          Small
        </RouterButton>
      </div>

      <h3>Button Color Secondary</h3>

      <div className='t-flex t-justify-center t-items-center t-gap-5 t-pb-5'>
        <RouterButton variant='outlined' className='btn-color-secondary'>
          Outlined
        </RouterButton>
        <RouterButton variant='outlined' className='btn-color-secondary' disabled >
          Outlined Disabled
        </RouterButton>
        <RouterButton className='btn-color-secondary'>
          Regular
        </RouterButton>
        <RouterButton className='btn-color-secondary' disabled>
          Regular Disabled
        </RouterButton>
        <RouterButton className='btn-color-secondary btn-small'>
          Small
        </RouterButton>
      </div>

      <h3>Button Color Grey</h3>

      <div className='t-flex t-justify-center t-items-center t-gap-5 t-pb-5'>
        <RouterButton variant='outlined' className='btn-color-grey'>
          Outlined
        </RouterButton>
        <RouterButton variant='outlined' className='btn-color-grey' disabled >
          Outlined Disabled
        </RouterButton>
        <RouterButton className='btn-color-grey'>
          Regular
        </RouterButton>
        <RouterButton className='btn-color-grey' disabled>
          Regular Disabled
        </RouterButton>
        <RouterButton className='btn-color-grey btn-small'>
          Small
        </RouterButton>
      </div>

      <h3>Button Secondary</h3>

      <div className='t-flex t-justify-center t-items-center t-flex-wrap t-gap-5 t-pb-5'>
        <RouterButton className='btn-secondary'>
          Button Secondary
        </RouterButton>
        <RouterButton className='btn-secondary btn-custom-1 t-w-[500px]'>
          With Icon<CheckCircle />
        </RouterButton>
        <RouterButton className='btn-secondary' disabled>
          Button Secondary Disabled
        </RouterButton>
        <RouterButton className='btn-secondary' variant='outlined'>
          Button Secondary Outlined
        </RouterButton>
        <RouterButton className='btn-secondary' variant='outlined' disabled>
          Button Secondary Outlined Disabled
        </RouterButton>
      </div>

      <h4>Button Grey 1</h4>

      <div className='t-flex t-justify-center t-items-center t-flex-wrap t-gap-5 t-pb-5'>
        <RouterButton className='btn-grey-1'>
          Button Grey Light
        </RouterButton>
        <RouterButton className='btn-grey-1' disabled>
          Button Grey Light Outlined
        </RouterButton>
        <RouterButton className='btn-grey-1 btn-hover-grey-2'>
          Button Grey Light to Dark
        </RouterButton>
        <RouterButton className='btn-grey-1 btn-hover-grey-2' disabled>
          Button Grey Light to Dark
        </RouterButton>
      </div>

      <h4>Button Grey 2</h4>

      <div className='t-flex t-justify-center t-items-center t-flex-wrap t-gap-5 t-pb-5'>
        <RouterButton className='btn-grey-2'>
          Button Grey Dark
        </RouterButton>
        <RouterButton className='btn-grey-2' disabled>
          Button Grey Dark
        </RouterButton>
      </div>

      <h4>Button Grey 3</h4>

      <div className='t-flex t-justify-center t-items-center t-flex-wrap t-gap-5 t-pb-5'>
        <RouterButton className='btn-grey-3 btn-icon'>
          <Segment />
        </RouterButton>
        <RouterButton className='btn-grey-3 btn-icon btn-small'>
          <Delete />
        </RouterButton>
      </div>

      <h4>Button Error</h4>

      <div className='t-flex t-justify-center t-items-center t-flex-wrap t-gap-5 t-pb-5'>
        <RouterButton className='btn-error'>
          Button Error
        </RouterButton>
        <RouterButton className='btn-error' disabled>
          Button Error
        </RouterButton>
      </div>
    </>
  )
}

export default ButtonExamples;
