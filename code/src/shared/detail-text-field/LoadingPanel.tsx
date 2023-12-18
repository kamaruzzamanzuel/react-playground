interface Props {
  isShow?: boolean;
  height?: string;
}

const LoadingPanel = ({ isShow, height }: Props) => {
  return (
    <>
      {
        isShow &&
        <div
          className='local-loading active'
          style={{
            height: height ?? "100%"
          }}
        >
        </div>
      }
    </>
  );
};

export default LoadingPanel;