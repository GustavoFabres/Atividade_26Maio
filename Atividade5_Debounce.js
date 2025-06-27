/*Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.*/
const prompt = require("prompt-sync")();
let numero = null
let tempo = false
let tempAtual = null
let date = new Date()
let delay1 = 3000


function debounce(fn , delay)
{

if (Date.now() > (tempAtual + delay) ){
    tempo=true
    console.log("true="+(Date.now()-tempAtual))
    console.log(fn)
    return fn
}else{
    tempo=false
    //console.log("false="+(Date.now()-tempAtual))
}

/*setTimeout(function() {
   console.log(fn);
}, delay)*/

}

function fatorial(n) {
    if (n < 0) return "Error"
    if (n <= 1) return 1
    return n * fatorial(n - 1)
    
}

//let fun1 = fn(10)
while(numero != 0){
    numero = prompt("digite um numero:")
   
       // console.log(tempAtual)
        debounce(fatorial(numero), delay1)
        if (tempo == true){
        tempAtual = Date.now();
        tempo=false;
    }
    //}else{
       
   // }
    
//console.log(date.getTime())


   
 
}
    //console.log(debounce(fatorial(numero), 3000))


