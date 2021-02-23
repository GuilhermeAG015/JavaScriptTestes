function testando (){
    var num = 10
    var num2 = 20

    var resultado = ((num * num2) + (10 - (20 / 2))) * 50

    return resultado
}

function outrafuncao(clicks){
    let i = clicks
    console.log(i)
    let img = document.getElementById('img')
    if(i % 2 == 0){
        img.classList.add('img2')
        img.classList.remove('img')
    }
    else{
        img.classList.add('img')
        img.classList.remove('img2')
    }
    if(i === 2){
        let root = document.getElementById('root')
        root.innerHTML = '<div><spam>Parabéns por ter desbloqueado a fase secreta</spam></div>'
        maisOutraFuncao(root)
    }
}

function maisOutraFuncao(root){
    let divRoot = root
    let inputN1 = document.getElementById('inputNumber')
    let inputN2 = document.getElementById('inputNumber2')
    let check1 = inputN1.textContent
    let check2 = inputN2.nodeValue

    console.log(check1)
    console.log(check2)

    // if(check1 == '' && check2 == ''){

    // }
}
