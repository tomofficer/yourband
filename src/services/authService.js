import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth instance

// Sign Up (Register)
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Log In
export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Log Out
export const logOut = () => {
  return signOut(auth);
};
