//  node C:\Users\pedryaya\Desktop\js-begin\countToSixSolutions.js



// EJ 1 ARROW FUNCTIONS AND THIS:
// ```js
// setImmediate(function () {
//     console.log(this.yelp);
// }.bind(this));
// ```

// or even

// ```js
// var that = this;
// setImmediate(function () {
//     console.log(that.yelp);
// });
// ```

// In ES6, arrow functions allow us to avoid such workarounds and instead just say what we mean. If we use an arrow function for the callback to `setImmediate`, the code will work as expected.

// ## Challenge

// Let's do exactly that. Starting with the original code example above, replace the anonymous function passed to `setImmediate` with an arrow function.


// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(() => console.log(this.yelp));
//     }
// };
// foot.kick();





// EJ 2: ARROW FUNCTIONS PART 1
// ## Challenge

// You'll be given a variable number of arguments (`process.argv[2]` onward) to your program,
// all of which will be strings. Use arrow functions to perform a map-reduce operation over them,
// before outputting them to the console. That is, your solution should start with something


// var inputs = process.argv.slice(2);
// var result = inputs.map(/* what goes here? */)
//                     .reduce(/* what goes here? */);


// In particular, you should:

// - Map all incoming strings to their first character
// - Reduce the result by concatenating them together

// So an input of `["Hello", "arrow", "functions"]` would become `"Haf"`.

// To show your work, you should output the transformation to the console. The above example would be:

// ```
// [Hello,arrow,functions] becomes "Haf"
// ```


// const sum = numbers.reduce((Acumulador, CurrentNumber) => Acumulador + CurrentNumber);
// const secretMessage = animals.map((animal) => animal[0]).join('')



// // var input = ["Hello", "arrow", "functions"];

// // var output = input.map((input) => input[0]).reduce((a,b) => a + b);

// // console.log(output);









// EJ 3 DEFAULT ARGUMENTS PART 1

// function middlePoint(lowerLimit = 0, upperLimit = 1){
//     let result = (lowerLimit + upperLimit) / 2;
//     return result;
// }
// // LO MISMO ESCRITO CON ARROW FUNCTION!
// const puntoMedio = (lowerLimit = 0, upperLimit = 1) => (lowerLimit + upperLimit) / 2;

// // SI NO LE PONGO NADA A LOS PARAMETROS ME AGARRA LOS DEFAULT
// console.log(middlePoint());
// console.log(puntoMedio(60,20));




// EJ 4: DEFAULT ARGUMENTS PART 2

// ## Challenge

// For this exercise, you should write a Node module whose default export is a function that will make a string really important. It should do this by adding a bunch of exclamation marks after it. The exact number of exclamation marks should be configurable, but by default, it should be equal to the length of the string. So:

// ```js
// makeImportant("Hi", 5);             // => "Hi!!!!!"
// makeImportant("Hi");                // => "Hi!!"
// makeImportant("Hello?", undefined); // => "Hello?!!!!!!"
// ```

// // le agrega ! a las palabras, la cantidad es configurable pero por default es el largo de la palabra.

// const result  =  (string, bangs = string.length) => string + "!".repeat(bangs);

// console.log(result("HII", 111));







//    EJ 5: DESTRUCTURING.


// ## Challenge

// Let's assume that we need to extract certain pieces of information concerning a user from an input array, which has the following format:

// ```js
// [userId, username, email, age, firstName, lastName]
// ```

// The consecutive values of this array will be given as execution parameters, so you can obtain them using:
// ```js
// let userArray = process.argv.slice(2); // userArray equals here e.g. [1, "jdoe", "jdoe@example.com", "John", "Doe"]
// ```

// Your task is to extract information about the username and email to a separate object containing two properties - `username` and `email` - and log it out.

// ```js
// let userArray = process.argv.slice(2);

// // what goes here?

// console.log(/* your result */); // {username: "jdoe", email: "john@doe.com"}


// // // Tomo valores de un array y los meto en otro lado. si quiero saltearme un index dejo un espacio vacio con coma,
// // let user = [1, "jdoe", "jdoe@example.com", "John", "Doe"];
// // let result = {};

// // [ , result.username, result.email] = user;

// // console.log(result);

// // En Objetos podemos agarrar valores de objetos para setearselos a otras variables asi:

// const address = {
//     street: 'Cabildo',
//     city: 'Pacheco',
//     country: 'Argentina'
// };

// // En lugar de hacer esto que es repetitivo:

// // var street = address.street;
// // var city = address.city;
// // var country = address.country;

// // Podemos hacer:
// // (esto guarda los valores (por orden) en la variable que llama street, city y contry)
// // para darles un alias le ponemos dos puntos:

// const { street: st, city: c, country } = address;

// console.log(st); // Cabildo




// let user = [1, "jdoe", "jdoe@example.com", "John", "Doe"];
// let result = {};

// [ , result.username, result.email] = user;

// console.log(result);











// EJ 6 REST: 

// ## Challenge

// This exercise uses a slightly different format than usual. This time, your goal is to write a Node module whose default export is an average function. You *don't* need to print anything to the console. That is, your solution should look something like:

// ```js
// module.exports = function average(/* what goes here */) {
//     // what goes here?
// };
// ```

// We'll test your module by passing it a few different sets of arguments, e.g. `average(1, 2, 3)` and `average(5, 10)`, and making sure that it works in all cases.

// Otherwise, the process is the same as before: use `{appname} verify program.js` to test your result, and so on.

//  function sum(...args) {
//     var result = 0;
//     args.forEach(function (value) {
//         result += value;
//     });
//     result = result / args.length;
//     return result;
// }

// console.log(sum(1,2,3));


 






// EJ 7: SPREAD:

// ## Challenge

// You'll be given a variable number of arguments (`process.argv[2]` onward) to your program, all of which will be numbers. Use the ES6 spread operator to find the minimum value of these numbers and log it to the console.

// And let's log the list of numbers themselves, to make it clearer. So the output should be, for example:

// ```
// The minimum of [18,5,7,24] is 5
// ```

// var numbers = [18,5,7,24];
// var min = Math.min(...numbers);

// console.log(`The minimum of [${numbers}] is ${min}`);










// EJ 8: TAGGED TEMPLATE STRINGS 

// ## Challenge

// In fact, let's do that right now. You will be given two arguments to your program: a username, and a comment. Both will potentially contain HTML-unsafe characters (namely `'`, `"`, `<`, `>`, and `&`). Your job is to use tagged template strings to log a safely-escaped HTML rendering of the comment.

// For example, if the username is `"domenic"` and the comment is `"<dl> is a fun tag"`, you should output:

// ```html
// <b>domenic says</b>: "&lt;dl&gt; is a fun tag"
// ```

// As before, you could start doing this using simple ES5 constructs. But the goal is for you to write a function that you can use as a tag in a tagged template string, that will do any escaping automatically.


// function html(pieces, ...substitutions) {
//     var result = pieces[0];
//     for (var i = 0; i < substitutions.length; ++i) {
//         result += escape(substitutions[i]) + pieces[i + 1];
//     }

//     return result;
// }

// function escape(s) {
//     return s.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/'/g, "&apos;")
//             .replace(/"/g, "&quot;");
// }




 



// EJ 9: TEMPLATE STRING

// ES6 template strings are a new string syntax, which use backticks ( `` ) instead of quotation marks ( '' or "" ). Template strings give you more powerful abilities for constructing strings. They allow string interpolation, with syntax like:

// ```js
// `Hello, ${person}! 1 + 1 = ${1 + 1}!`
// ```

// They can also be multiline, simply by placing linebreaks inside your string:

// ```js
// `Hello,
// world!`
// ```

// ## Challenge

// You will be given a name as the first argument to your program (`process.argv[2]`). You should output a two-line message, first greeting that person, and then telling them their name in lowercase. For example, if the name was `"Domenic"`, you would output:

// ```
// Hello, Domenic!
// Your name lowercased is "domenic".
// ```

// You can start by doing this using ES5 constructs if you like, but the correct solution should use a _single_ ES6 template string, and not use the `+` operator.


// var name = "Jorge";

// console.log(`Hello, ${name}!
// Your name lowercased is "${name.toLowerCase()}".`);