function calculoSoma(n1, n2) {
    var n3 = n1 + n2

    return n3
}

function calculoSub(n1, n2) {
    var n3 = n1 - n2

    return n3
}


function calculoVezes(n1, n2) {
    var n3 = n1 * n2

    return n3
}

function calculoDiv(n1, n2) {
    var n3 = n1 / n2

    return n3
}

function calcula(n1, n2, i){
    var n10 = n1
    var n20 = n2
    var j = i

    if(j == 'soma'){
        let n3 = calculoSoma(n10, n20)
        console.log("O resultado da soma é: " + n3)
    }
    if(j == 'subtracacao'){
        let n3 = calculoSub(n10, n20)
        console.log("O resultado da subtracacao é: " + n3)
    }
    if(j == 'vezes'){
        let n3 = calculoVezes(n10, n20)
        console.log("O resultado da multiplicação é: " + n3)
    }
    if(j == 'divisao'){
        let n3 = calculoDiv(n10, n20)
        console.log("O resultado da divisão é: " + n3)
    }
}

var n1 = 10
var n2 = 2
var i = 'soma'

calcula(n1, n2, i)

const elTelas = document.getElementById('root')

console.log(elTelas)

let resultado = testando()

console.log(resultado)