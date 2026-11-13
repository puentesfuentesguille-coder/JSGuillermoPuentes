

console.log("===============Ex1=================")

function ex1(numero){
    if (numero % 3 === 0){
        console.log(numero +" es multiple de 3")
    }else if (numero % 7 === 0){
        console.log(numero +" es multiple de 7")
    }else{
        console.log(numero+" no es Multiple ni de 3 ni de 7")
    }
}
ex1(5)
ex1(27)
ex1(14)
console.log("===================================")
console.log("===============Ex2=================")

function ex2 (x,y){
    x <= 50 && x >= 10 ? console.log(x+" esta en el rang") : console.log(x+" no esta en el rang")
    y <= 50 && y >= 10 ? console.log(y+" esta en el rang") : console.log(y+" no esta en el rang")
}
ex2(20,80)
console.log("===================================")
