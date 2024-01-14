// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYVhn-YCXscYaWRmb4Uztl7sQXf5xzqG4",
  authDomain: "book-library-68b93.firebaseapp.com",
  projectId: "book-library-68b93",
  storageBucket: "book-library-68b93.appspot.com",
  messagingSenderId: "698707548991",
  appId: "1:698707548991:web:ee42992bfd5b540fdd518a",
  measurementId: "G-M8VYT5HNPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app