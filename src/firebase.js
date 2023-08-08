// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_guvV7rcSC3vMJR5I5f1RSCb8aD1yhps",
  authDomain: "sound-board-436b2.firebaseapp.com",
  projectId: "sound-board-436b2",
  storageBucket: "sound-board-436b2.appspot.com",
  messagingSenderId: "737142386136",
  appId: "1:737142386136:web:7cea49100c9463312416ad"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export default firebase