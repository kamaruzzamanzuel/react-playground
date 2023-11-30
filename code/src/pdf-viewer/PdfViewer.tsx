import React, { useEffect, useState } from 'react';
import lodashDebounce from 'lodash/debounce';
import LoadingPanel from '../shared/detail-text-field/LoadingPanel';
import { Fullscreen } from "@mui/icons-material";
import "./PdfViewer.scss";
import type { ToolbarProps, ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';
import { SelectionMode, selectionModePlugin } from '@react-pdf-viewer/selection-mode';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { version } from "pdfjs-dist";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const FULL_HEIGHT = "calc(100vh - 182px)";

type Props = {
  file?: File;
  url?: string;
  isInModal?: boolean;
  modalTitle?: string;
  preloadInModal?: boolean;
  pageNo?: number;
  viewerHeight?: string;
  setTotalPageCount?: (count: number) => void;
};
// const tooltipOffset = { left: 8, top: 0 };

const PdfViewer = ({
  url,
  file,
  isInModal,
  preloadInModal,
  modalTitle,
  pageNo,
  viewerHeight,
  setTotalPageCount
}: Props) => {
  // const { url, file, isInModal, pageNo, viewerHeight, setTotalPageCount } = props;

  // const [height, setHeight] = useState("calc(100vh - 182px)");
  const [isCollapse, setIsCollapse] = useState<boolean>(true);
  // const [height, setHeight] = useState(viewerHeight ?? "calc(100vh - 234px)");
  const [previewFileUrl, setPreviewFileUrl] = useState(url);

  // const dispatch = useAppDispatch();
  // const dispatchSetGenericModal = (data: TypeGenericModal) => dispatch(setGenericModal(data));

  //#region custom layout

  const bookmarkPluginInstance = bookmarkPlugin();
  const toolbarPluginInstance = toolbarPlugin();
  // const selectionModePluginInstance = selectionModePlugin();
  const selectionModePluginInstance = selectionModePlugin({
    selectionMode: SelectionMode.Text
  });

  const { Toolbar, renderDefaultToolbar } = toolbarPluginInstance;
  const { SwitchSelectionModeButton } = selectionModePluginInstance;

  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    Open: () => <></>,
    OpenMenuItem: () => <></>,
    Download: () => <></>,
    SwitchTheme: () => <></>,
    SwitchThemeMenuItem: () => <></>,
    Search: () => <></>,
    ShowSearchPopover: () => <></>,
    Print: () => <></>,
    EnterFullScreen: () => <></>
    // https://react-pdf-viewer.dev/examples/use-the-default-buttons-to-switch-the-selection-mode/
  });

  const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
  );

  //#endregion

  const pdfHeight = `${viewerHeight}px`
  console.log(pdfHeight);

  const resizeViewport = () => {
    const pages = document.getElementsByClassName("rpv-core__inner-page");

    if (pages.length > 0) {
      // const style = pages[0].getAttribute("style");
      const pageHeight = pages[0].clientHeight;
      // console.log({pageHeight});

      // console.log({ style, pageHeight });
      // if (!isInModal) {
      //   setHeight(`${pageHeight}px`);
      // }
    }
  };

  useEffect(() => {
    // console.log({ pdfJsVersion: version });

    const debouncedResize = lodashDebounce(resizeViewport, 200);
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);
  // console.log({viewerHeight});



  // useEffect(() => {
  //   if (preloadInModal && modalTitle && previewFileUrl) {
  //     loadModal(previewFileUrl, modalTitle);
  //   }
  // }, [preloadInModal, modalTitle, previewFileUrl]);

  useEffect(() => {
    if (file) {
      // setPreviewFile(file);
      setPreviewFileUrl(URL.createObjectURL(file));
    } else {
      setPreviewFileUrl(url);
    }
  }, [file, url]);

  const renderLoader = (percentages: number) => <LoadingPanel isShow={true} />;
  console.log(isCollapse);
  return (
    (preloadInModal && modalTitle)
      ? <></>
      : <div className='pdf-viewer-container-main'
        style={{
          // height: `${!!viewerHeight ? `${viewerHeight}px` : "calc(100vh - 60px)"}`,
          height: `${!!isCollapse ? `${viewerHeight}px` : FULL_HEIGHT}`,
          // maxHeight: height
        }}
      >

        {
          previewFileUrl &&
          <>
            <div className={`pdf-viewer-container ${isInModal ? "pdf-viewer-modal" : ""}`}>
              <Worker workerUrl={`//unpkg.com/pdfjs-dist@${version}/build/pdf.worker.js`}>
                <div
                  className="pdf-viewer"
style={{

  height: `${!!isCollapse ? `${viewerHeight-36}px` : "calc(100vh - 218px)"}`,
}}
                >
                  <div className="pdf-viewer-toolbar">
                    {renderToolbar(Toolbar)}

                    <div className="position-absolute" style={{
                      height: 28,
                      right: 50
                    }}>
                      <span className="d-inline-block" style={{ padding: '0px 2px' }}>
                        <SwitchSelectionModeButton mode={SelectionMode.Hand} />
                      </span>
                      <span className="d-inline-block" style={{ padding: '0px 2px' }}>
                        <SwitchSelectionModeButton mode={SelectionMode.Text} />
                      </span>
                      {
                        previewFileUrl &&
                        <span className="d-inline-block" style={{ padding: '0px 2px' }}>
                          <Fullscreen
                          // className="cursor-pointer"
                          // onClick={() => loadModal(previewFileUrl, modalTitle)}
                          />
                        </span>
                      }
                    </div>
                  </div>

                  <div className="pdf-viewer-content"              >
                    <Viewer
                      fileUrl={previewFileUrl}
                      plugins={[
                        bookmarkPluginInstance,
                        toolbarPluginInstance,
                        selectionModePluginInstance
                      ]}
                      renderLoader={renderLoader}
                      defaultScale={SpecialZoomLevel.PageWidth}
                      onDocumentLoad={(event: any) => {
                        // console.log({ event });

                        if (setTotalPageCount) {
                          setTotalPageCount(document.getElementsByClassName("rpv-core__inner-page").length);
                        }

                        resizeViewport();
                      }}
                      onRotate={resizeViewport}
                    />
                  </div>
                </div>
              </Worker>
            </div>
          </>
        }


        <div className="pdf-footer">
          <button className='collapse-button' onClick={() => setIsCollapse(!isCollapse)}>expand</button>
          <button className='delete-button' onClick={() => console.log("delete butoon clicking")}>DLT</button>
        </div>
      </div>
  );
};

export default PdfViewer;