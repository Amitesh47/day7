let promise1 = new Promise((resolve,reject) => {
    if(true){
        resolve('Promise 1');                               //promises concept.
    }                                                       //resolve and reject are functions which can have anything inside it
    else{
        reject('I am the rejected data for promsie 1');
    }
});

let promise2 = new Promise((resolve,reject) => {
    if(true){
        resolve('Promise 2');                               
    }                                                       
    else{
        reject('I am the rejected data for promsie 2');
    }
});

Promise.all([promise1,promise2]).then((data) => {
    console.log(data);                                     //if either of the promise is not fullfilled then
}).catch(err => {                                          //the promise reject which gets executed first is responded in err.
    console.log(err);
})

// promise.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

console.log('I am first');
