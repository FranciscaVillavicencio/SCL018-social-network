import { loginOut } from '../firebaseConfig.js';

export const home = () => {
    const divHome = document.createElement ("div");
    const viewHome = `

    <h1>hola<h1>

    <button id= btnSalida> Cierre de sesion</button>

    ` 
    divHome.innerHTML = viewHome

    const loginOut = divHome.querySelector('#btnSalida').addEventListener ('click', () =>{
        window.location.hash = "#/login";
    
    });

    return divHome;

};


