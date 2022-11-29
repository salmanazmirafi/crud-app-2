import React, { createContext, useState } from "react";

export const UseContext = createContext();
export const UseProvider = (props) => {
  const [user, setUser] = useState([
    { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    { id: 2, name: "Azmi", position: "Data Scientist", salary: 26000 },
    { id: 3, name: "Rafi", position: "Full Stack Dev", salary: 27000 },
  ]);
  return (
    <UseContext.Provider value={[user, setUser]}>
      {props.children}
    </UseContext.Provider>
  );
};
