export const beginning = () => {
  const divContainer = document.createElement("div");
  const viewBeginning = `

    <button id = "login"  class = "btnLogin">Iniciar Sesión</button>
    <button id = "register"  class = "btnregister">Regístrate</button>

    `;
   divContainer.innerHTML = viewBeginning;
   //window.location.hash//
   divContainer.querySelector("#login").addEventListener ("click",() =>{
    window.location.hash = "#/login";
   }
   );
 
   divContainer.querySelector("#register").addEventListener ("click",() =>{
    window.location.hash = "#/register";
   }
   );
   

  return divContainer;
  
};
