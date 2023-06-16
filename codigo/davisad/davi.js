const buttonElement = document.querySelector('#enviar');

buttonElement.addEventListener('click', function() {
  const nomeInput = document.querySelector('#NomeArea');
  const capacidadeInput = document.querySelector('#Cap');

  const nome = nomeInput.value;
  const capacidade = capacidadeInput.value;

  const pacienteData = {
    NomeÁrea: nome,
    CapacidadePacientes: capacidade,
    
  };

  const data = localStorage.getItem('dadosÁrea');
  let dadosÁrea = [];

  if (data) {
    dadosÁrea = JSON.parse(data);
  }

  dadosÁrea.push(pacienteData);

  localStorage.setItem('dadosÁrea', JSON.stringify(dadosÁrea));

  alert("Dados salvos com sucesso");

  nomeInput.value = '';
  capacidadeInput.value = '';
});