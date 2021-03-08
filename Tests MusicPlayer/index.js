var i = 0

function toca() {
    let musica1 = document.getElementById('musica')
    if (i == 0) {
        executaToca(musica1, i)
        i += 1
    }
    else {
        executaToca(musica1, i)
        i += 1
    }
}

function executaToca(musica1, i) {
    let index = i
    if (index % 2 == 0) {
        musica1.play()
        console.log(index + '0')
        console.log(musica1)
    } else {
        console.log(musica1)
        console.log(index + '1')
        musica1.pause()
        musica1.currentTime = 0
    }

}

function exibe() {
    // console.log('teste')
    // let pass = document.getElementById('inputPassword4').textContent
    // let foot = document.querySelector('footer')

    // console.log(pass)
    // console.log(foot)
    // // foot.innerHTML = '<div>' + pass + '</div>'

    // let nomeMusica1 = new Audio(musicas[0].nomeMusica)
    // let nomeMusica2 = new Audio(musicas[1].nomeMusica)


    if (i == 0) {
        var div = document.getElementById('audios')
        var div1 = div.firstElementChild
        var div2 = div.lastElementChild
        div1.innerHTML = `<audio id="musica1"><source src="${musicas[0].nomeMusica}"></audio>`
        div2.innerHTML = `<audio id="musica2"><source src="${musicas[1].nomeMusica}"></audio>`
        var nomeMusica1 = document.getElementById('musica1')
        var nomeMusica2 = document.getElementById('musica2')

        console.log(div)

        console.log(nomeMusica1)
        console.log(nomeMusica2)
        executaToca2(nomeMusica1, i, nomeMusica2)
        i += 1

    }

    else {
        var nomeMusica1 = document.getElementById('musica1')
        var nomeMusica2 = document.getElementById('musica2')

        console.log(nomeMusica1)
        console.log(nomeMusica2)
        executaToca2(nomeMusica1, i, nomeMusica2)
        i += 1
    }

}

function executaToca2(musica1, i, musica2) {
    console.log(musica1)
    console.log(musica2)
    let index = i
    if (index % 2 == 0) {
        musica2.pause()
        musica2.currentTime = 0
        musica1.play()
        console.log(index + '0')
    } else {
        musica1.pause()
        musica1.currentTime = 0
        musica2.play()
        console.log(musica)
        console.log(index + '1')
    }

}