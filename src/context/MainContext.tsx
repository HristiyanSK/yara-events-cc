import React, { useContext, useMemo, useState } from "react";

const MainContext = React.createContext({
  setDetailsModalData: (state: any) => state,
  detailsModalData: null,
});

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainContextProvider({ children }: { children: any }) {
  const [detailsModalData, setDetailsModalData] = useState(null);

  const value = useMemo(
    () => ({
      detailsModalData,
      setDetailsModalData,
    }),
    [detailsModalData, setDetailsModalData]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
