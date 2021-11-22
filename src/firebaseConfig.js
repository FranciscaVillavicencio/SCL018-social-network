// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";

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
const analytics = getAnalytics(app);
