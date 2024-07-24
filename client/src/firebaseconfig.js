// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUvHzQyvRkJXVYYmPxOCCHS6JwucgBJQQ",
    authDomain: "thebreakzone-14381.firebaseapp.com",
    projectId: "thebreakzone-14381",
    storageBucket: "thebreakzone-14381.appspot.com",
    messagingSenderId: "563156804449",
    appId: "1:563156804449:web:36bd9f80727070d6e19b20",
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};

const signOutFromGoogle = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error(error);
  }
};

export { auth, signInWithGoogle, signOutFromGoogle };
