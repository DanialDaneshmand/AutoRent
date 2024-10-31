import { createContext, useState } from "react";
import React, { useContext, useReducer } from "react";

const UserContext = createContext();
const UserContextDispatcher = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={user}>
      <UserContextDispatcher.Provider value={setUser}>
        {children}
      </UserContextDispatcher.Provider>
    </UserContext.Provider>
  );
}

export default UserProvider;

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("not found user context");
  return context;
}

export function useUserDispatch() {
  const context = useContext(UserContextDispatcher);
  if (context === undefined) throw new Error("not found user context");
  return context;
}
