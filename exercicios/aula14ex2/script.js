function calcular() {
    var num = document.querySelector('input#tab')
    var tab = document.querySelector('select#seltab')



    if (num.value.length == 0) {
        alert('Dado inválido. Tente novamente!')

    } else {
        var n = Number(num.value)
        var c = 0
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`

            tab.appendChild(item)
            c++
        }
    }
}