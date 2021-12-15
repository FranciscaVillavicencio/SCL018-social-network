import { loginOut, postMuro, readData, deletePost } from "../firebaseConfig.js";

export const home = () => {
  const divHome = document.createElement("div");
  const viewHome = `

    <header> 
    <div class = "header-container">
    <img class = "home-fireLogo" src = "resources/images/fireLogo.png" alt = "logo de fuego con carita blanca y sonriente">
    <img class = "home-imgPropagar" src = "resources/images/propagar.png" alt = "logo del nombre de la página web, propagar en mayúscula y degradado de naranjos y
    amarillos con contorno de fuego">
    <img src = "resources/images/out.png" alt = "cierre de sesión" class = "log-out" id = "logOut">
    <section encabezado = "lead">
    </section>
    </div>
    </header>
    <section class = "parent-container">
    <form id = "container">  
    <div class = "content">
    <textarea = "post" id = "postUsuario" class = "post-usuario" placeholder = "ESCRIBE TU POST AQUÍ. Considera agregar información necesaria para que se comuniquen contigo, por ej. tu red social o datos del taller, charla o conversatorio que quieras mencionar :)"></textarea>
    </div>
    <div class = "btn-post">
    <button id = "btnPost">PUBLICAR</button>
    <hr class = "hr-home-center"/>
    </div>
    </form>
    <div id = "publicaciones">
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
    divHome.querySelector("#publicaciones").innerHTML = "";
    publicaciones.forEach((element) => {
      divHome.querySelector("#publicaciones").innerHTML += `
            

            <section class = "post-container"> 
            <div class = "content">
            <div class = "elements-user">
            <img class = "photo-user" id = "photoUser" src = ${element.foto}>
            <h1 class = "user-name" id = "userName">${element.username}</h1>
            </div>
            <textarea class = "post-User" id = "postUser"> ${element.post}</textarea>
            </div>
            <button class= "btn-delete"><img src = "resources/images/delete.png" alt = "ícono de basurero blanco" class = "img-dustman" id = "${element.id}">
            </button>
            </div>

            </section>
            `;

      const postDelete = divHome.querySelectorAll(".img-dustman");
      postDelete.forEach((btn) => {
        const id = btn.getAttribute("id");
        btn.addEventListener("click", () => {
          const confirm = window.confirm("¿Quieres eliminar esta publicación?");
          if (confirm) {
            deletePost(id);

          }
        });
      });
    });

  };
  readData(post);

  //boton para  eliminar//
  const postDelete = divHome.querySelector("#btnDelete");
postDelete.addEventListener("click", () => {
const postDelete = divHome.querySelector("#postUser").value;

deletePost(postDelete);

});


  //boton para cerrar sesión//
  const loginOut = divHome
    .querySelector("#logOut")
    .addEventListener("click", () => {
      window.location.hash = "";
    });

  return divHome;
};
