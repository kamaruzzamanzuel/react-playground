import React, { useEffect, useState } from 'react';
import lodashDebounce from 'lodash/debounce';
import LoadingPanel from '../shared/detail-text-field/LoadingPanel';
import "./PdfViewer.scss";
import type { ToolbarProps, ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';
import { SelectionMode, selectionModePlugin } from '@react-pdf-viewer/selection-mode';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { version } from "pdfjs-dist";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import RouterButton from '../advanced-buttons/RouterButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import clsx from 'clsx';


type Props = {
  file?: File;
  url?: string;
  isInModal?: boolean;
  modalTitle?: string;
  preloadInModal?: boolean;
  pageNo?: number;
  viewerHeightClass: string;
  viewerWidthClass: string;
  setTotalPageCount?: (count: number) => void;
};

const PdfViewer = ({
  url,
  file,
  isInModal,
  preloadInModal,
  modalTitle,
  pageNo,
  viewerHeightClass,
  setTotalPageCount
}: Props) => {
  const [height, setHeight] = useState<any>(null);
  const [isCollapse, setIsCollapse] = useState<boolean>(true);
  const [fullHeight, setFullHeight] = useState<string>("")
  const [previewFileUrl, setPreviewFileUrl] = useState(url);
  const bookmarkPluginInstance = bookmarkPlugin();
  const toolbarPluginInstance = toolbarPlugin();
  const selectionModePluginInstance = selectionModePlugin({
    selectionMode: SelectionMode.Text
  });

  const { Toolbar, renderDefaultToolbar } = toolbarPluginInstance;
  const { SwitchSelectionModeButton } = selectionModePluginInstance;

  const resizeViewport = async () => {
    const viewerHeight = document.getElementsByClassName(viewerHeightClass);
    await setHeight(viewerHeight[0].clientHeight);
    const pdfPages = document.getElementsByClassName("rpv-core__inner-page");
    await setFullHeight(`${pdfPages[0].clientHeight + ((pdfPages.length === 1) ? 0 : 3)}px`)
  };

  useEffect(() => {
    const debouncedResize = lodashDebounce(resizeViewport, 200);
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };

  }, []);

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
  const claimDetailsHeight = parseInt(height);

  const screenWidth = window.innerWidth;
  // console.log(screenWidth);
  const mediumBigDevices = screenWidth > 767;
  console.log({ fullHeight });
  return (
    (preloadInModal && modalTitle)
      ? <></>
      : <div
        className="pdf-style"
        style={{
          height: `${(mediumBigDevices) ? `${height}px` : "unset"}`,
        }}
      >
        {
            previewFileUrl &&
            <>
              <div className={`pdf-viewer-container ${isInModal ? "pdf-viewer-modal" : ""}`}>
                <Worker workerUrl={`//unpkg.com/pdfjs-dist@${version}/build/pdf.worker.js`}>
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
                    </div>
                  </div>

                  <div className="pdf-viewer-content"

                    style={{
                      height: `${(!!isCollapse && mediumBigDevices) ? `${height - 80}px` : fullHeight}`,
                    }}
                  >
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
                </Worker>
              </div>
            </>
          }

          <div className="pdf-footer">
            {
              mediumBigDevices &&
              <RouterButton
                className='btn-icon btn-small btn-secondary pdf-expand'
                onClick={() => setIsCollapse(!isCollapse)}
              >
                <ExpandCircleDownOutlinedIcon className={clsx((!isCollapse && mediumBigDevices) && "expanded")} />
              </RouterButton>
            }

            <RouterButton
              className='btn-icon btn-small btn-error delete-btn'
              onClick={
                () => console.log("delete butoon clicking")
              }
            >
              <DeleteIcon />
            </RouterButton>
          </div>
      </div>
  );
};

export default PdfViewer;