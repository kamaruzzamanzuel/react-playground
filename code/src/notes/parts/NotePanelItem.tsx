import {
  DragIndicator,
  InsertDriveFile,
  MoreVert
} from "@mui/icons-material";
import '../Note.scss';
//   import {
//     // delay,
//     formatDateToString,
//     getLocalStorageItem,
//     openNoteAttachmentBlobInNewTab,
//     openInNewTab,
//     showNotification
//   } from "libs/Helpers";
//   import {
//     setConfirmationModal,
//     setGenericModal,
//     setLoading
//   } from 'store/slices/Shared';
//   import { useAppDispatch } from 'libs/Hooks';
//   import { TypeConfirmationModal } from 'components/shared/modal/ConfirmationModal';
// import { Link } from "react-router-dom";
//   import {
//     DraggableProvided,
//     DraggableStateSnapshot
//   } from "react-beautiful-dnd";
//   import ActionMenu, { TypeMenuAction } from "../common/ActionMenu";
import {
  useEffect,
  useState
} from "react";
import { TypeNote, TypeNoteListItem } from "../Note.Types";
import { formatDateToString } from "../../utlis/Helpers";
//   import {
//     alertNote,
//     deleteNote,
//     deleteNoteDocument,
//     getNoteCategoryList,
//     pinNote
//   } from "apis/Note";
//   import { TypeGenericModal } from "../modal/GenericModal";
//   import { TypeCommonDropdownOptions } from "types/Common.types";
//   import {
//     LOCAL_STORAGE_KEY,
//     NOTIFICATION_TYPE,
//     OPERATION_TYPE
//   } from "libs/Enums";
//   import Note from "components/note/parts/Note";
//   import NoteItemDetails from "./NoteItemDetails";

type TypeProps = {
  item: TypeNote | TypeNoteListItem;
  noteKey?: number | string;
  // provided?: DraggableProvided;
  // snapshot?: DraggableStateSnapshot;
  target?: "_blank" | "_self";
  canDragAndDrop?: boolean;
  isReadOnly?: boolean;
  participantName?: string;
  isParticipantAsset?: boolean;
  // doOnDelete?: TypeNoteOnMutate;
  // doOnNoteMutation?: TypeNoteOnMutate;
};

const NotePanelItem = ({
  item,
  noteKey,
  // provided,
  // snapshot,
  target,
  canDragAndDrop,
  isReadOnly,
  participantName,
  isParticipantAsset,
  // doOnDelete,
  // doOnNoteMutation
}: TypeProps) => {

  const [showContextMenu, setShowContextMenu] = useState(false);

  // const [actionList, setActionList] = useState<TypeMenuAction[]>([]);
  // const [categoryOptions, setCategoryOptions] = useState<TypeCommonDropdownOptions>();

  // const dispatch = useAppDispatch();
  // const dispatchLoading = (val: boolean) => dispatch(setLoading(val));
  // const dispatchSetGenericModal = (data: TypeGenericModal) => dispatch(setGenericModal(data));
  // const dispatchSetConfirmModal = (data: TypeConfirmationModal) => dispatch(setConfirmationModal(data));

  // useEffect(() => {
  //   const actionList: TypeMenuAction[] = [];

  //   if (Object.prototype.hasOwnProperty.call(item, "showContextMenu")) {
  //     const noteItem = item as TypeNoteListItem;

  //     if (noteItem.showContextMenu) {

  //       setShowContextMenu(true);

  //       if (noteItem.showViewButton) {
  //         actionList.push({
  //           label: "view",
  //           handler: async () => await handleLineDetailsModal(noteItem.id, noteItem.showEditButton)
  //         });
  //       }

  //       if (noteItem.showEditButton) {
  //         actionList.push({
  //           label: "Edit",
  //           handler: async () => await handleEditNote(noteItem.id)
  //         });
  //       }

  //       if (isParticipantAsset && noteItem.showPinButton) {
  //         actionList.push({
  //           label: noteItem.isPinned ? "Unpin" : "Pin",
  //           handler: async () => await handlePinNote(noteItem.id, !noteItem.isPinned)
  //         });
  //       }

  //       if (noteItem.showAlertButton) {
  //         actionList.push({
  //           label: noteItem.isAlert ? "Remove Alert" : "Set Alert",
  //           handler: async () => await handleAlertNote(noteItem.id, !noteItem.isAlert)
  //         });
  //       }

  //       if (noteItem.showDeleteButton) {
  //         actionList.push({
  //           label: "Delete",
  //           handler: async () => await handleDeleteNote(noteItem)
  //         });
  //       }
  //     }
  //   }

  //   setActionList(actionList);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const getCategoryOptions = async () => {
  //   try {
  //     await dispatchLoading(true);
  //     const response = await getNoteCategoryList();

  //     if (response.success && response.data) {
  //       const dropdownOptions: TypeCommonDropdownOptions = response.data.items.map(x => ({
  //         text: x.label,
  //         value: x.id,
  //         isSelectable: x.isSelectable
  //       }));

  //       setCategoryOptions(dropdownOptions);
  //       await dispatchLoading(false);

  //       return dropdownOptions;
  //     } else {
  //       throw response.errorMessage;
  //     }
  //   } catch (error: any) {
  //     await dispatchLoading(false);
  //     showNotification(NOTIFICATION_TYPE.ERROR, error);
  //     console.log("Exception", error);
  //   }
  // };

  // const handleLineDetailsModal = async (id: string, canEdit: boolean) => {
  //   const data: TypeGenericModal = {
  //     name: `NOTE_DETAILS_${item}`,
  //     title: "Note / Document Details",
  //     size: "sm",
  //     content: (
  //       <NoteItemDetails
  //         id={item.id}
  //         canEdit={canEdit}
  //       />
  //     ),
  //     isShowFooter: false
  //   };

  //   await dispatchSetGenericModal(data);
  // };

  // const handleEditNote = async (id: string) => {

  //   let localCategoryOptions = categoryOptions;

  //   if (!localCategoryOptions) {
  //     localCategoryOptions = await getCategoryOptions();
  //   }

  //   if (localCategoryOptions) {
  //     await dispatchSetGenericModal({
  //       name: "EDIT_NOTE",
  //       title: "Edit Note / Document",
  //       content: <Note
  //         id={id}
  //         categoryOptions={localCategoryOptions}
  //         participantName={participantName}
  //         isParticipantAsset={isParticipantAsset}
  //         operationType={OPERATION_TYPE.UPDATE}
  //         reloadParent={async (id) => {
  //           if (doOnNoteMutation) {
  //             await doOnNoteMutation(id, "UPDATE");
  //           }
  //         }}
  //       />,
  //       size: 'md',
  //       isShowFooter: false
  //     });
  //   }

  //   await dispatchLoading(false);
  // };

  // const handlePinNote = async (id: string, isPinned: boolean) => {
  //   try {
  //     await dispatchLoading(true);

  //     // await delay(5000);
  //     // alert(id.toString() + " note deleted");

  //     const response = await pinNote(id, isPinned);

  //     if (response.success) {
  //       showNotification(NOTIFICATION_TYPE.SUCCESS, response.successMessage);

  //       if (doOnNoteMutation) {
  //         await doOnNoteMutation(id, "UPDATE");
  //       }

  //       await dispatchLoading(false);
  //     } else {
  //       throw response.errorMessage;
  //     }
  //   } catch (error: any) {
  //     await dispatchLoading(false);
  //     showNotification(NOTIFICATION_TYPE.ERROR, error);
  //     console.log("Exception", error);
  //   }
  // };

  // const handleAlertNote = async (id: string, isAlert: boolean) => {
  //   try {
  //     await dispatchLoading(true);

  //     // await delay(5000);
  //     // alert(id.toString() + " note deleted");

  //     const response = await alertNote(id, isAlert);

  //     if (response.success) {
  //       showNotification(NOTIFICATION_TYPE.SUCCESS, response.successMessage);

  //       if (doOnNoteMutation) {
  //         await doOnNoteMutation(id, "UPDATE");
  //       }

  //       await dispatchLoading(false);
  //     } else {
  //       throw response.errorMessage;
  //     }
  //   } catch (error: any) {
  //     await dispatchLoading(false);
  //     showNotification(NOTIFICATION_TYPE.ERROR, error);
  //     console.log("Exception", error);
  //   }
  // };

  // const handleDeleteNote = async (note: TypeNote | TypeNoteListItem) => {

  //   await dispatchSetConfirmModal({
  //     title: 'Delete Item',
  //     message: 'Are you sure you want to delete this item?',
  //     name: 'confirmNoteDelete',
  //     onConfirm: async () => {
  //       try {
  //         await dispatchLoading(true);

  //         let response;

  //         // await delay(5000);
  //         // alert(id.toString() + " note deleted");

  //         if (note.isFileOnly && note.documents[0].id) {
  //           response = await deleteNoteDocument(note.documents[0].id);
  //         } else {
  //           response = await deleteNote(note.id);
  //         }

  //         if (response.success) {
  //           showNotification(NOTIFICATION_TYPE.SUCCESS, response.successMessage);

  //           if (doOnDelete) {
  //             await doOnDelete(note.id, "DELETE");
  //           }

  //           if (doOnNoteMutation) {
  //             await doOnNoteMutation(note.id, "DELETE");
  //           }

  //           await dispatchLoading(false);
  //         } else {
  //           throw response.errorMessage;
  //         }
  //       } catch (error: any) {
  //         await dispatchLoading(false);
  //         showNotification(NOTIFICATION_TYPE.ERROR, error);
  //         console.log("Exception", error);
  //       }
  //     }
  //   });
  // };

  const downloadFile = async (id: string, downloadUrl?: string) => {
    // const isLoggedIn = getLocalStorageItem(LOCAL_STORAGE_KEY.USER_ID) || false;

    // if (isLoggedIn) {
    //   openNoteAttachmentBlobInNewTab(id, dispatchLoading);
    // } else {
    //   openInNewTab(downloadUrl ?? "", false);
    // }
  };

  return (
    <div
      // className={`${snapshot?.isDragging ? "dragging-item" : ""} note-panel-item-container clearfix`}
      className={`note-panel-item-container clearfix`}
      key={noteKey}
    // ref={provided?.innerRef}
    // {...provided?.draggableProps}
    // {...provided?.dragHandleProps}
    >
      {/* {
          canDragAndDrop && */}
      <div className="item-drag-and-drop-icon">
        <DragIndicator />
      </div>
      {/* } */}

      <div className={`note-panel-item not-draggable-item ${!isReadOnly ? "not-read-only-item" : "read-only-item"}`}>
        {
          item.title &&
          <div className="item-title font-weight-bold">{item.isAlert && <span className="alert-dot"></span>}{item.title}</div>
        }

        {
          item.content &&
          <div className="item-content display-as-pre">{item.content}</div>
        }

        {
          item.hasFile &&
          // item.downloadUrl &&
          <div className="item-file-container mgb-n-sm">
            {/* <a
                href={item.downloadUrl}
                target={`${target ?? "_blank"}`}
                rel="noopener noreferrer"
                className="file-link"
              >
                <InsertDriveFile className="file-icon" />
                <span>{item.fileName}</span>
              </a> */}

            {
              // item.documents.some(x => x.fileKey) &&
              item.documents.map(doc => (
                <div key={doc.id}>
                  <span
                    className="file-link cursor-pointer hover-color-link mgb-sm"
                    onClick={() => downloadFile(doc.id)}
                  >
                    <InsertDriveFile className="file-icon" />
                    <span>{doc.fileName}</span>
                  </span>
                </div>
              ))
            }
          </div>
        }

        <div>
          {
            item.categoryId &&
            // false&&
            <div className="item-category t-float-left">Category: <b>{item.categoryLabel}</b></div>
          }

          {
            (item.createdBy ||
              item.createdAt) &&
            <div className="item-created-info color-grey mgb-sm small t-float-right">
              {
                item.createdBy
                  ? <>
                    {item.createdBy}. {formatDateToString(item.createdAt, "EEE, dd MMM yyyy hh:mm a")}
                  </>
                  : <>
                    {(item.createdAt)}
                  </>
              }
            </div>
          }
        </div>
      </div>

      {/* {
          !isReadOnly && showContextMenu &&
          <div className="note-action-menu-container">
            <ActionMenu
              menuClassName="note-action-menu"
              actionList={actionList}
              menuIcon={<MoreVert />}
              menuProps={{
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'left'
                }
              }}
            />
          </div>
        } */}
    </div >
  );
};

export default NotePanelItem;