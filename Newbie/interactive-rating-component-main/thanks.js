const nota = localStorage.getItem('nota')
console.log(nota)
document.querySelector('label').innerHTML =`You selected ${nota} out of 5`