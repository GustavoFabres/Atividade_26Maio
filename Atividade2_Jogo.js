/*Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.*/
const prompt = require("prompt-sync")();
let numeroAleatorio = Math.floor(Math.random() * (0 - 100 + 1)) + 100
let numeroChutado = null
let contador = null

console.log("Adivinhe o numero sorteado")

//console.log(numeroAleatorio)

while(numeroAleatorio !== numeroChutado){
    numeroChutado = Number(prompt("Digite um numero de 1 a 100:"))
    contador++
    //if(numeroChutado !== Number) console.log("isso não é um numero")
     if (numeroAleatorio > numeroChutado) console.log("mais alto")
        else if (numeroAleatorio < numeroChutado) console.log("mais baixo")
          else if(numeroChutado == numeroAleatorio) console.log("Parebens voce acertou na sua " + contador + "º" + " tentativa")
            else console.log("isso nao e um numero")

}

//console.log("Parebens voce acertou")
