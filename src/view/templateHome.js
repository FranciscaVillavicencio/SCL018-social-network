import { loginOut, postMuro,  readData,  } from "../firebaseConfig.js";

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
    <section class = "contenedorPadre">
    <form id = "contenedor">  
    <div class = "contenido">
    <textarea = "post" id = "postUsuario" class = "post-usuario" placeholder = "ESCRIBE TU POST AQUÍ"></textarea>
    </div>
    <div class = "boton">
    <button id = btnPost>PUBLICAR</button>
    </div>
    </form>
    <div id="publicaciones">
    
    </div>

    </section>


    `;


    //boton para "postear" + la funcion de firestore//
    divHome.innerHTML = viewHome;

    const posteo = divHome.querySelector("#btnPost");
    posteo.addEventListener("click", () => {
       /*  const user = divHome.querySelector("#nameUsuario").value; */
        const posting = divHome.querySelector("#postUsuario").value;

        console.log(posting);
        postMuro(posting);
    });

     //Crear tu post//
    const post = (publicaciones) => {
        publicaciones.forEach((element) => {
            divHome.querySelector("#publicaciones").innerHTML += `

            <section class = "contenedorPost"> 
            <div class = "contenido">
            <textarea class = "post-User">id =${element.post}</textarea>
            </div>
            <div class = "boton">
            <button id = "btnEliminar">Eliminar</button>
            </div>
            </section>
            `;


        });
        readData(post); 
    }; 


    //boton para cerrar sesión//
    const loginOut = divHome
        .querySelector("#logOut")
        .addEventListener("click", () => {
            window.location.hash = "";
        });
        
        readData().then((value) => post(value)).catch((error) => console.error(error));

    return divHome;
};
