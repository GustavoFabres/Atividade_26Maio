/*Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.*/

const prompt = require("prompt-sync")();

function  ehDataValida(dia, mes, ano){
    console.log(ano.substr(ano.length - 3, ano.length - 2))
    if (mes <= 12 & mes > 0){
        if (mes == 2){
            if (dia <= 28 & dia > 0) return true
            else if (dia <= 29 & dia > 0) {
                if (ano % 400 == 0 & ano.substr(ano.length - 3, ano.length - 2) === "00") return true
                else if(ano % 4 == 0 & ano.substr(ano.length - 3, ano.length - 2) !== "00") return true
                else return false
            }
        
        }
        else if(mes == (4)|| (6) || (9) || (11)){
            if(dia <=30 & dia > 0) return true
            else return false
        } 
        else if (dia <= 31 & dia > 0) return true
        else return false
    }
    else return false
}

let dia = Number(prompt("Digite um dia:"))
let mes = Number(prompt("Digite um mes:"))
let ano = Number(prompt("Digite um ano:"))
let data = ehDataValida(dia.toString(), mes.toString(), ano.toString())
console.log(data)



