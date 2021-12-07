
document.querySelectorAll('.accordion_pergunta').forEach((item) => {
    item.addEventListener('click',(event) => {
        console.log('test');
        item.classList.toggle('show');
        item.nextElementSibling.classList.toggle('open');
    });
    
});