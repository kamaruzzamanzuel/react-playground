import { useEffect, useState } from "react";
import lodashDebounce from 'lodash/debounce';
import PdfViewer from "../../pdf-viewer/PdfViewer";
import ImageViewer from "../image-viewer/ImageViewer";

const getFileExtension = (fileName: string) => {
  // console.log({fileName:fileName.split(".").pop()});
  return fileName.split('.').pop();
};

type TypeProps = {
  viewerHeightClass: string;
  url: string
}

const FileViewer = ({ viewerHeightClass, url }: TypeProps) => {
  const [height, setHeight] = useState<any>(null);
  const [fullHeight, setFullHeight] = useState<string>("")
  const [previewFileType, setPreviewFileType] = useState<string>();

  const handleFilePathChange = (filePath?: string) => {
    if (filePath) {
      console.log({ filePath });
      const splitFilePath = filePath.split("?");

      if (splitFilePath.length > 1) {
        filePath = splitFilePath[0];
      }

      setPreviewFileType(getFileExtension(filePath)?.toLocaleLowerCase());
      console.log('getFileExtension(filePath) :>> ', getFileExtension(filePath));
    } else {
      setPreviewFileType(undefined);
    }
  };

  const resizeViewport = async () => {

    const viewerHeight = document.getElementsByClassName(viewerHeightClass);
    await setHeight(viewerHeight[0].clientHeight);
    const pdfPages = document.getElementsByClassName("rpv-core__inner-page");
    // await setFullHeight(`${pdfPages[0].clientHeight + (pdfPages.length === 1 ? 0 : 3)}px`)
    await setFullHeight(`${pdfPages[0].clientHeight}px`);
  };


  useEffect(() => {
    if (url) {
      handleFilePathChange(url)
    }
    resizeViewport()
    const debouncedResize = lodashDebounce(resizeViewport, 200);
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };

  }, []);
console.log({fullHeight});
  return (
    <>
      {
        previewFileType === "pdf" &&
        <PdfViewer url={url} alignDivHeight={height} pageFullHeight={fullHeight} resizeViewport={resizeViewport}/>
      }
      {
         previewFileType !== "pdf" &&
         <ImageViewer url={url} alignDivHeight={height}/>
      }
    </>
  );
};

export default FileViewer;