// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

//If using Firebase analytics
const analytics = getAnalytics(app);

// Export the auth module
export const auth = firebase.auth();
