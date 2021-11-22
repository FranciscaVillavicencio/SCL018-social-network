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
