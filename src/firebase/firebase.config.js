// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsu80lO8h8QJAnjAkfIxhOOpUmXIeiEuc",
  authDomain: "stay-vista-47681.firebaseapp.com",
  projectId: "stay-vista-47681",
  storageBucket: "stay-vista-47681.appspot.com",
  messagingSenderId: "706702243847",
  appId: "1:706702243847:web:63bfe1864eb2398ed492a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 