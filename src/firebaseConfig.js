import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI030rPWIqiX27FZjdhta4-ZCIQuAY0tU",
  authDomain: "propagar-scl018-social-network.firebaseapp.com",
  projectId: "propagar-scl018-social-network",
  storageBucket: "propagar-scl018-social-network.appspot.com",
  messagingSenderId: "636818251103",
  appId: "1:636818251103:web:fcb5bd714c02e4477b2aea",
  measurementId: "G-253TQ7184W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// función para crear usuario con mail y contraseña//

const auth = getAuth(app);

export const signup = (email, password) => {
  //funcion que hay que armar//
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.hash = "#/login";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
