import React, { FC } from "react";
import { useAuth } from "./AuthAsync";

const Child: FC = () => {
    const { user, signIn, signOut } = useAuth();
    const handleSignIn = async () => {
        console.log("clicked sign in");
        await signIn();
        console.log("in Child component, user is: ",user ? user.username : "undefined");
    };
    return (
        <div>
            <div>User: {user?.username}</div>
            {
                user ? 
                (<button onClick={signOut}>Sign Out</button>) : 
                (<button onClick={handleSignIn}>Sign in</button>)
            }
        </div>
    );
};
    
export default Child;
    