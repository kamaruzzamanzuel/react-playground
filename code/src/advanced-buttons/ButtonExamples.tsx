import React from 'react';
import RouterButton from './RouterButton';

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

      <h3>Button Secondary</h3>

      <div className='t-flex t-justify-center t-items-center t-flex-wrap t-gap-5 t-pb-5'>
        <RouterButton className='btn-secondary'>
          Button Secondary
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

      <h4>Button Grey Light</h4>

      <div className='t-flex t-justify-center t-items-center t-flex-wrap t-gap-5 t-pb-5'>
        <RouterButton className='btn-grey-light'>
          Button Grey Light
        </RouterButton>
        <RouterButton className='btn-grey-light' disabled>
          Button Grey Light Outlined
        </RouterButton>
        <RouterButton className='btn-grey-light btn-hover-grey-dark'>
          Button Grey Light to Dark
        </RouterButton>
        <RouterButton className='btn-grey-light btn-hover-grey-dark' disabled>
          Button Grey Light to Dark
        </RouterButton>
      </div>

      <h4>Button Grey Dark</h4>

      <div className='t-flex t-justify-center t-items-center t-flex-wrap t-gap-5 t-pb-5'>
        <RouterButton className='btn-grey-dark'>
          Button Grey Dark
        </RouterButton>
        <RouterButton className='btn-grey-dark' disabled>
          Button Grey Dark
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
