(function(){
    "use strict";
   // var key = document.getElementById('textual');
    var eve = document.getElementById('buttons');
    //var num = document.getElementById('numeric');
    //var qs = document.querySelectorAll('.btn');
    //console.log(qs);
    eve.addEventListener('click', function(e){
       // console.log(e);
        console.log(this);
    });

    // key.addEventListener('keypress',function(e){
    //     console.log(e);
    //     console.log(this);
    //     validateInput(e, /^[A-Za-z]+$/);
    // });

    // numeric.addEventListener('keypress',function(e){
    //     validateInput(e, /^[0-9]*$/);
    // })

    // function validateInput(e,myregex){
    //     if(myregex.test(e.key)){

    //     }
    //     else{
    //         e.preventDefault();
    //     }
    // }

}) ();