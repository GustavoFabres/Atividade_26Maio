/*Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.*/

const prompt = require("prompt-sync")();
let numero = Number(prompt("digite um numero:")
)
function fatorial(n) {
    if (n < 0) return "Error"
    if (n <= 1) return 1

    return n * fatorial(n - 1)
}
console.log("Fatorial de " + numero + " =", fatorial(numero))