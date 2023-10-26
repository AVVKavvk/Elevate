import React, { createContext, useState } from "react";
export const DataContext = createContext();
function DataProvider({ children }) {
  const [cpp, setCpp] = useState("");
  return (
    <DataContext.Provider
      value={{
        cpp,
        setCpp,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
