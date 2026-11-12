//Ex 1
function nom(nom,cognoms) {
console.log(nom,cognoms)
}

nom("Guillermo","Puentes Fuentes")
console.log("==========================")

//Ex 2
function variable(a) {
    console.log(typeof a)
}
variable(17)
variable("Probando cositas")
variable(false)
console.log("==========================")

//Ex 3
function data() {
    console.log(new Date)
}
data()
console.log("==========================")

//Ex 4

console.log("==========================")

//Ex 5
function contarVocales(texto) {
    let contador = 0;
    let vocales = "aeiou";

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales("Hola mundo"));
console.log("==========================")


//Ex 6
function sumarTresNumeros(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}

console.log(sumarTresNumeros(5, 3));
console.log("==========================")

//Ex 7
function exercici7() {
    data();
    return sumarTresNumeros(5, 3);
}

console.log(exercici7());
console.log("==========================");

//Ex8
function comprobarTreinta(num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2 === 30);
}

console.log(comprobarTreinta(30, 5));
console.log(comprobarTreinta(15, 15));
console.log(comprobarTreinta(10, 5));
console.log("==========================");

//Ex9
const comprobarTreinta2 = function(num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2 === 30);
};

console.log(comprobarTreinta2(30, 5));
console.log(comprobarTreinta2(15, 15));
console.log(comprobarTreinta2(10, 5));
console.log("==========================");

//Ex 10
const Ex10 = (a, b) => a === b;

console.log(Ex10(5, 5));
console.log(Ex10(5, "5"));
console.log(Ex10(true, false));
console.log("==========================");

//Ex 11
const raizCuadrada = (numero) => Number(Math.sqrt(numero).toFixed(2));

console.log(raizCuadrada(7));
console.log("==========================");

//Ex 12
const ex12 = texto => texto.toLowerCase();

console.log(ex12("HEYY MUY BUENAS A TODOS GUAPISIMOOS"));
console.log("==========================");

//Ex 13
const noEsNull = (a, b) => a ?? b;

console.log(noEsNull(null, "Sisisi"));
console.log(noEsNull(":V", null));
console.log(noEsNull(0, null));
console.log("==========================");

//Ex 14
const posicio = (frase, paraula) => {
    let indice = frase.indexOf(paraula);
    return frase.length - indice;
};

const dividir = (frase, paraula) => {
    let distancia = posicio(frase, paraula);
    return frase.slice(distancia);
};

console.log(posicio("Hola com estàs", "com"));
console.log(dividir("Hola com estàs", "com"));
console.log("==========================");

//Ex 15
const ex15 = (x) => x + x + x;

console.log(ex15(5));
console.log(ex15("Hola "));
console.log("==========================");




