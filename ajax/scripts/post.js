$(document).ready(function(){
    let payload = {
        country: '',
        name: '',
        mobile:'',
    };

    $('#btnRegister').bind('click',function(){
        payload.country = $('#txtCountryCode').val();
        payload.name = $('#txtEmail').val();
        payload.mobile = $('#textMobile').val();
        $.ajax({
            url:'http://ec2-52-15-82-159.us-east-2.compute.amazonaws.com/gigx/api/signup',
            type:'POST',
            data: payload
        }).then(result=>{
            console.log(result);
        }).catch(err=>{
            console.log(err);
        })
    });
})