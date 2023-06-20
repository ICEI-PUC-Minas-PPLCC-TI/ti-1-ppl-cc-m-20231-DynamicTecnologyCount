var pacientes = [
  { id: 1, nome: 'Paciente 1', escala: 'alta', ala: 'Ala A' },
  { id: 2, nome: 'Paciente 2', escala: 'baixa', ala: 'Ala B' },
  { id: 3, nome: 'Paciente 3', escala: 'alta', ala: 'Ala A' },
  { id: 4, nome: 'Paciente 4', escala: 'media', ala: 'Ala C' },
  { id: 5, nome: 'Paciente 5', escala: 'baixa', ala: 'Ala B' },
];

var tabelaPacientes = document.querySelector('.tabela-pacientes');

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var linha = document.createElement('div');
  linha.classList.add('linha');

  var id = document.createElement('div');
  id.classList.add('id-paciente');
  id.textContent = paciente.id;

  var nome = document.createElement('div');
  nome.classList.add('nome-paciente');
  nome.textContent = paciente.nome;

  var escala = document.createElement('div');
  escala.classList.add('escala-fugulin');
  escala.textContent = paciente.escala;

  var ala = document.createElement('div');
  ala.classList.add('ala-hospital');
  ala.textContent = paciente.ala;

  linha.appendChild(id);
  linha.appendChild(nome);
  linha.appendChild(escala);
  linha.appendChild(ala);

  tabelaPacientes.appendChild(linha);
}

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
