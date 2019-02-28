// //Concept of Inheritance
// class Student{
//     constructor(a,b){
//         this.firstname = a;
//         this.lastname = b;
//         this.age;
//     }
//     getFullName(){
//         return this.firstname +" "+ this.lastname;
//     }
// }

// class Department extends Student{
//     constructor(a,b){
//         super();
//         super.firstname = a;
//         super.lastname = b;
//         this.branch;
//     }
// }

// let stu = new Student('Amitesh','Ranjan');
// console.log(stu);
// stu.age = 22;
// console.log(stu);
// console.log(stu.getFullName());
// let dept = new Department('Rishu','Prince');
// dept.age = 22;
// dept.branch = "ise";
// console.log(dept);

//Concept of Maps!!!

let m = new Map();
m.set("amitesh","ranjan");
m.set("amitesh","rishu");
m.set("rishu","rishu");
console.log(m.entries());
console.log(m.size);
m.delete("amitesh");
console.log(m.size);
m.forEach((v,k) =>{
    console.log(v);
    console.log(k);
});


//Concept Of Sets!!!


// let s = new Set();
// s.add('amitesh');
// s.add('amitesh1');
//  s.add('amitesh2');
//  s.add('amitesh2');
//  console.log(s);