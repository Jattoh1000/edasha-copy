import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    msg: "hhhh",
    first_name: "David",
    last_name: "Dosu",
    amount: 290,
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  if (!user || user == {} || user == undefined || user == null) {
    throw new Error("No user provided");
  }

  return { user, setUser };
};
