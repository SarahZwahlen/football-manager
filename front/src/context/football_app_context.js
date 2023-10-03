import { createContext, useState } from "react";

export const Context = createContext();

export function FootballDataProvider({ children }) {
  const [footballData, setFootballData] = useState([]);

  return (
    <Context.Provider value={{ footballData, setFootballData }}>
      {children}
    </Context.Provider>
  );
}
