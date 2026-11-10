//Exercici 6
let num = 1234
let bigInt = 5678n

//ho paso a number perque sino al voler utilitzar decimals dona error
const bigInt2 = Number(bigInt)


const suma = num + bigInt2
const resta = num - bigInt2
const multiplicacio = num * bigInt2
const divisio = num / bigInt2

console.log('Suma:', suma.toFixed(1))
console.log('Resta:', resta.toFixed(1))
console.log('Multiplicació:', multiplicacio.toFixed(1))
console.log('Divisió:', divisio.toFixed(1))