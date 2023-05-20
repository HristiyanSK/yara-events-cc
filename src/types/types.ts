export interface EventData {
  name: string;
  date: string;
  location: string;
  ticket: string;
  picture: File | null;
}

export interface EventItem extends EventData {
  id: string;
}

export type DataItem = {};

export interface MyContextType {
  data: DataItem[] | null;
  error: string | null;
  detailsModalData: DataItem | null;
  wishListItems: DataItem[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setDetailsModalData: React.Dispatch<React.SetStateAction<DataItem | null>>;
  setWishListItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}
