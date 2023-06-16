var enfermeiros = [
    { nome: 'Enfermeiro 1', horas: 40, salario: 1500, gasto: 3000, id: 1 },
    { nome: 'Enfermeiro 2', horas: 30, salario: 1500, gasto: 2500, id: 2 },
    { nome: 'Enfermeiro 3', horas: 35, salario: 1500, gasto: 3000, id: 3 },
    { nome: 'Enfermeiro 4', horas: 45, salario: 1500, gasto: 3500, id: 4 },
    { nome: 'Enfermeiro 5', horas: 50, salario: 1500, gasto: 4000, id: 5 }
  ];

  var tabelaEnfermeiros = document.querySelector('.tabela-enfermeiros');

  for (var i = 0; i < enfermeiros.length; i++) {
    var enfermeiro = enfermeiros[i];

    var linha = document.createElement('div');
    linha.classList.add('linha');

    var nome = document.createElement('div');
    nome.classList.add('nome-enfermeiro');
    nome.textContent = enfermeiro.nome;

    var horas = document.createElement('div');
    horas.classList.add('horas-trabalhadas');
    horas.textContent = enfermeiro.horas;

    var salario = document.createElement('div');
    salario.classList.add('salario');
    salario.textContent = enfermeiro.salario;

    var gasto = document.createElement('div');
    gasto.classList.add('gasto-para-hospital');
    gasto.textContent = enfermeiro.gasto;

    var id = document.createElement('div');
    id.classList.add('id-enfermeiros');
    id.textContent = enfermeiro.id;

    linha.appendChild(nome);
    linha.appendChild(horas);
    linha.appendChild(salario);
    linha.appendChild(gasto);
    linha.appendChild(id);

    tabelaEnfermeiros.appendChild(linha);
  }

  var tecnicosEnfermagem = [
    { nome: 'Tecnico de Enfermagem 1', horas: 40, salario: 1500, gasto: 2000, id: 1 },
    { nome: 'Tecnico de Enfermagem 2', horas: 40, salario: 1500, gasto: 2000, id: 2 },
    { nome: 'Tecnico de Enfermagem 3', horas: 60, salario: 2000, gasto: 3000, id: 3 },
    { nome: 'Tecnico de Enfermagem 4', horas: 60, salario: 2000, gasto: 3000, id: 4 },
    { nome: 'Tecnico de Enfermagem 5', horas: 60, salario: 1800, gasto: 2500, id: 5 }
  ];

  var tabelaTecnicosEnfermagem = document.querySelector('.tabela-tecnicos-enfermagem');

  for (var i = 0; i < tecnicosEnfermagem.length; i++) {
    var tecnico = tecnicosEnfermagem[i];

    var linha = document.createElement('div');
    linha.classList.add('linha');

    var nome = document.createElement('div');
    nome.classList.add('nome-enfermeiro');
    nome.textContent = tecnico.nome;

    var horas = document.createElement('div');
    horas.classList.add('horas-trabalhadas');
    horas.textContent = tecnico.horas;

    var salario = document.createElement('div');
    salario.classList.add('salario');
    salario.textContent = tecnico.salario;

    var gasto = document.createElement('div');
    gasto.classList.add('gasto-para-hospital');
    gasto.textContent = tecnico.gasto;

    var id = document.createElement('div');
    id.classList.add('id-enfermeiros');
    id.textContent = tecnico.id;

    linha.appendChild(nome);
    linha.appendChild(horas);
    linha.appendChild(salario);
    linha.appendChild(gasto);
    linha.appendChild(id);

    tabelaTecnicosEnfermagem.appendChild(linha);
  }
  
  function buscar() {
var termoBusca = document.getElementById('termo-busca').value.toLowerCase();

var linhasEnfermeiros = document.querySelectorAll('.tabela-enfermeiros .linha');
for (var i = 0; i < linhasEnfermeiros.length; i++) {
var linha = linhasEnfermeiros[i];
var nome = linha.querySelector('.nome-enfermeiro').textContent.toLowerCase();
var horas = linha.querySelector('.horas-trabalhadas').textContent.toLowerCase();
var salario = linha.querySelector('.salario').textContent.toLowerCase();
var gasto = linha.querySelector('.gasto-para-hospital').textContent.toLowerCase();
var id = linha.querySelector('.id-enfermeiros').textContent.toLowerCase();

if (nome.includes(termoBusca) || horas.includes(termoBusca) || salario.includes(termoBusca) || gasto.includes(termoBusca) || id.includes(termoBusca)) {
linha.style.display = 'flex';
} else {
linha.style.display = 'none';
}
}

var linhasTecnicos = document.querySelectorAll('.tabela-tecnicos-enfermagem .linha');
for (var i = 0; i < linhasTecnicos.length; i++) {
var linha = linhasTecnicos[i];
var nome = linha.querySelector('.nome-enfermeiro').textContent.toLowerCase();
var horas = linha.querySelector('.horas-trabalhadas').textContent.toLowerCase();
var salario = linha.querySelector('.salario').textContent.toLowerCase();
var gasto = linha.querySelector('.gasto-para-hospital').textContent.toLowerCase();
var id = linha.querySelector('.id-enfermeiros').textContent.toLowerCase();

if (nome.includes(termoBusca) || horas.includes(termoBusca) || salario.includes(termoBusca) || gasto.includes(termoBusca) || id.includes(termoBusca)) {
linha.style.display = 'flex';
} else {
linha.style.display = 'none';
}
}
}