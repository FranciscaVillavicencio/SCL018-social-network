import { loginUsuario } from '../firebaseConfig.js';

 export const login = () => {
    const divLogin = document.createElement ("div"); 
    const viewLogin = `
    
    <input id = "emailLogin" class = "login-email" placeholder = "e-mail"></input>
    <input id = "passwordLogin" class = "login-password" placeholder = "password"></input>
    <button id = "btnLogin" class = "login-enter">Enter</button>
    
    ` 
    divLogin.innerHTML = viewLogin;
     
      divLogin.querySelector('#btnLogin').addEventListener ('click', () =>{

      const email = divLogin.querySelector('#emailLogin').value;
      const password = divLogin.querySelector('#passwordLogin').value;
      loginUsuario(email, password);
      
     });

     return divLogin;

     };





