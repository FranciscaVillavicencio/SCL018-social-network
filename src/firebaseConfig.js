import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  setPersistence, 
  browserSessionPersistence,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js"; 
// De deben importar desde firebase todas las funciones correspondientes según lo que queramos hacer.


import {
  getFirestore,
  Timestamp,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

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

// Función para crear usuario con email y contraseña

export const signUp = (email, password) => {
  // Función para el registro de usuarios
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = "#/login";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

// Función para el login de usuarios

export const loginUsuario = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    // Función exportada de firebase, la cual se debe agregar dentro de una constante
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = "#/home";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// Función para autenticar con Google

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.hash = "#/home";
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

// Cierre de sesión

// Función "contenedora"//
export const loginOut = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = "";
    })
    .catch((error) => {
    });
};

// Función para generar la base de datos en firebase

export const postMuro = async (input) => {
  const user = auth.currentUser;
  const docRef = await addDoc(collection(db, "publicaciones"), {
    username: auth.currentUser.displayName,
    userId: auth.currentUser.uid,
    post: input,
    correo: user.email,
    foto: user.photoURL,
    datePosted: Timestamp.fromDate(new Date()),
  });
  return docRef;
};

export const readData = (callback) => {
  const q = query(
    collection(db, "publicaciones"),
    orderBy("datePosted", "desc")
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((_doc) => {
      posts.push({ ..._doc.data(), id: _doc.id }); 
    });
    callback(posts);
  });
};


// Función para eliminar

export const deletePost = async (id) => {
  await deleteDoc(doc(db, "publicaciones", id));
};

// Observador

export const observer = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else if ( window.location.hash === '#/home') {
      loginOut();
    //Si es usuarix le diriges a home
    }{
    }
  });
};


