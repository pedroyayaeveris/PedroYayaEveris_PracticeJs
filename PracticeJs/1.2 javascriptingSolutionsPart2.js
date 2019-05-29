
// EJ 11 
// ## El ejercicio:

// Crea un archivo llamado `object-properties.js`.

// En ese archivo, define una variable llamada `food` de la siguiente forma:

// ```js
// var food = {
//   types: 'only pizza'
// };
// ```

// var food = {
//     types: 'only pizza'
// };

// console.log(food.types);

 


// EJ 12 
// ## El ejercicio:

// Crea un archivo llamado `objects.js`.

// En ese archivo, define una variable llamada `pizza` de la siguiente forma:

// ```js
// var pizza = {
//   toppings: ['cheese', 'sauce', 'pepperoni'],
//   crust: 'deep dish',
//   serves: 2
// }
// ```

// Utiliza `console.log()` para imprimir el objeto `pizza` a la terminal.


// var pizza = {
//     toppings: ['cheese', 'sauce', 'pepperoni'],
//     crust: 'deep dish',
//     serves: 2
//   }

//   console.log(pizza);






// // EJ 13 .REPLACE
// ## El ejercicio:

// Crea un archivo llamado `revising-strings.js`.

// Define una variable llamada `pizza` que referencie esta string: `'pizza is alright'`

// Utiliza el método `.replace()` para cambiar `alright` con `wonderful`.

// Luego, utiliza `console.log()` para imprimir los resultados del método `.replace()` a la terminal.

// var hola = 'mira vos no tenia la menor idea viejo!';
// hola = hola.replace('mira vos', 'che sabes que');
// console.log(hola);




// // EJ 14: ROUNDING NUMBERS
// ## El ejercicio:

// Crea un archivo llamado `rounding-numbers.js`.

// En ese archivo define una variable llamada `roundUp` que referencie el número decimal `1.5`.

// Usaremos el método `Math.round()` para redondear el número.

// Un ejemplo de `Math.round()`:


// var a = Math.round(0.2);
// console.log(a);




// // EJ 15 
// ## El ejercicio:

// Crea un archivo llamado `scope.js`.

// En ese archivo, copia el siguiente código:
// ```js
// var a = 1, b = 2, c = 3;

// (function firstFunction(){
// 	var b = 5, c = 6;

// 	(function secondFunction(){
// 		var b = 8;

// 		(function thirdFunction(){
// 			var a = 7, c = 9;

// 			(function fourthFunction(){
// 				var a = 1, c = 8;

// 			})();
// 		})();
// 	})();
// })();
// ```

// Usa tu conocimiento sobre el ámbito de las variables y ubica el siguiente código dentro de alguna de las funciones
// en `scope.js` para que la salida sea `a: 1, b: 8, c: 6`
// ```js
// console.log("a: "+a+", b: "+b+", c: "+c);



// // console.log(foo(bar(a)));




// EJ 16 STRING LENGTH
// ## El ejercicio

// Crea un archivo llamado `string-length.js`.

// En ese archivo, declará una variable llamada `example`.

// **Haz que la variable `example` referencie el valor `'example string'`.**

// Utiliza `console.log` para imprimir el **length** de la string a la terminal.

// Comprueba si tu programa es correcto ejecutando el siguiente comando:

// `javascripting verify string-length.js`

// var example = 'example string';
// var largo = example.lenght;
// console.log(largo);





// EJ 17 VARIABLES
// ## El ejercicio

// Crea un archivo llamado `variables.js`

// En ese archivo crea una variable llamada `example`.

// **Haz que la variable `example` referencie el valor `'some string'`.**

// Luego usa `console.log()` para imprimir la variable `example` a la consola.

// Comprueba si tu programa es correcto ejecutando el siguiente comando:

// `javascripting verify variables.js`


// var example = 'some string';
// console.log(example);
