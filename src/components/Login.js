import React from 'react';
import { useEffect } from 'react';
import Button from "@mui/material/Button";
import jwtDecode from 'jwt-decode';

export default function Login({setUser}) {
  function handleCallbackResponse(response) {
    console.log("Encode JWT ID token: "+response.credential);
    var userObject = jwtDecode(response.credential);
    
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"29590236598-alphn4fh5f8lakt2mt8ncj16o5qoqdgc.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: 'filled_blue',
      size: 'medium',
      type: 'standard',
      text: 'continue_with',}
    )
  }, [])

  return (
    <Button id="signInDiv"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                padding: "2vh 4vh",
              }}
            >
              Login
            </Button>
  )
}
