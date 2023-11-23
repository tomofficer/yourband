import { auth } from './firebase';

// Sign Up (Register)
export const signUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

// Log In
export const logIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

// Log Out
export const logOut = () => {
  return auth.signOut();
};
