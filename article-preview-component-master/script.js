var btn = document.querySelector(".btn");
var social = document.querySelector(".social");
var close = document.querySelector('#close');

btn.addEventListener("click", function(){
    
    if(social.style.display == 'flex'){
        social.style.opacity = '0';
    setTimeout(() => {
        social.style.display='none';
    }, 1000);
   }else{
   console.log('AAA');
   social.style.display= 'flex';
   setTimeout(() => {
    social.style.opacity = '1';
   }, 50);}

   

})

close.addEventListener('click', function(){

    console.log('bbbb');
    social.style.opacity = '0';

    setTimeout(() => {
        social.style.display='none';
    }, 1000);
})