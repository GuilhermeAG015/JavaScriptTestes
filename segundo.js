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
}