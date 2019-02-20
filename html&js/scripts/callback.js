"use strict";
var initValue,count;
initValue = 5;
count = 10;
function counter(callback){
    count--;
    if(initValue > 0){
        console.log(initValue);
        initValue--;
        callback(callback);
    }
}

function init(cb){
    cb(cb);
}

init(counter);
console.log(count);

var x = (function(){return 7+6;})();
console.log(x);

