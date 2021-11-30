import { signup } from '../firebaseConfig.js';

export const register = () => {
    const divRegister = document.createElement("div");
    const viewRegister = `

    <input id = "nameRegister" class = "register-name"  type="text">
    <input id = "emailRegister" class = "register-email"  type="text">
    <input id = "passwordRegister"  class= "register-password"  type="text">
    <button id= "btnRegister"     class = "register-enter"></button>
    `;

    divRegister.innerHTML = viewRegister;

    const buttonRegister = divRegister.querySelector('#btnRegister');
    buttonRegister.addEventListener('click', () => {
        const email = divRegister.querySelector('#emailRegister').value;
        const password = divRegister.querySelector('#passwordRegister').value;
        console.log(email);
        console.log(password);
        if (password.lenght < 6) {
            alert("tu constraseña es muy corta")
        } else {
            signup(email, password);

        }
    });

    return divRegister;

};



