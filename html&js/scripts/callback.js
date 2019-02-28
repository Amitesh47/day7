"use strict";
// var initValue,count;
// initValue = 5;
// count = 10;
// function counter(){
//     count--;
//     if(initValue > 0){
//         console.log(initValue);
//         initValue--;
//         counter();
//     }
// }

// function init(cb){
//     cb();
// }

// init(counter);
// console.log(count);

// var x = (function(){return 7+6;})();
// console.log(x);


var array = [{
    name:'amitesh',
    age:20,
},{
    name:'lochan',
    age: 200,
    lname:'ranjan',
}]
for(var x of array){
    console.log(x.name);

}
