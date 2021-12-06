


import { loginOut, postMuro } from "../firebaseConfig.js";


export const home = () => {
  const divHome = document.createElement("div");
  const viewHome = `

    <body> 
      <header>
      <section encabezado="encabezado">
      <button id= btnSalida> Cierre de sesion</button>
      </section>
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
      <button id= btnPost>post</button>
      </div>

      </form>

      </section>
  

    <footer>pie de la página</footer>

  </body>

    `;

  //boton para "postear" + la funcion de firestore//
   divHome.innerHTML = viewHome;

    const posteo = divHome.querySelector('#btnPost');
    posteo.addEventListener('click', () => {
    const user = divHome.querySelector('#nameUsuario').value;
    const posting = divHome.querySelector('#postUsuario').value;

    console.log (posting,user);
    postMuro(posting, user);

  })

  //boton para cerrar sesión//
  const loginOut = divHome
    .querySelector("#btnSalida")
    .addEventListener("click", () => {
      window.location.hash = "#/login";
      
    });

  return divHome;
};
