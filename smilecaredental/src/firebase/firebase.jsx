// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSS-RT_vU6YgYPi5zllErPpsWrVqHMdc8",
  authDomain: "lab202-5de90.firebaseapp.com",
  projectId: "lab202-5de90",
  storageBucket: "lab202-5de90.appspot.com",
  messagingSenderId: "472487476119",
  appId: "1:472487476119:web:7bd6554f871a9f6460a2d2",
  measurementId: "G-HZ383GZ6JF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const storage = getStorage(app);
export { storage, ref, getDownloadURL };
