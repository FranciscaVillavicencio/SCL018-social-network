export const beginning = () => {
  const viewContainer = document.createElement("div");
  const viewBeginning = `

    <button id = "login"  class = "btnLogin">Iniciar Sesión</button>
    <button id = "register"  class = "btnregister">Regístrate</button>

    `;
   viewContainer.innerHTML = viewBeginning;
   //window.location.hash//
   viewContainer.querySelector("#login").addEventListener ("click",() =>{
    window.location.hash = "#/login";
   }
   );
 
   viewContainer.querySelector("#register").addEventListener ("click",() =>{
    window.location.hash = "#/register";
   }
   );
   

  return viewContainer;
  console.log(beginning);
};
