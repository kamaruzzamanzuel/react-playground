import RouterButton from "../advanced-buttons/RouterButton";
import "./ResponsiveRowColumnGrid.scss";

const ResponsiveRowColumnGrid = () => {
  return (
    <>
      <div className="t-flex t-justify-center t-align-top t-flex-wrap">
        <RouterButton className='t-btn-red'>
          btn-red
        </RouterButton>
      </div>

      new plugin
      <div className="t-container t-border-2 t-border-secondary t-py-5 t-w-[800px] t-bg-cyan">
        <div className="t-row t-py-5 t-bg-primary">
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
          <div className="xl:t-col-3 md:t-col-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">md:col-6 xl:col-3</div></div>
        </div>
      </div>

      bootstrap
      <div className="container t-border-2 t-border-secondary t-py-5 t-w-[800px] t-bg-cyan">
        <div className="row t-py-5 t-bg-primary">
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
          <div className="col-xl-3 col-md-6 t-bg-secondary"><div className="t-mt-2 t-bg-grey-dark">col-xl-3 col-md-6</div></div>
        </div>
      </div>
    </>
  )
};

export default ResponsiveRowColumnGrid;