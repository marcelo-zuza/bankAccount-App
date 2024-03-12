// src/authService.js
import { firebaseAuth } from "./firebaseAuth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const signOutUser = () => {
  return signOut(firebaseAuth);
};
