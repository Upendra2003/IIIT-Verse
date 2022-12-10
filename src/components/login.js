import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect,isAuthenticated} = useAuth0();

  return( 
     !isAuthenticated && (
   <button onClick={() => loginWithRedirect()} className=' lbtn mt-7 mr-5 border-purple-500 text-purple-500 text-lg bg-transparent border rounded-full pl-7 pr-7 pt-1 pb-2'>
    Sign In
    </button>)
    )
}

export default LoginButton;