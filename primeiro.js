function calculoMedia() {
    var total = 0
    let qtd = arguments.length

    for(let i = 0; i < qtd; i++){
        if(typeof arguments[i] !== 'number'){
            erro()
            break
        }
        else{
            total += arguments[i]
        }
    }
    total = total / qtd
    return total
}

function calculoSoma() {
    var total = 0
    let qtd = arguments.length

    for(let i = 0; i < qtd; i++){
        if(typeof arguments[i] !== 'number'){
            erro()
            break
        }
        else{
            total += arguments[i]
        }
    }
    return total
}

function erro(){
    console.log(console.error())
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

function calculaMedia() {
    var numbers1 = calculoSoma(10, 5, 6, 8, 9)
    var numbers2 = calculoSoma(1, 8, 6, 5, 9)
    var numbers3 = calculoSoma(9, 5, 2, 7, 9)
    var numbers4 = calculoSoma(8, 3, 7, 4, 6) 

    console.log(numbers1)
    console.log(numbers2)
    console.log(numbers3)
    console.log(numbers4)

}

calculaMedia()

console.log('4ª Dimensão')

var i = 0

document.getElementById('calcula').addEventListener('click', function(){
    console.log('aperta não carai')
    i += 1
    outrafuncao(i)
})

