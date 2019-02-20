"use strict";
var un,pswd,gen;

function show(){
    un = document.getElementById('username').value;
    pswd = document.getElementById('password').value;
    gen = document.getElementById('gender').value;
    var ob= {
        username: un,
        pass: pswd,
        gender:gen
    };
    console.log(ob);
}
 
