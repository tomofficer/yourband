import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/'); // Redirect to home or login page
      })
      .catch((error) => {
        // An error happened.
        console.error('Logout Error:', error);
      });
  };

  return (
    <div>
      <h1>This is the dashboard.</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* Rest of your dashboard content */}
    </div>
  );
};

export default Dashboard;
