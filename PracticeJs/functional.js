// HELLO_WORLD

// var str = "hello world";

// var res = function(input) {
//     return input.toUpperCase()
//   }

// console.log(res(str));










// HIGHER_ORDER_FUNCTIONS


// var operation111 = () => console.log("hello world");

// function repeat(operation, num) {
//     if (num <= 0) return
//     operation()
//     return repeat(operation, --num)
//   }

//   module.exports = repeat(operation111, 10);









// BASIC_MAP

// var array1 = [ 1, 2, 3, 4, 5, 6, 7];
// var magic = (n) => n *2;
// var arrayDoubled = array1.map(magic);

// console.log(arrayDoubled);










// BASIC FILTER

var obj1 = {
    message: 'lorem ipsum'
}

var obj2 = {
    message: 'lorem ipsum 2'
}

var obj3 = {
    message: 'lorem ipsum 3'
}

var obj4 = {
    message: 'lorem ipsum 4'
}

var objList = [obj1, obj2, obj3, obj4];


var check = (obj) => obj.hasOwnProperty('message');
var check2 = (obj) => obj.message.length < 50;

function getShortMessages(objArray){
   return objArray.filter(check && check2);
}


console.log(getShortMessages(objList));









// BASIC_EVERY_SOME


// var goodUsers = [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 }
//   ]


// var submittedUsers = [
//     { id: 1 },
//     { id: 2 },

//   ]


// function checkUsersValid(goodUsers){
//     return function allUsersValid(submittedUsers){
//         return submittedUsers.every(function(submittedUser){
//                 return goodUsers.some(function(goodUser){
//                         return goodUser.id === submittedUser.id

//                 })

//         })
//     }

// }


// console.log(checkUsersValid(goodUsers));

// El método every() devuelve un booleano, true si todos los elementos en el arreglo
// pasan la condición implementada por la función dada y false si alguno no la cumple.

// El método some() comprueba si al menos un elemento del array cumple con la condición
// implementada por la función proporcionada.










// BASIC_REDUCE

// function countWords(arr){
//     return arr.reduce(function(count, word){
//         count[word] = ++count[word] || 1
//         return count;
//     }, {})
// }


// var array1 = ['Apple', 'Apple', 'Apple', 'Apple', 'Durian', 'Durian']

// console.log(countWords(array1));











// BASIC RECURSION


// function reduce(arr, fn, initial) {
//     return (function reduceOne(index, value) {
//       if (index > arr.length - 1) return value // end condition
//       return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//     })(0, initial) // IIFE. kick off recursion with initial values
//   }
  
//   module.exports = reduce


// ESTE NO LO HE LOGRADO COMPRENDER. 



 









