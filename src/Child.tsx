import React, { FC } from "react";
import { useAuth } from "./Auth";

const Child: FC = () => {
  const { user, signIn, signOut } = useAuth();
return (
    <div>
    <div>User: {user?.username}</div>
    {
      user ? 
        (<button onClick={signOut}>Sign Out</button>) : 
        (<button onClick={signIn}>Sign in</button>)
    }
    </div>
  );
};
export default Child;
