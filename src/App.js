import React, { useState, useEffect } from "react";
import SignIn from "./SignIn";
import { auth } from "./firebaseUtils";
import Header from "./Header"

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });
  }, []) //see google authentication2 end of video for memory leak comment.
  
  return (
    <>
      <h1>Welcome to React Parcel Micro App!</h1>
      <Header currentUser={currentUser}/>
      <SignIn />
    </>
  );
}
