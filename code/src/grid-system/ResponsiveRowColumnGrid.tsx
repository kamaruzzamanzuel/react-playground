
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

      <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-12">
        <div className="box">1</div>
        <div className="box sm:col-span-2">2</div>
        <div className="box md:col-span-3">3</div>
        <div className="box sm:col-span-2 md:col-span-6">4</div>
      </div>

      Another way

      <div className="mt-4 grid gap-4 grid-cols-12">
        <div className="box col-span-6 sm:col-span-4 md:col-span-1">1</div>
        <div className="box col-span-6 sm:col-span-8 md:col-span-2">2</div>
        <div className="box col-span-6 sm:col-span-4 md:col-span-3">3</div>
        <div className="box col-span-6 sm:col-span-8 md:col-span-6">4</div>
      </div>
    </>
  )
};

export default ResponsiveRowColumnGrid;