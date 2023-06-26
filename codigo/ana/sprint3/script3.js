function getInformacoes() {
  return JSON.parse(localStorage.getItem('informacoes')) || [];
}

// Função para exibir as informações na tabela
function exibirInformacoes() {
  var informacoes = getInformacoes();
  var tabela = document.getElementById('tabelaCRUD');

  // Limpar tabela
  tabela.getElementsByTagName('tbody')[0].innerHTML = '';

  for (var i = 0; i < informacoes.length; i++) {
    var informacao = informacoes[i];

    var linha = document.createElement('tr');
    var colunaNome = document.createElement('td');
    var colunaHoras = document.createElement('td');
    var colunaSalario = document.createElement('td');
    var colunaTotal = document.createElement('td');

    colunaNome.textContent = informacao.nome;
    colunaHoras.textContent = informacao.horas;
    colunaSalario.textContent = informacao.salario;
    colunaTotal.textContent = informacao.total;
    colunaCargo.textContent = informacao.cargo;



    linha.appendChild(colunaNome);
    linha.appendChild(colunaHoras);
    linha.appendChild(colunaSalario);
    linha.appendChild(colunaTotal);


    tabela.getElementsByTagName('tbody')[0].appendChild(linha);

  }
}

exibirInformacoes();

function buscar() {
  var termoBusca = document.getElementById('termo-busca').value.toLowerCase();

  var linhasPacientes = document.querySelectorAll('.tabela-pacientes .linha');
  for (var i = 0; i < linhasPacientes.length; i++) {
    var linha = linhasPacientes[i];
    var id = linha.querySelector('.id-paciente').textContent.toLowerCase();
    var nome = linha.querySelector('.nome-paciente').textContent.toLowerCase();
    var escala = linha
      .querySelector('.escala-fugulin')
      .textContent.toLowerCase();
    var ala = linha.querySelector('.ala-hospital').textContent.toLowerCase();

    if (
      id.includes(termoBusca) ||
      nome.includes(termoBusca) ||
      escala.includes(termoBusca) ||
      ala.includes(termoBusca)
    ) {
      linha.style.display = 'flex';
    } else {
      linha.style.display = 'none';
    }
  }
}
