// Função para obter as informações salvas no localStorage
function getInformacoes() {
  return JSON.parse(localStorage.getItem('informacoes')) || [];
}

// Função para exibir as informações na tabela
function exibirInformacoes() {
  var informacoes = getInformacoes();
  var tabela = document.getElementById('tabelaCRUD');

  // Limpar tabela
  tabela.getElementsByTagName('tbody')[0].innerHTML = ' ';


  for (var i = 0; i < informacoes.length; i++) {
    var informacao = informacoes[i];

    var linha = document.createElement('tr');
    var colunaNome = document.createElement('td');
    var colunaHoras = document.createElement('td');
    var colunaSalario = document.createElement('td');
    var colunaTotal = document.createElement('td');
    var colunaCargo = document.createElement('td');

    colunaNome.textContent = informacao.nome;
    colunaHoras.textContent = informacao.horas;
    colunaSalario.textContent = informacao.salario;
    colunaTotal.textContent = informacao.total;
    colunaCargo.textContent = informacao.cargo;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaHoras);
    linha.appendChild(colunaSalario);
    linha.appendChild(colunaTotal);
    linha.appendChild(colunaCargo);


    tabela.getElementsByTagName('tbody')[0].appendChild(linha);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  exibirInformacoes();
});

// Obtém todos os elementos com a classe "nome-enfermeiro"
let elementos = document.getElementsByClassName('nome-enfermeiro');

// Converte a coleção de elementos em um array
let elementosArray = Array.from(elementos);

// Filtra os elementos com base na classe "nome-enfermeiro"
let filtrados = elementosArray.filter(function(elemento) {
  return elemento.textContent.toLowerCase().includes('enfermeiro');
});

// Exibe os elementos filtrados
filtrados.forEach(function(elemento) {
  console.log(elemento.textContent);
});
