import { signup } from '../firebaseConfig.js';

export const login = () => {
    const divLogin = document.createElement ("div");
    divLogin.className = "view-container";
    const viewLogin = `
    
    
    <header>
    <div class = "images-container">
    <img class = "logoFuego" src = "resources/images/logofuego.png" alt = "logo de fuego con carita blanca y sonriente">
    <img class = "imgPropagar" src = "resources/images/propagar.png" alt = "logo del nombre de la página web, propagar en mayúscula y degradado de naranjos y
    amarillos con contorno de fuego">
    <div class="title-container">
    <h1 class="title">Espacio para la difusión de talleres, charlas y conversatorios.</h1>
    </header>
    <div class = "login-container">
    <input id = "emailLogin" class = "login-email" placeholder = "EMAIL"></input>
    <input id = "passwordLogin" class = "login-password" placeholder = "PASSWORD"></input>
    <button id = "btnLogin" class = "login-enter">ENTER</button>
    </div> 
    `;

    divLogin.innerHTML = viewLogin;
    return divLogin;
};
