import { signUp } from "../firebaseConfig.js";

export const register = () => {
  const divRegister = document.createElement("div");
  divRegister.className = "view-container";
  const viewRegister = `

    <header>
    <div class = "images-container">
    <img class = "fire-logo" src = "resources/images/fireLogo.png" alt = "logo de fuego con carita blanca y sonriente">
    <img class = "propagar-img" src = "resources/images/propagar.png" alt = "logo del nombre de la página web, propagar en mayúscula y degradado de naranjos y
    amarillos con contorno de fuego">
    <div class = "title-container">
    <h1 class = "title">Espacio para la difusión de talleres, charlas y conversatorios.</h1>
    </div>
    </header>
    <div class = "register-container">
    <input class = "name-register" id = "nameRegister" placeholder = "NOMBRE"></input>
    <input class = "email-register" id = "emailRegister" placeholder = "CORREO"></input>
    <input class = "password-register" id = "passwordRegister" type = "password" placeholder = "CONTRASEÑA"></input>
    <button class = "enter-register" id = "btnRegister">ENTRAR</button>
    </div>

    `;

  divRegister.innerHTML = viewRegister;

  const buttonRegister = divRegister.querySelector("#btnRegister");
  buttonRegister.addEventListener("click", () => {
    const email = divRegister.querySelector("#emailRegister").value;
    const password = divRegister.querySelector("#passwordRegister").value;
    window.location.hash = "#/login";
    console.log(email);
    console.log(password);

    if (password.lenght < 6) {
      alert("tu constraseña es muy corta");
    } else {
      signUp(email, password);
    }
  });

  return divRegister;
};
