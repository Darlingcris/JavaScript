function contar() {
    var i = document.querySelector("input#txtin")
    var f = document.querySelector("input#txtfim")
    var p = document.querySelector("input#txtpas")
    var res = document.querySelector("div#res")


    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('Error. Verifique os dados e tente novamente!')


    } else {
        res.innerHTML = 'Contando: '
        var contI = Number(i.value)
        var contF = Number(f.value)
        var contP = Number(p.value)
        var c = contI
        if (contP <= 0) {
            alert('Passo inválido! Considerando Passo 1.')
            contP = 1
        }
        if (contI < contF) {
            while (c <= contF) {

                res.innerHTML += `${c}👉 `
                c += contP
            }

        } else {
            while (c >= contF) {
                res.innerHTML += `${c}👉 `
                c -= contP
            }


        }
        res.innerHTML += '🏁'
    }
}