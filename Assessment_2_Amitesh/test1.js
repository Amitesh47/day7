(function(){
    "user strict";
var newName = function(name){
    if(name.length <= 2){
        return name;
    }
    else{
        return name.slice(1,name.length-1);
    }
}
console.log(newName("Amitesh"));
})();