import React, { Children } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
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

  const createEmainAndPasswordSignIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        githubSignIn,
        createEmainAndPasswordSignIn,
        signInEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
