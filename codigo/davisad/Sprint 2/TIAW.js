
const areas = JSON.parse(localStorage.getItem('dadosArea'));

function Areas () {

  let str = `<option value="ruim">Áreas</option>`;
  
  for(let i = 0; i < areas.length; i++){

    let areass = areas[i];


    str += `<option value="opcao${i+1}">${areass.area}</option>`;

  }

  document.querySelector('#area').innerHTML = str;
}

const buttonElement = document.querySelector('#enviar');

buttonElement.addEventListener('click', function() {

  let dado = document.querySelector('#area option:checked').value;
  let dado2 = document.querySelector('#fugulin option:checked').value
  let dado3 = document.querySelector('#PN').value;
  
  if(dado !== "ruim" && dado2 !== "errado" && dado3 !== ""){

    const nomeInput = document.querySelector('#PN');
    const areaSelect = document.querySelector('#area');
    const necessidadeSelect = document.querySelector('#fugulin');
  
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

  }
  else{ 
    alert("Nome, área ou nescessidade não selecionada");
  }
});