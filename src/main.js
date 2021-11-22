// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { app } from './firebaseConfig.js';
console.log(app);

import { beginning } from './view/templateBeginning.js';
<<<<<<< HEAD
import { login } from './view/templateLogin.js';

myFunction();
document.getElementById('root').innerHTML = beginning()
document.getElementById('root').appendChild(login ())
=======
//import { login } from './view/templateLogin.js';

myFunction();
document.getElementById('root').innerHTML = beginning()
//document.getElementById('root').innerHTML += login()
>>>>>>> 12f1f03d5fa425092dee2569c137201d9f1f7dde
