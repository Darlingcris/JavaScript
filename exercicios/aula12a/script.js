function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var data1 = new Date()
    var minuto = data1.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/manha.png"
        document.body.style.background = '#a56468'
    } else if (hora >= 12 && hora <= 18) {
        img.src = "imagens/tarde.png"
        document.body.style.background = '#ffca4e'
    } else {
        img.src = "imagens/noite.png"
        document.body.style.background = '#08364e'
    }
}