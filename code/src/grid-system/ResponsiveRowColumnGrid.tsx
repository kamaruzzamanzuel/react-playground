import "./ResponsiveRowColumnGrid.scss";

const ResponsiveRowColumnGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 m-5">
        <div className="border p-4 text-center col-span-1 lg:col-span-2">Takes one column on mobile and two on desktop</div>
        <div className="border p-4 text-center">One of three columns</div>
        <div className="border p-4 text-center">One of three columns</div>
      </div>

      <h2 className="font-bold text-3xl">Example 1</h2>
      <div className="mt-4 grid sm:grid-flow-col gap-4">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
      </div>

      <hr className="my-10" />

      <h2 className="font-bold text-3xl">Example 2</h2>
      <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
      </div>

      <hr className="my-10" />

      <h2 className="font-bold text-3xl">Example 3</h2>

      <div className="mt-4 grid gap-2 grid-cols-12">
        <div className="box col-span-12">1</div>
        <div className="box sm:col-span-2">2</div>
        <div className="box md:col-span-3">3</div>
        <div className="box sm:col-span-2 md:col-span-6">4</div>
      </div>

      Another way

      {/* <div className="mt-4 gap-4 row"> */}
      <div className="mt-4 gap-4 grid grid-cols-12">
        <div className="box md:col-span-6 xl:col-span-4">1</div>
        <div className="box md:col-span-6 xl:col-span-4">2</div>
        <div className="box md:col-span-6 xl:col-span-4">3</div>
        <div className="box md:col-span-6 xl:col-span-4">4</div>
      </div>

      new plugin
      <div className="">
        <div className=" mt-2 gap-2 row row-cols-12">
          <div className="col-3">
            1 of 3
          </div>
          <div className="col-6">
            2 of 3 (wider)
          </div>
          <div className="col-3">
            3 of 3
          </div>
          <div className="col-3">
            3 of 3
          </div>
        </div>
        <div className="mt-2 gap-2 row row-cols-12">
          <div className="col-12">
            1 of 3
          </div>
          <div className="col-5">
            2 of 3 (wider)
          </div>
          <div className="col-12">
            3 of 3
          </div>
        </div>
        <div className="mt-2 gap-2 row row-cols-12">
          <div className="col-12 md:col-8">col-12 md:col-8</div>
          <div className="col-6 md:col-4">col-6 md:col-4</div>
        </div>
      </div>
    </>
  )
};

export default ResponsiveRowColumnGrid;