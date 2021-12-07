

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js"; //de deben importar desde firebase todas las funciones correspondientes segun lo que queramos hacer. 

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";



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
const auth = getAuth(app);
const db = getFirestore(app);



// función para crear usuario con mail y contraseña//
export const signUp = (email, password) => {
  //funcion para el registro de usuarios
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

// función para el login de usuarios//

export const loginUsuario = (email, password) => {
  signInWithEmailAndPassword(auth, email, password) //funcion exportada de firebase, la cual se debe agregar dentro de una constante//
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.hash = "#/home"; //con este codigo se hace el cambio de hash al home//

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

};


// cierre de sesión//

//funcion "contenedora"// ¿poque va sin parametros??//
export const loginOut = () => {

  /*const auth = getAuth();*/
  signOut(auth).then(() => {
    window.location.hash = "#/beginning";
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

};

    // funcion para postear// 

      export const postMuro = async (posting,user) => {
      const docRef = await addDoc(collection(db, "publicaciones"), {
       post: posting,
       correo: user
      });
      console.log("Document written with ID: ", docRef.id);
 

    };
   



 

    

    
   
    
    






