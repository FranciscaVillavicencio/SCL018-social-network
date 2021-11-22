import { beginning } from "./templateBeginning.js";
import { login } from "./templateLogin.js";
import { register } from "./templateRegister.js";

export const routes = (hash) => {
  const menuBeginning = document.getElementById("root");
  menuBeginning.innerHTML = "";
  if (hash === "#/" || hash === "/" || hash === "#" || hash === "") {
    menuBeginning.appendChild(beginning());
  } else if (hash === "#/login") {
    menuBeginning.appendChild(login());
  } else if (hash === "#/register") {
    menuBeginning.appendChild(register());
  }
};
