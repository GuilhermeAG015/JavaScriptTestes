function alteraBemVindo(){
    let nome = 'Starkiller'
    let bemVindo = document.querySelector('.top-bar p')
    let resultado = bemVindo.innerHTML = 'Bem Vindo(a), <b>' + nome + '</b>'
    console.log(bemVindo)
}
alteraBemVindo()

