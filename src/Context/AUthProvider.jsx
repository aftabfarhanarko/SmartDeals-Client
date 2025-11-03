import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";
const provider = new GoogleAuthProvider();
const AUthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const userCreat = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updeatUser = (updet) => {
    setLoding(true);
    return updateProfile(auth.currentUser, updet);
  };

  const userLogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, provider);
  };

  const logOutUser = () => {
    setLoding(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsybcripet = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        console.log("This is a CUrrent User", currentUser)
        const logIndUser = {email:currentUser.email}
        fetch(`http://localhost:3000/jseonToken`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body:JSON.stringify(logIndUser)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Data In Insart Of The JWT Tokens Cooking", data);
          });
      }
      setLoding(false);
    });

    return () => {
      unsybcripet();
    };
  }, []);

  const authInfo = {
    userCreat,
    updeatUser,
    googleLogin,
    loding,
    user,
    userLogin,
    logOutUser,
  };
  return (
    <div>
      <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>
    </div>
  );
};

export default AUthProvider;
