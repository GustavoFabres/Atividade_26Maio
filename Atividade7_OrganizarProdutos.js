/*Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.*/
let nomePreco = Array()
nomePreco[1] = Array("laranja", "leite", "cereal")
nomePreco[2] = Array(20, 10, 45)
let arrayN = Array()
let organiza = Array()
 console.log(nomePreco.length)
console.table(nomePreco)
function soNomes(arreyTotal){
      //organiza = arreyTotal[2]
      //organiza.sort(((b , a) => a - b))
       //arrayN[0] = arreyTotal.length
        for(let i = 0; i < arreyTotal[1].length; i++ ){
          organiza[i] = arreyTotal[2][i]
       } 
       organiza.sort(((b , a) => a - b))
    for(let i = 0; i < arreyTotal[1].length; i++ ){
      
      
        for(let j = 0; j < arreyTotal[1].length; j++ ){
      if (organiza[i] == arreyTotal[2][j]) {arrayN[i] = arreyTotal[1][j]} 
      console.log(organiza[i])
      console.log(arrayN[i])
      console.log(arreyTotal[2][j])
    
    }
    }
    return arrayN
}
console.table(soNomes(nomePreco))