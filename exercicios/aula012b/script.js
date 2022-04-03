function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (forano.value.length == 0 || Number(forano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var forsex = document.getElementsByName('radsex')
        var idade = ano - Number(forano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (forsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/garoto.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/anciao.png')
            }
        } else if (forsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
}
}