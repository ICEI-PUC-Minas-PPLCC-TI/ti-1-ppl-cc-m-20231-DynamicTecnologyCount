const buttonElement = document.querySelector('#enviar');

buttonElement.addEventListener('click', function() {
  const nomeInput = document.querySelector('#PN');
  const areaSelect = document.querySelector('#area');
  const necessidadeSelect = document.querySelector('.fugulin');

  const nome = nomeInput.value;
  const area = areaSelect.options[areaSelect.selectedIndex].text;
  const necessidade = necessidadeSelect.options[necessidadeSelect.selectedIndex].text;

  const pacienteData = {
    Nome: nome,
    ÁreaHospital: area,
    NecessidadeCuidados: necessidade,
  };

  const data = localStorage.getItem('dadosPacientes');
  let dadosPacientes = [];

  if (data) {
    dadosPacientes = JSON.parse(data);
  }

  dadosPacientes.push(pacienteData);

  localStorage.setItem('dadosPacientes', JSON.stringify(dadosPacientes));

  alert("Dados salvos com sucesso");

  nomeInput.value = '';
  areaSelect.value = 'opcao1';
  necessidadeSelect.selectedIndex = 0;
});

