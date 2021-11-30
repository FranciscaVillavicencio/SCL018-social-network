export const beginning = () => {
  const viewContainer = document.createElement("div");
  const viewBeginning = `

    <header>
    <div class = "images-container">
    <img class = "logoFuego" src = "images/logofuego.png" alt = "logo de fuego con carita blanca y sonriente">
    <img class = "imgPropagar" src = "images/propagar.png" alt = "logo del nombre de la página web, propagar en mayúscula y degradado de naranjos y
    amarillos con contorno de fuego">
    </div>
    </header>
    <div class = "login-container">
    <button id = "login"  class = "btnLogin">INICIAR SESIÓN</button>
    </div>
    <div class = "register-container">
    <button id = "register"  class = "btnregister">REGÍSTRATE</button>
    </div>

    `;
  viewContainer.innerHTML = viewBeginning;
  //window.location.hash//
  viewContainer.querySelector("#login").addEventListener("click", () => {
    window.location.hash = "#/login";
  }
  );

  viewContainer.querySelector("#register").addEventListener("click", () => {
    window.location.hash = "#/register";
  }
  );


  return viewContainer;
  console.log(beginning);
};
