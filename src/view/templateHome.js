import { loginOut, postMuro } from "../firebaseConfig.js";

export const home = () => {
    const divHome = document.createElement("div");
    const viewHome = `


    <header> 
    <div class = "header-container">
    <img class = "home-logoFuego" src = "resources/images/logofuego.png" alt = "logo de fuego con carita blanca y sonriente">
    <img class = "home-imgPropagar" src = "resources/images/propagar.png" alt = "logo del nombre de la página web, propagar en mayúscula y degradado de naranjos y
    amarillos con contorno de fuego">
    <img src = "resources/images/out.png" alt = "cierre de sesión" class = "log-out" id = "logOut">
    <section encabezado = "encabezado">
    </section>
    </div>
    </header>

    <section class = "contenedorPadre"

    <form id = "contenedor">

    <div class = "nombre">
    <input type = "usuario" id = "nameUsuario"  class= "name-usuario" placeholder = "usuario aqui">
    </div>
    
    <div class = "contenido">
    <textarea = "post" id = "postUsuario" class = "post-usuario" placeholder = "post aqui"></textarea>
    </div>

    <div class = "boton">
    <button id = btnPost>post</button>
    </div>

    </form>

    </section>



    `;

    //boton para "postear" + la funcion de firestore//
    divHome.innerHTML = viewHome;

    const posteo = divHome.querySelector("#btnPost");
    posteo.addEventListener("click", () => {
        const user = divHome.querySelector("#nameUsuario").value;
        const posting = divHome.querySelector("#postUsuario").value;

        console.log(posting, user);
        postMuro(posting, user);
    });

    //boton para cerrar sesión//
    const loginOut = divHome
        .querySelector("#logOut")
        .addEventListener("click", () => {
            window.location.hash = "#/login";
        });

    return divHome;
};


