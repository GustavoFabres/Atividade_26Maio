/*Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é 
um cliente e o valor é a soma de todos os seus total. */
let excluir = null
let valorObj = Array()
let valor = null
let vendas = [
    {cliente: "Carlos", total: 200 },
    {cliente: "Cleitom", total: 300 },
    {cliente: "Carla", total: 20 },
    {cliente: "Carla", total: 4000 },
    {cliente: "Carlos", total: 580 }
]
console.log(vendas[0].cliente)
let nomes = vendas.reduce((acumulador , total) => acumulador + total.cliente, 0).toString()
console.log(nomes)
for(let w = 0; w < vendas.length; w++){
 valorObj[w] = new Object()
 valorObj[w].cliente = null
 valorObj[w].valor = null
 
for(let i = 0; vendas[w].cliente !== vendas[i+1].cliente || i != vendas.length; i++){
    
    for(let j = i+1; j < vendas.length; j++){
    if(vendas[i].cliente == vendas[j].cliente) {


        valor = valor + vendas[j].total;
        //vendas[j].cliente = null
        console.log("Soma="+valor)
    }
     else console.log(valor)

    }
   // valorObj[i].cliente = vendas[i].cliente
   // valorObj[i].valor = valor
    valor = 0
   // console.log(valorObj)
    //vendas[i].cliente = null
}
}
    



console.log(vendas.reduce((acumulador , total) => acumulador + total.total, 0))
vendas.valor = vendas.reduce((acumulador , total) => acumulador + total.total, 0)
console.log(valorObj)

