function outer() {
    var x = 10;
    return function(){
        console.log(x);
    };
}

var exec = outer();
exec();

