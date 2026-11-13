
//Ex1

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