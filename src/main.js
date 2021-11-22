

import {routes} from'./view/router.js';

window.addEventListener("load", () =>{
routes(window.location.hash);

}
);

window.addEventListener("hashchange", () =>{
routes(window.location.hash);
    
}
);

/* console.log(app);

import { beginning } from './view/templateBeginning.js';
import { login } from './view/templateLogin.js';

myFunction();
document.getElementById('root').innerHTML = beginning();
document.getElementById('root').innerHTML += login() */

