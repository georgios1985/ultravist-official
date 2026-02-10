import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user] = useState({ name: "Georgios", plan: "PRO" });
  const [credits] = useState(9963);

  return (
    <AuthContext.Provider value={{ user, credits }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
