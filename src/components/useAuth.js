import { useEffect, useState } from 'react';
import { auth } from './firebase'; //Importing the firebase auth module

//Custom hook for validating user authentication
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //Subscribe to auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user); //Setting the current user
    });

    return unsubscribe; // Cleanup subscription on unmount (unsubscribe)
  }, []);

  return currentUser;
};
