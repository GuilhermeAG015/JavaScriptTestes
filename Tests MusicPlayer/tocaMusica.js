var posicaoInicial = 0
var posicaoAtual
var start = false
var index = true
var tagAudio
var tempo
var despausa = false
var milissegundos
var minutos
var segundos
var auto

function autoplay() {
    minutos = musicas[posicaoAtual].duraçãoMinutos
    segundos = musicas[posicaoAtual].duraçãoSegundos
    milissegundos = ((minutos * 60) + segundos) * 1000

    auto = setTimeout(proximaAuto, milissegundos)

}

function adicionaTagAudio() {
    let playerMusica = document.getElementById('musicaPlayer')
    playerMusica.innerHTML = `<audio id='musicaAtual'><source src='${musicas[posicaoAtual].linkMusica}'></audio>`
    let tagAudio2 = document.getElementById('musicaAtual')
    return tagAudio2
}

function play() {
    if (index && !start) {
        posicaoAtual = posicaoInicial
        tagAudio = adicionaTagAudio(posicaoAtual)
        console.log(tagAudio)
        tagAudio.play()
        index = false
        start = true
        nomeDaMusica()
        autoplay()

    }
    if (!start) {
        tagAudio = adicionaTagAudio(posicaoAtual)
        console.log(tagAudio)
        tagAudio.currentTime = tempo
        tagAudio.play()
        start = true
        nomeDaMusica()
        autoplay()
    }
}

function pause() {
    tempo = tagAudio.currentTime
    console.log(tempo)
    tagAudio.pause()
    start = false
    nomeDaMusica()
}

function proxima() {
    if (posicaoAtual < musicas.length - 1) {
        posicaoAtual += 1
        tagAudio = adicionaTagAudio(posicaoAtual)
        console.log(tagAudio)
        tempo = 0
        tagAudio.play()
        start = true
        nomeDaMusica()
        autoplay()
    } else {
        posicaoAtual = 0
        tagAudio = adicionaTagAudio(posicaoAtual)
        console.log(tagAudio)
        tempo = 0
        tagAudio.play()
        start = true
        nomeDaMusica()
        autoplay()
    }
}

function anteriorRepete() {
    tempo = 0
    tagAudio.currentTime = tempo
    nomeDaMusica()
}

function anterior() {
    if (posicaoAtual < musicas.length) {
        posicaoAtual -= 1
        tagAudio = adicionaTagAudio(posicaoAtual)
        console.log(tagAudio)
        tempo = 0
        tagAudio.play()
        start = true
        nomeDaMusica()
        autoplay()
    } else {
        posicaoAtual = 9
        tagAudio = adicionaTagAudio(posicaoAtual)
        console.log(tagAudio)
        tempo = 0
        tagAudio.play()
        start = true
        nomeDaMusica()
        autoplay()
    }
}

document.getElementById('anterior').addEventListener('click', anteriorRepete)
document.getElementById('anterior').addEventListener('dblclick', anterior)

function nomeDaMusica() {
    if (start == true) {
        let nomeMusica = document.getElementById('nomeMusica')
        console.log(nomeMusica)
        nomeMusica.innerHTML = `<span>${musicas[posicaoAtual].nome}</span>`
        console.log(musicas[posicaoAtual].nome)
    }
}

function proximaAuto() {
    if (posicaoAtual < musicas.length - 1) {
        posicaoAtual += 1
        tagAudio = adicionaTagAudio(posicaoAtual)
        console.log(tagAudio)
        tempo = 0
        tagAudio.play()
        start = true
        nomeDaMusica()
        autoplay()
        console.log('autoplay')
        console.log(tempo)
        clearTimeout(auto)

    } else {
        posicaoAtual = 0
        tagAudio = adicionaTagAudio(posicaoAtual)
        console.log(tagAudio)
        tempo = 0
        tagAudio.play()
        start = true
        nomeDaMusica()
        autoplay()
        clearTimeout(auto)
    }
}