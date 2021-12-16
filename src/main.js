
import { observer } from '../firebaseConfig.js';
import {routes} from'./view/router.js';
import { observer } from '../firebaseConfig.js';



window.addEventListener("load", () =>{
routes(window.location.hash);
observer();

});

window.addEventListener("hashchange", () =>{
routes(window.location.hash);
<<<<<<< HEAD
observer();
    
});
=======
observer();   
}
);

/* console.log(app);

import { beginning } from './view/templateBeginning.js';
import { login } from './view/templateLogin.js';
>>>>>>> 84404b8a53a06b2202924dde55ab80d7cd4febb0


