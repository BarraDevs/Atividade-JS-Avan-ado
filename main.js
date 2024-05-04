
//Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown' , function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
       handleResetClick() 
    }
})
// funções
function handleTryClick(event){
    event.preventDefault()
    toggleScreen()
       
}

function handleResetClick(){
    toggleScreen()
    
    randomNumber = Math.round(Math.random()*10)
} 

function toggleScreen(){
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}






