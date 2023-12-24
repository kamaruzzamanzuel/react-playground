import "./ImageViewer.scss"

type TypeProps = {
  url:string;
  alignDivHeight:number;
}
const ImageViewer = ({url,alignDivHeight}:TypeProps) => {
  const divHeight = `${alignDivHeight-50}px`
  return (
    <div style={{backgroundColor:"ButtonFace",height:divHeight,overflowY:"scroll"}}>
      <img src={url} alt="image" style={{padding:"5px"}}/>
    </div>
  );
};

export default ImageViewer;