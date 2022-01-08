let msgerror = document.getElementById("error");
let errorimg = document.getElementById("error-icon");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
console.log("a");



function validEmail(){
    let email = document.getElementById("email").value;
    console.log("a");
    if(email.match(pattern)){
        console.log("valido");
        msgerror.style.display="none";
        errorimg.style.display="none";
    }else{
        msgerror.style.display="block";
        errorimg.style.display="block";
    }
   
}