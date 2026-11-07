//Coerció implícita
const text = "Hola món";

const implicit = !!text;

console.log(implicit);
console.log(typeof implicit);

//Coerció explícita
const textBuit = "";

const explicit = Boolean(textBuit);

console.log(explicit);
console.log(typeof explicit);