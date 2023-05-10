

/* Definiçaõ das váriavéis da tela Financias*/


var financias = {

    quantidade_de_enfermeiros: 1000,
    quantidade_de_tecnicos: 1000,
    salario_enfermeiro: 2100,
    gastos_dos_enfermeiros: 2000,
    salario_tecnico: 1500,
    gastos_dos_tecnicos: 3000,

}

var media_enfermeiros = financias.gastos_dos_enfermeiros*financias.quantidade_de_enfermeiros / financias.quantidade_de_enfermeiros;
var media_tecnicos = financias.gastos_dos_tecnicos*financias.quantidade_de_tecnicos / financias.quantidade_de_tecnicos;
var gastos_totais = financias.gastos_dos_enfermeiros + financias.gastos_dos_tecnicos;


/* Definiçaõ das váriavéis da tela Contratação*/

var contratacao = {

    enfermeiros_a_contratar: 150,
    tecnicos_a_contratar: 100,

}

var gastos_da_contratacao = (financias.salario_enfermeiro * contratacao.enfermeiros_a_contratar) + ( financias.salario_tecnico * contratacao.tecnicos_a_contratar);



/* Função para colocar na tela do Financeiro os valores corretos */ 

function Financeiro (){

    let tela1 = document.querySelector('span.nenfermeiros');
    let tela2 = document.querySelector('span.ngastosenfermeiros');
    let tela3 = document.querySelector('span.ntecnico');
    let tela4 = document.querySelector('span.ngastostecnico');
    let tela5 = document.querySelector('span.mediaenfermeiros');
    let tela6 = document.querySelector('span.mediatecnicos');
    let tela7 = document.querySelector('span.gastostotais');


    tela1.innerHTML = `R$${financias.salario_enfermeiro},00`;
    tela2.innerHTML = `R$${financias.gastos_dos_enfermeiros},00`;
    tela3.innerHTML = `R$${financias.salario_tecnico},00`;
    tela4.innerHTML = `R$${financias.gastos_dos_tecnicos},00`;
    tela5.innerHTML = `R$${media_enfermeiros},00`;
    tela6.innerHTML = `R$${media_tecnicos},00`;
    tela7.innerHTML = `R$${gastos_totais},00`;

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

/* Função para o gráfico de finacias*/

function Grafico1 (){
    var dados = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
          label: 'Vendas',
          data: [120, 150, 200, 100, 180],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Cor de preenchimento das barras
          borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda das barras
          borderWidth: 1 // Largura da borda das barras
        }]
      };
      
      // Opções do gráfico de barras
      var opcoes = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true // Começar o eixo y a partir de zero
          }
        }
      };
      
      // Criar o gráfico de barras
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: dados,
        options: opcoes
      });
}


/* Função para o gráfico de Gastos*/

function Grafico2 (){
    var dados = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
          label: 'Vendas',
          data: [120, 150, 200, 100, 180],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Cor de preenchimento das barras
          borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda das barras
          borderWidth: 1 // Largura da borda das barras
        }]
      };
      
      // Opções do gráfico de barras
      var opcoes = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true // Começar o eixo y a partir de zero
          }
        }
      };
      
      // Criar o gráfico de barras
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: dados,
        options: opcoes
      });
}