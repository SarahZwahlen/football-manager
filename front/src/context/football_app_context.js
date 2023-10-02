import { createContext, useState } from "react";

export const Context = createContext();

export function FootballDataProvider({ children }) {
  const [footballData, setFootballData] = useState(["1"]);
  return (
    <Context.Provider value={{ footballData, setFootballData }}>
      {children}
    </Context.Provider>
  );
}

// const teamsList = [
//   {
//     teamName: "The team",
//     jerseyColor: "red",
//     players: [
//       {
//         name: "joueur 1",
//         age: 18,
//         playerPosition: "attaquant",
//         isStarterPlayer: true,
//       },
//     ],
//   },
// ];
