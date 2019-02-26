var parent = document.querySelector('#parent');
parent.addEventListener('click',function(e){
    console.log("parent clicked");
    
});

var child = document.querySelector('#child');
child.addEventListener('click',function(e){
    console.log("child clicked");
    e.stopPropagation();
});

document.addEventListener('contextmenu',function(e){
    e.preventDefault();
    alert('right click disabled');
})