// var obj = {name:'amitesh'};
// var stu = {name:'ranjan'};
// var greeting = function(a,b,c){
//     return "welcome " +this.name+ " to " +a+ " " +b+ " in " +c;
// };


// //call method concepts!!
// //console.log(greeting.call(obj,'test1','test2','test3'));
// console.log(greeting.call(stu,'test1','test2','test3'));


// //apply method concepts!!
// console.log(greeting.apply(obj,['rishu','prince','rankan']));

// //bind method concepts!!
// let x = greeting.bind(obj);
// console.log(x('amitesh','ranjan','test1'));


// function * generatorFunction(){
//     console.log('this will be exec first');
//     yield 'Hello, ';
//     console.log('I am second');
//     yield 'World!';
//     console.log('I am third');
//     yield 'RCB!';
// }

// const generatorObject = generatorFunction();
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);


function * powerSeries(number, power) {
    let base = number;
    while(true) {
      yield Math.pow(base, power);
      base--;
    }
  }

  let val = powerSeries(2,4);
  console.log(val.next().value);
  console.log(val.next().value);
  console.log(val.next().value);
  console.log(val.next().value);
  console.log(val.next().value);
  console.log(val.next().value);
  console.log(val.next().value);
