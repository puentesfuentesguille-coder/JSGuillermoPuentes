

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
console.log("===============Ex3=================")

function ex3 (x){
    if (x<5){
        console.log("Suspès")
    }else if(x<6){
        console.log("Suficient")
    }else if(x<7){
        console.log("Bé")
    }else if(x<9){
        console.log("Notable")
    }else if(x<=10){
        console.log("Excel·lent ")
    }
}
ex3(4.75)
ex3(9)
ex3(7.66)
console.log("===================================")
console.log("===============Ex4=================")

function ex4(numero){
    switch (true){
        case (numero % 3 === 0 && numero % 7 === 0):
            console.log(numero+" es multiple de 3 i de 7")
            break;

        case (numero % 3 === 0):
            console.log(numero+" es multiple de 3")
            break;

        case (numero % 7 === 0):
            console.log(numero+" es multiple de 7")
            break;

        default:
            console.log("No es multiple ni de 3 ni de 7")
            break;
    }
}
ex4(5)
ex4(14)
ex4(21)
ex4(27)
console.log("===================================")
console.log("===============Ex5=================")

function ex5(x) {
    let suma = 0;
    let n = 0;

    for (let i = 1; suma + i <= x; i++) {
        suma += i;
        n = i;
    }

    return n;
}

console.log(ex5(15));
console.log("===================================")