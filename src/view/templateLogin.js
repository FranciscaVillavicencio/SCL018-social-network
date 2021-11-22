<<<<<<< HEAD
export const login = () =>{
 const divLogin = document.createElement ("div");

 const viewLogin =`

 <input id = "email" class=""  type="text">
 <input id = ""      class= ""  type="text">
 <button id= ""     class = ""></button>
 `

 divLogin.innerHTML = viewLogin;

 return divLogin;
}
=======
export const login = () => {
    const divLogin = document.createElement ("div");
    const viewLogin = `
    
    <input id = "email" class = "loginEmail" placeholder = "e-mail"></input>
    <input id = "password" class = "loginPassword" placeholder = "password"></input>
    <button id = "btnLogin" class = "loginEnter">Enter</button>
    
    ` 
    divLogin.innerHTML = viewLogin;
    return viewLogin;
};
>>>>>>> 12f1f03d5fa425092dee2569c137201d9f1f7dde
