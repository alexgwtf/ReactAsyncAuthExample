import React, { useState, FC, useContext, createContext } from "react";
interface User {
    username: string;
    uid: string;
}
interface AuthContext {
    user?: User;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}
const authContext = createContext({} as AuthContext);
export const useAuth = () => {
    return useContext(authContext);
};
const DEFAULT_USER: User = { username: "theo", uid: "123456" };
function useProvideAuth() {
    const [user, setUser] = useState<User>();
    const signIn = async () => {
        const secondsToWait: number = 3;

        let p = new Promise((resolve, reject) => {
            let interval = setInterval(() => {
                console.log("waiting for server response")
            }, 1000);
            
            setTimeout(() => {
                console.log('set DEFAULT_USER in context');
                setUser(DEFAULT_USER);
                clearInterval(interval);
            }, secondsToWait*1000);
        });
        await p;
      };
      const signOut = async () => {
        console.log('set undefined user in context');
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
    