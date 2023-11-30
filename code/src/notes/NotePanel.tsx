import { useEffect, useState } from 'react';
import { TypeNote, TypeNoteListItem } from './Note.Types';
import { data } from './DummyData';
import NotePanelItem from './parts/NotePanelItem';
import './Note.scss'

type Props = {
  attachmentType?: "PARTICIPANT" | "HOLDER" | "CLAIM_FACTS";
  items?: TypeNoteListItem[];
  // canAddNote?: boolean;
  // isPinnedWhenAdd?: boolean;
  // canDragAndDrop?: boolean;
  // holderId?: string;
  // holderType?: string;
  // participantName?: string;
  // participantNdisRef?: string;
  // providerName?: string;
  // providerAbn?: string;
  // isParticipantAsset?: boolean;
  // agencyId?: string;
  // isReadOnly?: boolean;
  // isModal?: boolean;
  // titleClassName?: string;
  // hubResponse?: TypeEventHubResponse;
  // doOnMutation?: TypeNoteOnMutate;
  // doOnNoteMutation?: TypeNoteOnMutate;
};

export const NotePanel = ({
  attachmentType,
  items }: Props) => {
  const [localItems, setLocalItems] = useState<TypeNoteListItem[]>(items ?? []);

  const onMount = () => {
    const noteListItems = data.items;
    setLocalItems(noteListItems);
  }

  useEffect(() => {
    onMount();
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-lg-6 left-div'>

        </div>
        <div className='col-lg-6 note-panel'>
          {
            localItems.length > 0 &&
            localItems.map((item, index) =>
              <NotePanelItem
                noteKey={index}
                key={index}
                item={item}
              // isParticipantAsset={isParticipantAsset ?? false}
              // participantName={participantName}
              // canDragAndDrop={false}
              // doOnDelete={doOnMutation}
              // doOnNoteMutation={async () => {
              //   if (attachmentType === "PARTICIPANT" || attachmentType === "HOLDER") {
              //     await loadAttachments(attachmentType);
              //   }

              //   if (doOnNoteMutation) {
              //     doOnNoteMutation();
              //   }
              // }}
              />
            )
          }
        </div>

        {
          localItems.length === 0 &&
          <div className="no-attachments-found">
            <h3 className="text-center">There are currently no notes or documents to display.</h3>
          </div>
        }
      </div>
    </>
  )
}

export default NotePanel;