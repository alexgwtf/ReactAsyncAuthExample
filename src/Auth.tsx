import React, { useState, FC, useContext, createContext } from "react";
interface User {
  username: string;
  uid: string;
}
interface AuthContext {
  user?: User;
  signIn: () => void;
  signOut: () => void;
}
const authContext = createContext({} as AuthContext);
export const useAuth = () => {
  return useContext(authContext);
};
const USER_DATA: User = { username: "theo", uid: "123456" };
function useProvideAuth() {
  const [user, setUser] = useState<User>();
  const signIn = () => {
    setUser(USER_DATA)
  };
  const signOut = () => {
    setUser(undefined);
  };
  return { user, signIn, signOut };
}
const ProvideAuth: FC = ({ children }) => {
  const auth: AuthContext = useProvideAuth();
  return(
    <authContext.Provider value={auth}>
    {children}
    </authContext.Provider>
    );
  };
  export default ProvideAuth;
  