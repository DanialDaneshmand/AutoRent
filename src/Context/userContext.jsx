import { createContext } from "react";
import React, { useContext, useReducer } from "react";


const UserContext = createContext();


function UserProvider({ children }) {

  return (
    <UserContext.Provider value={  }>{children}</UserContext.Provider>
  );
}

export default UserProvider;

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("not found user context");
  return context;
}
