interface Collection<T> extends TableCommon {
   success: boolean;
   message?: string;
   collection: T[];
   ids: any[];
}

interface SingleCollection<T> extends TableCommon {
   success: boolean;
   message?: string;
   collection: T;
   ids: any[];
}
