function entrar() {
  let usuario = document.querySelector('#usuario');
  let userLabel = document.querySelector('#userLabel');

  let senha = document.querySelector('#senha');
  let senhaLabel = document.querySelector('#senhaLabel');

  let msgError = document.querySelector('#msgError');

  let email = document.querySelector('#email');
  let emailLabel = document.querySelector('#emailLabel');

  // Fazendo a Verificação se os Campos Estarão Preenchidos
  if (usuario.value === '' || senha.value === '') {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Preencha todos os campos!';
    return;
  }

  // Recupera a lista dos usuários do localStorage para afetuar o login
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

  let userValid = null;

  // Percorre e verifica se a lista dos usuários são válidos e existentes 
  listaUser.forEach((item) => {
    if (usuario.value === item.userCad && senha.value === item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad,
        email: item.emailCad,
      };
    }
  });

  if (userValid) {

    // Usuário válido e existente encontrado é  redirecionado para a página inicial SupersEsportivos
    window.location.href = '../../index.html';

    let mathRandom = Math.random().toString(16).substring(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem('token', token); // Armazena o Token Gerado no localStorage
    localStorage.setItem('userLogado', JSON.stringify(userValid));
  } else {

    // Estilos Usuário ou senha incorretos
    userLabel.setAttribute('style', 'color: red');
    usuario.setAttribute('style', 'border-color: red');
    senhaLabel.setAttribute('style', 'color: red');
    senha.setAttribute('style', 'border-color: red');
    emailLabel.setAttribute('style', 'color: red');
    email.setAttribute("style", "border-color: red");
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Usuário ou senha incorretos';
    usuario.focus();
  }
};