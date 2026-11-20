console.log("===============Ex1=================")
const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let numeros = [5]
for (let i = 0; i < 5; i++){
    numeros[i] = aleatorio(1,10)
}

numeros.sort()

console.log(numeros[0],numeros[numeros.length-1])

console.log("===================================")

console.log("===============Ex2=================")
let copia = [...numeros]
console.log(copia)
console.log("===================================")

