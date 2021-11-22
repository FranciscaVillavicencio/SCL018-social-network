export const register = () => {
    const divRegister = document.createElement("div");

    const viewRegister = `

    <input id = "nameRegister" class = "register-name"  type="text">
    <input id = "emailRegister" class = "register-email"  type="text">
    <input id = "passwordRegister"  class= "register-password"  type="text">
    <button id= "btnRegister"     class = "register-enter"></button>
    `

    divRegister.innerHTML = viewRegister;
    return divRegister;
}