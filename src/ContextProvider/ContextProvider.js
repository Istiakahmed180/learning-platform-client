import React, { Children } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
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

  const updateNameAndPhoto = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        githubSignIn,
        createEmainAndPasswordSignIn,
        signInEmailAndPassword,
        updateNameAndPhoto,
        emailVerify,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
