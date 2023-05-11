
/* Definiçaõ das váriavéis da tela Financias*/

var Funcionarios_enfermeiros = [

  { nome: 'João Santana', salario: 5000, gastos_extras: 400,},
  { nome: 'Rodrigo Rodrigues', salario: 4200, gastos_extras: 100,},
  { nome: 'Lucaldo Santos', salario: 2700, gastos_extras: 300,},
  { nome: 'Elaine Maria', salario: 2500, gastos_extras: 600,},
  { nome: 'Joelma Castro', salario: 300, gastos_extras: 200,},
  
]

var Funcionarios_tecnicos_de_enfermagem = [
  
  { nome: 'Julio Cabral', salario: 1850, gastos_extras: 400,},
  { nome: 'Ana Moreira', salario: 200, gastos_extras: 200,},
  { nome: 'Cecilia Guimarães', salario: 3000, gastos_extras: 100,},
  { nome: 'Túlio Arnaldo', salario: 3200, gastos_extras: 500,},
  { nome: 'Gabriel Freitas', salario: 1900, gastos_extras: 300,},

]

var salario_enfermeiro = 0;
var salario_tecnico = 0;
var gastos_mais_enfermeiro = 0;
var gastos_mais_tecnico = 0;

for(let i = 0; i < Funcionarios_enfermeiros.length; i++){
  salario_enfermeiro += Funcionarios_enfermeiros[i].salario;
}

for(let i = 0; i < Funcionarios_tecnicos_de_enfermagem.length; i++){
  salario_tecnico += Funcionarios_tecnicos_de_enfermagem[i].salario;
}

for(let i = 0; i < Funcionarios_tecnicos_de_enfermagem.length; i++){
  gastos_mais_enfermeiro += Funcionarios_tecnicos_de_enfermagem[i].gastos_extras;
}

for(let i = 0; i < Funcionarios_tecnicos_de_enfermagem.length; i++){
  gastos_mais_tecnico += Funcionarios_tecnicos_de_enfermagem[i].gastos_extras;
}


var media_enfermeiros = salario_enfermeiro / Funcionarios_enfermeiros.length;
var media_tecnicos = salario_tecnico / Funcionarios_tecnicos_de_enfermagem.length;
var gastos_dos_enfermeiros = salario_enfermeiro + gastos_mais_enfermeiro;
var gastos_dos_tecnicos = salario_tecnico + gastos_mais_tecnico;
var gasto_total = (media_enfermeiros * Funcionarios_enfermeiros.length) + (media_tecnicos*Funcionarios_tecnicos_de_enfermagem.length) + gastos_dos_enfermeiros + gastos_dos_tecnicos;

var Financias = {

  salario_enfermeiro_total: `${salario_enfermeiro}`,
  salario_tecnico_total: `${salario_tecnico}`,
  media_enfermeiros_total: `${media_enfermeiros}`,
  media_tecnicos_total: `${media_tecnicos}`,
  gastos_dos_enfermeiros_total: `${gastos_dos_enfermeiros}`,
  gastos_dos_tecnicos_total: `${gastos_dos_tecnicos}`,
  gastos_totais: `${gasto_total}`,

}

/* Definiçaõ das váriavéis da tela Contratação*/

var contratacao = {

  enfermeiros_a_contratar: 20,
  tecnicos_a_contratar: 10,

}

var gastos_da_contratacao = (contratacao.enfermeiros_a_contratar * media_enfermeiros) + (contratacao.tecnicos_a_contratar * media_tecnicos);

/* Função para colocar na tela do Financeiro os valores corretos */ 

function Financeiro (){

  let tela1 = document.querySelector('span.nenfermeiros');
  let tela2 = document.querySelector('span.ngastosenfermeiros');
  let tela3 = document.querySelector('span.ntecnico');
  let tela4 = document.querySelector('span.ngastostecnico');
  let tela5 = document.querySelector('span.mediaenfermeiros');
  let tela6 = document.querySelector('span.mediatecnicos');
  let tela7 = document.querySelector('span.gastostotais');


  tela1.innerHTML = `R$${salario_enfermeiro},00`;
  tela2.innerHTML = `R$${Financias.gastos_dos_enfermeiros_total},00`;
  tela3.innerHTML = `R$${salario_tecnico},00`;
  tela4.innerHTML = `R$${Financias.gastos_dos_tecnicos_total},00`;
  tela5.innerHTML = `R$${Financias.media_enfermeiros_total},00`;
  tela6.innerHTML = `R$${Financias.media_tecnicos_total},00`;
  tela7.innerHTML = `R$${Financias.gastos_totais},00`;

}

/* Função para colocar na tela da Contratação os valores corretos */

function Contratacao (){

  let tela8 = document.querySelector('span.ncontratar-enfermeiro');
  let tela9 = document.querySelector('span.ncontratar-tecnico');
  let tela10 = document.querySelector('span.gastotal');

  tela8.innerHTML = `${contratacao.enfermeiros_a_contratar}`;
  tela9.innerHTML = `${contratacao.tecnicos_a_contratar}`;
  tela10.innerHTML = `R$${gastos_da_contratacao},00`;
}

