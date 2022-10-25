import React, { Children } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firevase/Firebase.init";
import { createContext } from "react";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  return (
    <AuthContext.Provider value={{ googleSignIn, githubSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
