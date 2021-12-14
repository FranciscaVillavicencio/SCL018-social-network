import { signUp, signInGoogle } from "../firebaseConfig.js";

export const beginning = () => {
  const divBeginning = document.createElement("div");
  divBeginning.className = "view-container";
  const viewBeginning = `

    <header>
    <div class = "images-container">
    <img class = "fire-logo" src = "resources/images/fireLogo.png" alt = "logo de fuego con carita blanca y sonriente">
    <img class = "propagar-img" src = "resources/images/propagar.png" alt = "logo del nombre de la página web, propagar en mayúscula y degradado de naranjos y
    amarillos con contorno de fuego">
    <div class = "title-container">
    <h1 class = "title">Espacio para la difusión de talleres, charlas y conversatorios.</h1>
    </div>
    </header>
    <div class = "beginning-container">
    <button class = "btn-login" id = "login">INICIAR SESIÓN</button>
    <button class = "btn-register" id = "register">REGÍSTRATE</button>
    </div>
    <hr class = "hr-beginning-center"/>
    <div class = "subtitle-container">
    <h2 class = "subtitle">Accede con</h1>
    <img class = "google-logo" id = "google" src = "resources/images/google.png" alt = "logo de Google">
    </div>
  
    `;

  divBeginning.innerHTML = viewBeginning;
  //window.location.hash//
  divBeginning.querySelector("#login").addEventListener("click", () => {
    window.location.hash = "#/login";
  });

  divBeginning.querySelector("#register").addEventListener("click", () => {
    window.location.hash = "#/register";
  });

  divBeginning.querySelector("#google").addEventListener("click", () => {
    signInGoogle();
  });

  return divBeginning;
  console.log(beginning);
};
