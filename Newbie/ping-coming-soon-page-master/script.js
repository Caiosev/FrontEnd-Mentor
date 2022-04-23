const errorP = document.querySelector('#error')
const btn = document.querySelector('#noteBtn')

errorP.style.display = 'none'


const emailCheck = () =>{
    const email = document.querySelector('#input').value
    let re = /\S+@\S+\.\S+/;
    if(re.test(email)){
        errorP.style.display = 'none'
    }else{
        errorP.style.display = 'block'
    }
}


btn.addEventListener('click',emailCheck)

