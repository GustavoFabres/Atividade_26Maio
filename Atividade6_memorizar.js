/*Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.*/

function memoize(fn){
    const cache = new Map()

    return function(...args)
    {
    const key = JSON.stringify(args)

    if (cache.has(key)){ 
        return cache.get(key)
    }
    const resultados = fn.apply(this, args)
    cache.set(key, resultados)
    return resultados //console.log(args)
    }
}
const fator = memoize(
    function fatorial(n) {
    if (n < 0) return "Error"
    if (n <= 1) return 1
    return n * fatorial(n - 1)
})

/*function fatorial2(n) {
    if (n < 0) return "Error"
    if (n <= 1) return 1
    return n * fatorial2(n - 1)
}*/

console.log(fator(50))
//console.log(fatorial2(50))