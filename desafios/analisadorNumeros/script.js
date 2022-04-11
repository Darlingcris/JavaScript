var formn = document.querySelector('input#num')
var formt = document.querySelector('select#add')
var res = document.querySelector('div#res')

var tabela = []

function adicionar() {


    if (formn.value.length == 0) {
        alert('[ERROR] Digite um valor!')

    } else if (formn.value < 0 || formn.value > 100) {
        alert('[ERROR] Digite um valor entre 1 e 100!')


    } else {

        var n = Number(formn.value)
        var item = document.createElement('option')

        if (tabela.indexOf(n) != -1) {
            alert('[ERROR] Esse número já existe!')

        } else {
            tabela.push(n)
            item.text = `O valor ${n} foi adicionado`
            formt.appendChild(item)
            soma = tabela.reduce(function(soma, i) {
                return soma + i;
            });
            media = soma / (tabela.length)
            res.innerHTML = ''
        }
    }
    formn.value = ''
    formn.focus()
}

function finalizar() {

    res.innerHTML = `<p>Ao todo temos ${tabela.length} números cadastrados.</p>

    <p>O maior valor informado foi ${Math.max(...tabela)}.</p>
    
    <p>O menor valor informado foi ${Math.min(...tabela)}.</p>
    
    <p>A soma dos valores digitados é ${soma}.</p>
    
    <p>A média dos valores digitados é ${media}.</p>
    `


}