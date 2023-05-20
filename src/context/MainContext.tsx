import React, { useContext, useMemo, useState } from "react";
import { DataItem, MyContextType } from "../types/types";

const MainContext = React.createContext<MyContextType>({
  data: [],
  error: null,
  detailsModalData: null,
  wishListItems: [],
  query: "",
  setDetailsModalData: () => {},
  setWishListItems: () => {},
  setData: () => {},
  setError: () => {},
  setQuery: () => {},
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
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      data,
      error,
      detailsModalData,
      wishListItems,
      query,
      setQuery,
      setDetailsModalData,
      setWishListItems,
      setData,
      setError,
    }),
    [detailsModalData, wishListItems, data, error, query]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
