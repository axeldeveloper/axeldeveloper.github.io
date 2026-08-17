var inputValor = document.querySelector('#valor-hora');

var inputProjeto = document.querySelector('#horas-projeto');
var resultado = document.querySelector('#resposta');

function calcularValorHora() {
  var valorHora = inputValor.valueAsNumber;
  var horasProjeto = inputProjeto.valueAsNumber;
  var valorTotal = valorHora * horasProjeto;

  var valorDuasCasas = valorTotal.toFixed(2);
  resultado.textContent = 'R$ ' + valorDuasCasas;
}