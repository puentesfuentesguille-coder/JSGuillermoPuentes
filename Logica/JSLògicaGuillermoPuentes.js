

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
console.log("===============Ex6=================")

function ex6(text,suma){
    for (let i = 0; i < text.length;i++){
        if (!isNaN(text[i])) {
            suma += Number(text[i])
        }
    }
    return suma;
}
console.log(ex6("Buenos dis 5 señora 10",0))
console.log("===================================")
console.log("===============Ex7=================")

function ex7(numeros =[]){
    let auxiliar
    console.log(numeros)
    for(let i = 0; i < numeros.length;i++){
        for(let j = 0; j< numeros.length-1-i;j++){
            if (numeros[j]<numeros[j+1]){
                auxiliar = numeros[j]
                numeros[j] = numeros[j+1]
                numeros[j+1] = auxiliar
            }
        }
    }
    console.log(numeros)
}
ex7([1,5,9])
console.log("===================================")
console.log("===============Ex8=================")

function ex8(enter){
    for (let i = 0; i < enter;i++){
        if (i % 2 == 0){
            console.log(i+" es parell")
        }else{
            console.log(i+" es senar")
        }
    }
}
ex8(7)
console.log("===================================")