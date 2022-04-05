function calcular() {
    var num = document.querySelector('input#tab')
    var tabela = document.querySelector('div#res')
    var n = Number(num.value)
    var c = 0

    if (num.value.length == 0) {
        alert('Dado inválido. Tente novamente!')

    } else {
        res.innerHTML = `Tabuada do ${n}<br>`

        while (c <= 10) {
            r = c * n
            res.innerHTML += `<br>${n} x ${c} = ${r}`
            c += 1
        }
    }



}