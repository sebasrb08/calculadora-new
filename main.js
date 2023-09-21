let botones=document.querySelectorAll(".btn")
let mostrar =document.querySelector(".mostrar")
for(let i=0; i < botones.length; i++){
    botones[i].addEventListener("click",()=>{
        console.log(botones[i])
        let resul =botones[i].value
        mostrar.textContent+=resul
    })
}

function resultado(num){
    let numero=0
    numero+=num
    

}

function ac (){
    mostrar.textContent=""
}
function sumar(){
    let num1 =parseInt(mostrar.textContent)
    mostrar.textContent=""
    resultado(num1)
}