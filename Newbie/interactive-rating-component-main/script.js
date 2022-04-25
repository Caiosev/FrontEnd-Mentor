const allNotes = document.querySelectorAll('.note')
let nota;
const clearAllNotes = () =>{
    for (let index = 0; index < allNotes.length; index++) {
        allNotes[index].classList.remove('select')
    }
   
}

const addSelect = (e) =>{
    clearAllNotes()
    const elemento = e.target
    elemento.classList.add('select')
    nota = elemento.innerHTML
    
}

const addAllEvent = () =>{
    for (let index = 0; index < allNotes.length; index++) {
        allNotes[index].addEventListener('click',addSelect)
    }
}

addAllEvent()

const submit = () =>{
    console.log(nota)
    localStorage.setItem('nota',nota)
}
