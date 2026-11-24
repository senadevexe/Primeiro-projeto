
const inputSenha = document.getElementById('senha');
const btnToggleSenha = document.getElementById('toggle-senha');

btnToggleSenha.addEventListener('click', () => {
  const isPassword = inputSenha.type === 'password';
  inputSenha.type = isPassword ? 'text' : 'password';
  btnToggleSenha.textContent = isPassword ? 'Ocultar' : 'Mostrar';
});


const inputTelefone = document.getElementById('telefone');

inputTelefone.addEventListener('input', (e) => {
  let valor = e.target.value.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
  valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
  e.target.value = valor;
});
