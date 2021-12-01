import { signup } from '../firebaseConfig.js';

export const register = () => {
    const divRegister = document.createElement("div");
    divRegister.className = "view-container";
    const viewRegister = `

    
    <header>
    <div class = "images-container">
    <img class = "logoFuego" src = "resources/images/logofuego.png" alt = "logo de fuego con carita blanca y sonriente">
    <img class = "imgPropagar" src = "resources/images/propagar.png" alt = "logo del nombre de la página web, propagar en mayúscula y degradado de naranjos y
    amarillos con contorno de fuego">
    <div class="title-container">
    <h1 class="title">Espacio para la difusión de talleres, charlas y conversatorios.</h1>
    </div>
    </header>
    <div class = "register-container">
    <input id = "nameRegister" class = "register-name" placeholder = "NOMBRE"></input>
    <input id = "emailRegister" class = "register-email" placeholder = "E-MAIL"></input>
    <input id = "passwordRegister"  class = "register-password" placeholder = "PASSWORD"></input>
    <button id = "btnRegister" class = "register-enter">ENTER</button>
    </div>
    `;

    divRegister.innerHTML = viewRegister;

    const buttonRegister = divRegister.querySelector('#btnRegister');
    buttonRegister.addEventListener('click', () => {
        const email = divRegister.querySelector('#emailRegister').value;
        const password = divRegister.querySelector('#passwordRegister').value;
        window.location.hash = "#/login";
        console.log(email);
        console.log(password);
        
        if (password.lenght < 6) {
            alert("tu constraseña es muy corta")
        } else {
            signup(email, password);

        }
    });

    return divRegister;

};
