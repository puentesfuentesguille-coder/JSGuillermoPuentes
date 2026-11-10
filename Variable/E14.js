//Coerció implícita
const boolea1 = true;

const implicit = +boolea1;

console.log(implicit);
console.log(typeof implicit);


//Coerció explícita
const boolea2 = false;
const explicit = Number(boolea2);

console.log(explicit);
console.log(typeof explicit);