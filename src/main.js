
import {routes} from'./view/router.js';
import { observer } from '../firebaseConfig.js';



window.addEventListener("load", () =>{
routes(window.location.hash);
observer();

});

window.addEventListener("hashchange", () =>{
routes(window.location.hash);
observer();   
}
);

