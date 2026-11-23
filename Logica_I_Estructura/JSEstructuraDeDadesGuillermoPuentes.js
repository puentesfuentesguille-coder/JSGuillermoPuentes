console.log("===============Ex1=================")
const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let numeros = [5]
for (let i = 0; i < 5; i++){
    numeros[i] = aleatorio(1,10)
}

numeros.sort((a, b) => a - b)
console.log(numeros)
console.log(numeros[0],numeros[numeros.length-1])

console.log("===================================")

console.log("===============Ex2=================")
let copia = [...numeros]
console.log(copia)
console.log("===================================")

console.log("===============Ex3=================")
let duplicats = [...numeros,...copia]
let noduplicat = []

for (i of duplicats){
    if (!noduplicat.includes(i)){
        noduplicat.push(i)
    }
}

console.log(noduplicat)
console.log(duplicats)
console.log("===================================")

console.log("===============Ex4=================")
duplicats = [...numeros, ...copia]
noduplicat = [...new Set(duplicats)]

console.log(noduplicat)
console.log(duplicats)
console.log("===================================")
