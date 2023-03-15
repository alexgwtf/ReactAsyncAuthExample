import React, { FC, useEffect } from "react";
import { useAuth } from "./AuthAsync";

const Child: FC = () => {
    const { user, signIn, signOut } = useAuth();
    const handleSignIn = async () => {
        console.log("clicked sign in");
        const awaitedUser = await signIn(); // [object Object]
        console.log(`handleSignin: in Child component, awaitedUser is ${awaitedUser}`); // [object Object]
        console.log(`handleSignin: in Child component, user (state) is ${user}`); // undefined !
    };

    // DO NOT USE: causes rerender and is executed twice
    // useEffect(() => {
    //     console.log(`useEffect: user is ${user}`); // [object Object]
    // }, [user]);

    const printUser = (user: any) => {
        if (!user) {
            console.log(`printUser(): user is not yet available, so don't attempt to use it`);
            return;
        }
        console.log(`printUser(): user is ${user}`); // always succeeds ! 
    }

    console.log(`FC: user is ${user}`); // undefined on initial render, [object Object] after state changes
    printUser(user);

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
    