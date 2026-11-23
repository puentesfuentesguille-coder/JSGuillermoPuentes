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

console.log("===============Ex5=================")
let numeros2 = [1,5,10]

let cubs = numeros2.map(num => num ** 3);

console.log(cubs);
console.log("===================================")

console.log("===============Ex6=================")
let paraules = ["holaaa", "claro", "algo", "alga", "panama"];

let si = paraules.filter(paraula => paraula.split("a").length - 1 > 1);

console.log(si);
console.log("===================================")

console.log("===============Ex7=================")
let dades = new Map();

dades.set("nom", "Pedro Picapiedra");
dades.set(10, "Un saludo al 10");
dades.set(true, "Mas cierto que cierto");

console.log(dades);
console.log(dades.get("nom"));
console.log("===================================")

console.log("===============Ex8=================")

let paraula = "holaloh";
let cua = paraula.split("");
let paraulaInvertida = "";

while (cua.length > 0) {
    let caracter = cua.shift();
    paraulaInvertida = caracter + paraulaInvertida;
}

let verdad = (paraula === paraulaInvertida);

console.log("La paraula és palíndrom? " + verdad);
console.log("===================================")


