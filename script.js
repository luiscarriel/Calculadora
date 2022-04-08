// adição
var result = document.getElementById("result")

function adicao() {
    var n1 = Number((prompt("Digite um número")))
    var n2 = Number((prompt("Digite outro número")))
    var somar = n1 + n2;

    result.innerHTML = ` Resultado da adição: ${somar}`
}

// subtração

var result = document.getElementById("result")

function subtracao() {
    var n3 = Number((prompt("Digite um número")))
    var n4 = Number((prompt("Digite outro número")))
    var subtrair = n3 - n4;

    result.innerHTML = ` Resultado da subtração:${subtrair}`
}

// multiplicação
var result = document.getElementById("result")

function multiplicacao() {
    var n5 = Number((prompt("Digite um número")))
    var n6 = Number((prompt("Digite outro número")))
    var multiplicacao = n5 * n6;

    result.innerHTML = ` Resultado da multiplicação:${multiplicacao}`
}

// divisão
var result = document.getElementById("result")

function divisao() {
    var n7 = Number((prompt("Digite um número")))
    var n8 = Number((prompt("Digite outro número")))
    var divisao = n7 / n8;

    result.innerHTML = ` Resultado da divisão:${divisao}`
}