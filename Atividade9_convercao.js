/*Escreva duas funções:
○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.*/
let ArrayPar = [
    [
        1, 40
    ],
    [
        2, 30
    ],
    [
        3, 90
    ],
    [
        4, 11
    ]
]


function paresParaObjeto(pares){
    let criar = Object
    for(let i = 0; i < pares.length; i++){
    criar[pares[1][i]] = new Object
    //valorObj[w].cliente = null
    //valorObj[w].valor = null
    }
    return criar
   
}
console.log(paresParaObjeto(ArrayPar))