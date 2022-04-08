var formn = document.querySelector('input#num')
var formt = document.querySelector('select#add')
var res = document.querySelector('div# res')
var tabela = []

function adicionar() {

    if (formn.value.length == 0) {
        alert('[ERROR] Digite um valor!')
    } else if (formn.value < 0 || formn.value > 100) {
        alert('[ERROR] Digite um valor entre 1 e 100!')
    } else if (tabela.indexOf(formn.value)) {
        alert('[ERROR] Esse número já existe!')
    } else if
    /*{
        var n = Number(formn.value)
        tabela.push(n)
        var item = document.createElement('option')
        item.text = `O valor ${n} foi adicionado`
        res.appendChild(item)*/
}
}