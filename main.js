let num1=0
let signo;


let botones=document.querySelectorAll(".btn")
let mostrar =document.querySelector(".mostrar")
let signos = document.querySelectorAll(".signo")

for(let i=0; i < botones.length; i++){
    botones[i].addEventListener("click",()=>{
        let resul =botones[i].value
        mostrar.textContent+=resul
    })
}

function resultado(){
    let num2=parseInt( mostrar.textContent)
    let resultado;
    if(signo == "+"){
        resultado=num2+num1
    }
    else if(signo == "-"){
        resultado=num1-num2
    }
    else if(signo == "*"){
        resultado=num1*num2
    }
    else if(signo == "/"){
        resultado=num1/num2
    }
    mostrar.textContent=resultado


}
signos.forEach(element => {
    element.addEventListener("click",()=>{
        num1 =parseInt(mostrar.textContent)
        mostrar.textContent=""

        if (element.value == "+"){
            signo="+"
        }
        
        else if (element.value == "-"){
            signo="-"
        }

        else if (element.value == "X"){
            signo="*"
        }

        else if (element.value == "%"){
            signo="/"
        }
        
    })
});

function ac (){
    mostrar.textContent=""
}