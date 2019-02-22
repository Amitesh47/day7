(function(){
    "use strict";
    var student;
    function person(){
        this.x = 10;
        this.firstName = "amitesh";
    }
    student = new person();
   // console.log(student.firstName);
    //console.log(student.x);
})();

var student,x;
    function person(){
        this.x = 10;
        this.firstName = "amitesh";
    }
    student =  person();
    //console.log(x);
    x = document.getElementById('same');
    console.log(x);

    function hello(){
        var myname = "ranjan";
        this.myname = "amitesh";
    }

    var x = new hello();
    console.log(x.myname);