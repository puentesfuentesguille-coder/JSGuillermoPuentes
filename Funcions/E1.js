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


