import { loginUsuario } from "../firebaseConfig.js";

export const login = () => {
  const divLogin = document.createElement("div");
  divLogin.className = "view-container";
  const viewLogin = `
    
    <header>
    <div class = "images-container">
    <img class = "fire-logo" src = "resources/images/fireLogo.png" alt = "logo de fuego con carita blanca y sonriente">
    <img class = "propagar-img" src = "resources/images/propagar.png" alt = "logo del nombre de la página web, propagar en mayúscula y degradado de naranjos y
    amarillos con contorno de fuego">
    <div class = "title-container">
    <h1 class = "title">Espacio para la difusión de talleres, charlas y conversatorios.</h1>
    </header>
    <div class = "login-container">
    <input class = "email-login" id = "emailLogin" placeholder = "CORREO"></input>
    <input class = "password-login" id = "passwordLogin" type = "password"  placeholder = "CONTRASEÑA"></input>
    <button class = "enter-login"id = "btnLogin" >ENTRAR</button>
    </div> 

    `;

  divLogin.innerHTML = viewLogin;

  divLogin.querySelector("#btnLogin").addEventListener("click", () => {
    const email = divLogin.querySelector("#emailLogin").value;
    const password = divLogin.querySelector("#passwordLogin").value;
    loginUsuario(email, password);
  });

  return divLogin;
};
