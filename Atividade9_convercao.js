/*Escreva duas funções:
○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.*/
let ArrayPar = [
    [
        "Carlos", 40
    ],
    [
        "Carla", 30
    ],
    [
        "Cleitom", 90
    ],
    [
        "Carlinho", 11
    ]
]


function paresParaObjeto(pares){
    let criar = Object
    for(let i = 0; i < pares.length; i++){
    criar[pares[i][0]] = pares[i][1]
    }
    return criar
   
}
function objetoParaPares(obj){
    let criar = Array()
    let guardaK = Array()
    let guardaV = Array()
    for(let i = 0; i < Object.keys(obj).length; i++){
    criar[i] =  Array()
    guardaK = Object.keys(obj)
    guardaV = Object.values(obj)
    criar[i][0] = guardaK[i]
    criar[i][1] = guardaV[i]
    }
 return criar
}
console.table(ArrayPar)
console.log(paresParaObjeto(ArrayPar))
console.table(objetoParaPares(paresParaObjeto(ArrayPar)))