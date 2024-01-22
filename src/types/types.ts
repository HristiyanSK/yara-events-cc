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

export type DataItem = {
  name: string;
  id: string;
  start_time: string;
  start_date: string;
  primary_venue: {
    address: {
      localized_area_display: string;
    };
  };
  ticketCount: number;
  summary: string;
  ticket_availability: {
    maximum_ticket_price: {
      display: string;
    };
  };
  image: {
    url: string;
  };
};

export interface MainContextType {
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
