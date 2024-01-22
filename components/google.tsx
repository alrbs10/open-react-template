"use client";

import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleLoginButton = () => {
  const clientId =
    "919634700994-agafsf1oofmg1hjimkomniq6f2epcj12.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => console.log(res)}
          onError={() => console.log("Err")}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
