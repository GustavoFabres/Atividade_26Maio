/*Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.*/

const prompt = require("prompt-sync")();
let frase = prompt("Digite uma frase:")
let letra = ""
let juncao = ""
let palavras = Array()
let tamanho = 0

for(let i = 0; i <= frase.length; i++){
    letra =(frase.charAt(i))
    //console.log(letra)
    if (letra != " ") juncao = juncao + letra
    else {
        palavras[tamanho] = juncao
        juncao = ""
        tamanho++
    }
    //console.log(juncao)
    //console.table(palavras)
}
palavras[tamanho] = juncao
console.table(palavras.filter((valor) => valor != ""))
