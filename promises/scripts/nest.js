(function(){
    var array = [1,2,3,4,5];
    Array.prototype.even = function(){
    }
    array.even();
    var obj = new Object();
    Object.prototype.amitesh = function(){
        console.log("I am Amitesh");
    }
    obj.amitesh();
})();

(function(){
    var x = new Object();
    x.amitesh();
})();