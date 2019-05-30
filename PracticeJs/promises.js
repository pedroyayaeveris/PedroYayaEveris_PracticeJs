
// node  PracticeJs\promises.js

// Promise is an object that defines a method called `then`. The promise object represents a value 
// that may be available some time in the future. It greatly simplifies asynchronous 
// logic in JavaScript.




// WARMP_UP

// var to = setTimeout(function () {
//    console.log('TIMED OUT!');
//  }, 6000);

// console.log(to);












// FULLFIL_A_PROMISE

// ESTADOS DE PROMESA:
// * fulfilled,
// * rejected, or
// * pending, which is the state of a promise waiting to be fulfilled or rejected.

// Sometimes you will also hear the term “resolved.” For now, you can treat it as
// meaning either fulfilled or rejected.



// var promise = new Promise(function(fulfilled, reject){
//       setTimeout(() => {
//          fulfilled('FULLFILLED!!!!')
//       }, 3000);

// })
 
// promise.then(console.log);










// REJECT_A_PROMISE

// var promise = new Promise(function(fulfill, reject){
//    setTimeout(() => {
//       reject(new Error('REJECTED!!!'));
//    }, 300);
// })

// function onReject(errorcito){
//    console.log(errorcito.message);
// }

// promise.then(null, onReject);













// TO_REJECT_OR_NOT_TO_REJECT

// var promise = new Promise(function (fulfill, reject){
//    fulfill('I FIRED');
//    reject(new Error('I DID NOT FIRE!'))
// });

// function onReject(error){
//    console.log(error.message)
// }
 
 
//  promise.then(console.log, onReject);
 







// ALWAYS_ASYNC

// The ES2015 spec declares that promises **must not** fire their
// resolution/rejection function on the same turn of the event loop that they are
// created on. This is very important because it eliminates the possibility of
// execution order varying and resulting in indeterminate outcomes.

// You can expect that the functions passed to the `then` method of a
// promise will be called on the **next** turn of the event loop.

// var promise = new Promise(function (fulfill, reject) {
//    fulfill('PROMISE VALUE');
//  });
 
//  // At this point, the value of promise is already known.
 
//  // If promise is not always asynchronous, console.log would be called with
//  // 'PROMISE VALUE' here. This is not the case.
 
//  promise.then(console.log);
 
//  console.log('MAIN PROGRAM');



 






// SHORTCUTS 

// let p = new Promise((resolve, reject) => {
//    let a = 23 + 2
//    if (a == 25) {
//       resolve('Success!')
//    } else {
//       reject('Looser!')
//    }

// }) 


// p.then((message) => { console.log('The result was: ' + message) }).catch((message) => {
//    console.log('You are a compleeete... ' + message + '!!!!')
// })















// PROMISE_AFTER_PROMISE

// first = function (){
//    console.log('primera');
// }

// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val) {
//   return second(val);
// });

// secondPromise.then((message) => {
//       console.log(message)
// });

 


// NORMAL CALLBACK FUNCTION 


// const userLeft = true
// const userWatchingCatMeme = false

// function watchTutorialCallback(callback, errorCallback){
//    if (userLeft){
//       errorCallback({
//          name: 'USER LEFT!',
//          message: ' SO SAD! '
//       })
//    } else if (userWatchingCatMeme) {
//       errorCallback({
//          name: 'USER WATCHING CAT MEME',
//          message: 'LOL'
//       })
//    } else {
//       callback('VERY NICE! SUBSCRIBE!')
//    }
// }


// watchTutorialCallback((message) => {
//    console.log('Successs: ' + message)
// }, (error) => {
//    console.log(error.name + error.message)
// })



// REPLACE WITH PROMISES


// const userLeft = true
// const userWatchingCatMeme = false

// function watchTutorialPromise(){
//    return new Promise((resolve, reject) => {

//       if (userLeft){
//          reject({
//             name: 'USER LEFT!',
//             message: ' SO SAD! '
//          })
//       } else if (userWatchingCatMeme) {
//          errorCarejectllback({
//             name: 'USER WATCHING CAT MEME',
//             message: 'LOL'
//          })
//       } else {
//          resolve('VERY NICE! SUBSCRIBE!')
//       }


//    })
    
// }


// watchTutorialPromise().then((message) => {
//    console.log('Successs: ' + message)
// }).catch((error) => {
//    console.log(error.name + error.message)
// })






// ALL
 

// const recordVideoOne = new Promise((resolve, reject) => {
//    resolve('GANO EL UNO')

// })


// const recordVideoTwo = new Promise((resolve, reject) => {
//    resolve('GANO EL DOS')

// })

// const recordVideoThree = new Promise((resolve, reject) => {
//           resolve('GANO EL TRES')
    
// })


// Promise.all([
//       recordVideoOne,
//       recordVideoTwo,
//       recordVideoThree
// ]).then((messages) => {
//    console.log(messages)
// })
 

// LO MISMO PARA RACE ES IGUAL PERO SOLO DEVUELVE UN VALOR: EL PRIMERO EN EJECUTARSE 

// const recordVideoOne = new Promise((resolve, reject) => {
//    resolve('GANO EL UNO')

// })


// const recordVideoTwo = new Promise((resolve, reject) => {
//    resolve('GANO EL DOS')

// })

// const recordVideoThree = new Promise((resolve, reject) => {
//           resolve('GANO EL TRES')
    
// })


// Promise.race([
//       recordVideoOne,
//       recordVideoTwo,
//       recordVideoThree
// ]).then((messages) => {
//    console.log(messages)
// })
 










// THROW_AN_ERROR

// function parsePromised(json) {
//    return new Promise(function (fulfill, reject) {
//      try {
//        fulfill(JSON.parse(json));
//      } catch (e) {
//        reject(e);
//      }
//    });
//  }
 
//  function onReject(error) {
//    console.log(error.message);
//  }
 
//  parsePromised(process.argv[2])
//  .then(null, onReject);
