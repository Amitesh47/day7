var user = {
    name:"amitesh",
    age: 20,
    gender: "male"                  //Destructioring
}
var {name,age} = {...user};
console.log(name);
console.log(age);

var [a,b] = [1,2];
console.log(a);
console.log(b);


//console.log(obj);