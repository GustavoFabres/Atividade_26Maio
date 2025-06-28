/*Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é 
um cliente e o valor é a soma de todos os seus total. */

const output = [
    {"Cliente": "Carlos", "Valor": "1000"},
    {"Cliente": "Cleiton", "Valor": "500"},
    {"Cliente": "Carla", "Valor": "100"},
    {"Cliente": "Carla", "Valor": "100"},
    {"Cliente": "Carlos", "Valor": "1000"},
    {"Cliente": "Carla", "Valor": "100"}
]
console.log(output)
const sum = output.reduce((acc, cur)=> {
    const found = acc.find(val => val.Cliente === cur.Cliente)
    if(found){
        found.Valor+=Number(cur.Valor)
    }
    else{
        acc.push({...cur, Valor: Number(cur.Valor)})
    }
    return acc
}, [])

console.log(sum)