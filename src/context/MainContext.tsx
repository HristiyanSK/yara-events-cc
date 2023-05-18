import React, { useContext, useMemo, useState } from "react";

type DataItem = {};

interface MyContextType {
  detailsModalData: DataItem | null;
  setDetailsModalData: React.Dispatch<React.SetStateAction<DataItem | null>>;
  setWishListItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
  wishListItems: DataItem[];
}

const MainContext = React.createContext<MyContextType>({
  detailsModalData: null,
  setDetailsModalData: () => {},
  setWishListItems: () => {},
  wishListItems: [],
});

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainContextProvider({ children }: { children: any }) {
  const [detailsModalData, setDetailsModalData] = useState<DataItem | null>(
    null
  );
  const [wishListItems, setWishListItems] = useState<DataItem[]>([]);

  const value = useMemo(
    () => ({
      detailsModalData,
      setDetailsModalData,
      setWishListItems,
      wishListItems,
    }),
    [detailsModalData, wishListItems]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
