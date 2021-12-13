export const post = () => {
    const divPost = document.createElement("div");
    const viewPost = `


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
    <div class = "contenido">
    <textarea = "post" id = "postUsuario" class = "post-usuario" placeholder = "ESCRIBE TU POST AQUÍ"></textarea>
    </div>
    </form>
    </section>

    `;


    divPost.innerHTML = viewPost;
    return divPost;
};