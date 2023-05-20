import React, { useContext, useMemo, useState } from "react";

type DataItem = {};

interface MyContextType {
  data: DataItem[] | null;
  error: string | null;
  detailsModalData: DataItem | null;
  wishListItems: DataItem[];
  setDetailsModalData: React.Dispatch<React.SetStateAction<DataItem | null>>;
  setWishListItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const MainContext = React.createContext<MyContextType>({
  data: [],
  error: null,
  detailsModalData: null,
  wishListItems: [],
  setDetailsModalData: () => {},
  setWishListItems: () => {},
  setData: () => {},
  setError: () => {},
});

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainContextProvider({ children }: { children: any }) {
  const [detailsModalData, setDetailsModalData] = useState<DataItem | null>(
    null
  );
  const [wishListItems, setWishListItems] = useState<DataItem[]>([]);
  const [data, setData] = useState<DataItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      detailsModalData,
      setDetailsModalData,
      setWishListItems,
      wishListItems,
      data,
      setData,
      error,
      setError,
    }),
    [detailsModalData, wishListItems, data, error]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
