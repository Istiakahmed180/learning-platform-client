import React, { Children } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firevase/Firebase.init";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const createEmainAndPasswordSignIn = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateNameAndPhoto = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        githubSignIn,
        createEmainAndPasswordSignIn,
        signInEmailAndPassword,
        updateNameAndPhoto,
        emailVerify,
        user,
        signOutUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
