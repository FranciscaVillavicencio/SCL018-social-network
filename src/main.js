
import { observer } from '../firebaseConfig.js';
import {routes} from'./view/router.js';


window.addEventListener("load", () =>{
routes(window.location.hash);
observer();

});

window.addEventListener("hashchange", () =>{
routes(window.location.hash);
observer();
    
});


