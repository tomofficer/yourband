import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthHandler = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  return null; // This component does not render anything
};
