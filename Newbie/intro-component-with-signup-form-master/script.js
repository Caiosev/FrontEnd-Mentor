    var btn = document.getElementById("claim");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   
btn.addEventListener('click', ()=>{
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(nome.value ==""){
        console.log("N tem nome")
        document.getElementById("erro-nome").classList.add("show");
        nome.classList.add("error-input");
        
    }if(sobrenome.value ==""){
        console.log("N tem sobrenome")
        document.getElementById("erro-sobre").classList.add("show");
        sobrenome.classList.add("error-input");
       
    }if((!email.value.match(pattern)) || email.value==""){
        console.log("N tem email")
        document.getElementById("erro-email").classList.add("show");
        email.classList.add("error-input");
        
    }if(senha.value ==""){
        console.log("N tem senha")
        document.getElementById("erro-pass").classList.add("show");
        senha.classList.add("error-input");
        
    }
    if(nome.value!==""){
        console.log("TEM")
        document.getElementById("erro-nome").classList.remove("show");
        nome.classList.remove("error-input");
    }if(sobrenome.value!==""){
        console.log("TEM")
        document.getElementById("erro-sobre").classList.remove("show");
        sobrenome.classList.remove("error-input");
    }if(email.value!==""){
        console.log("TEM")
        document.getElementById("erro-email").classList.remove("show");
        email.classList.remove("error-input");
    }if(senha.value!==""){
        console.log("TEM")
        document.getElementById("erro-pass").classList.remove("show");
        senha.classList.remove("error-input");
    }

})

