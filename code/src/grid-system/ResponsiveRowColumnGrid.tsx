import RouterButton from "../advanced-buttons/RouterButton";
import "./ResponsiveRowColumnGrid.scss";

const ResponsiveRowColumnGrid = () => {
  return (
    <>
      <RouterButton className='t-btn-red'>
        btn-red
      </RouterButton>

      <div className="t-grid t-grid-cols-1 lg:t-grid-cols-4 t-gap-4 lg:t-gap-8 m-5">
        <div className="t-border t-p-4 t-text-center t-col-span-1 lg:t-col-span-2">Takes one column on mobile and two on desktop</div>
        <div className="t-border t-p-4 t-text-center">One of three columns</div>
        <div className="t-border t-p-4 t-text-center">One of three columns</div>
      </div>

      <h2 className="t-font-bold t-text-3xl">Example 1</h2>
      <div className="t-mt-4 grid sm:t-grid-flow-col t-gap-4">
        <div className="t-box">1</div>
        <div className="t-box">2</div>
        <div className="t-box">3</div>
      </div>

      <hr className="t-my-10" />

      <h2 className="t-font-bold t-text-3xl">Example 2</h2>
      <div className="t-mt-4 t-grid sm:t-grid-cols-2 md:t-grid-cols-4 t-gap-4">
        <div className="t-box">1</div>
        <div className="t-box">2</div>
        <div className="t-box">3</div>
        <div className="t-box">4</div>
      </div>

      <hr className="t-my-10" />

      <h2 className="t-font-bold t-text-3xl">Example 3</h2>

      <div className="t-mt-4 t-grid t-gap-2 t-grid-cols-12">
        <div className="t-box t-col-span-12">1</div>
        <div className="t-box sm:t-col-span-2">2</div>
        <div className="t-box md:t-col-span-3">3</div>
        <div className="t-box sm:t-col-span-2 md:t-col-span-6">4</div>
      </div>

      Another way

      {/* <div className="t-mt-4 t-gap-4 t-row"> */}
      <div className="t-mt-4 t-gap-4 t-grid t-grid-cols-12">
        <div className="t-box md:t-col-span-6 xl:t-col-span-4">1</div>
        <div className="t-box md:t-col-span-6 xl:t-col-span-4">2</div>
        <div className="t-box md:t-col-span-6 xl:t-col-span-4">3</div>
        <div className="t-box md:t-col-span-6 xl:t-col-span-4">4</div>
      </div>

      new plugin
      <div className="">
        <div className="t-mt-2 t-gap-2 t-row t-row-cols-12">
          <div className="t-col-3">
            1 of 3
          </div>
          <div className="t-col-6">
            2 of 3 (wider)
          </div>
          <div className="t-col-3">
            3 of 3
          </div>
          <div className="t-col-3">
            3 of 3
          </div>
        </div>
        <div className="t-mt-2 t-gap-2 t-row t-row-cols-12">
          <div className="t-col-12">
            1 of 3
          </div>
          <div className="t-col-5">
            2 of 3 (wider)
          </div>
          <div className="t-col-12">
            3 of 3
          </div>
        </div>
        <div className="t-mt-2 t-gap-2 t-row t-row-cols-12">
          <div className="t-col-12 md:t-col-8">col-12 md:col-8</div>
          <div className="t-col-6 md:t-col-4">col-6 md:col-4</div>
        </div>
      </div>
    </>
  )
};

export default ResponsiveRowColumnGrid;