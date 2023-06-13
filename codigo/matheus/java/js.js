const btn = document.querySelector('#salvar');


btn.onclick = () => 
{
   console.log('clicked');

   const nomeInput = document.querySelector('#nome');
   const horasInput = document.querySelector('#horas');
   const salarioInput = document.querySelector('#salario');
   const totalInput = document.querySelector('#total');
   const enfermirosInput = document.querySelector('#tipo');

   const nome = nomeInput.value;
   const horas = horasInput.value;
   const salario = salarioInput.value;
   const total = totalInput.value;
   const tipo = enfermirosInput.options[enfermirosInput.selectedIndex].text;


   const data = localStorage.getItem('enfermeiro');


   
   
   if (data != null) 
   {
      const enfermeiro = JSON.parse(data);
      
      enfermeiro.push({ nome, horas, salario, total, tipo });
      localStorage.setItem('enfermeiro', JSON.stringify(enfermeiro));
      
      alert('Dados do enfermeiro salvo no Local Storage!');

   } 
   else 
   {
      localStorage.setItem('enfermeiro', JSON.stringify([{ nome, horas, salario, total, tipo }]));
      
      alert('Dados do enfermeiro salvo no Local Storage!');
   }
};
