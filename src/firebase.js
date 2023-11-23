// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'; // Import the getAuth function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRl14v-a_y6fb8m7yBoHoyQX32jyHCwEY',
  authDomain: 'bandlist-cee2b.firebaseapp.com',
  projectId: 'bandlist-cee2b',
  storageBucket: 'bandlist-cee2b.appspot.com',
  messagingSenderId: '846517154243',
  appId: '1:846517154243:web:3ec5592252cd7d3f3e4d76',
  measurementId: 'G-LE208PKZCM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// If using Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Auth and export
export const auth = getAuth(app); // Corrected way to get the auth service
