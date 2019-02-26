var x = 20;
function testme(){
    let x = 30;
    if(true){
        let x = 10;
        console.log(x);
    }
    x = 60;
    console.log(x);
}
testme();
console.log(x);