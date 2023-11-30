export type TypeNoteListItem = {
    id: string;
    agencyId: string;
    participantId?: string;
    participantName?: string;
    categoryId?: string;
    categoryLabel?: string;
    holderId?: string;
    holderType?: string;
    title?: string;
    content?: string | null;
    contentShort?: string | null;
    hasFile: boolean;
    isPinned: boolean;
    isAlert: boolean;
    // isFileOnly: boolean;
    rank: number | null;
    createdBy?: string;
    createdAt: Date | string;
    showContextMenu: boolean;
    showPinButton: boolean;
    showAlertButton: boolean;
    // showViewButton: boolean;
    showEditButton: boolean;
    showDeleteButton: boolean;
    documents: TypeNoteDocumentsItem[];
};

export type TypeNoteDocumentsItem = {
    id: string;
    fileKey: string;
    fileName: string;
    // downloadUrl: string;
    container: string;
    sizeBytes: number;
    // sizeLabel: string;


    // "id": "9KOASO683E93A372EFE24C1FA88C6A6F42A0DAA3",
    // "fileKey": "participant/9KOASO683E93A372EFE24C1FA88C6A6F42A0DAA3.pdf",
    // "fileName": "Network_Nursing_Inv-898PP-87 Donald Buckley.pdf",
    // "container": "acme",
    // "sizeBytes": 178321
};

export type TypeNote = {
    id: string;
    categoryId?: string;
    categoryLabel?: string;
    hasFile: boolean,
    // fileKey?: string;
    // fileName?: string;
    downloadUrl?: string;
    title?: string;
    content?: string;
    rank?: number;
    isAlert: boolean;
    isFileOnly: boolean;
    createdBy: string;
    createdAt: Date;
    documents: TypeNoteDocumentsItem[];
};