
//ENTRAR
  // Selecionar o botão
  let botao = document.getElementById("enter");

  // Adicionar um evento de clique ao botão
  botao.addEventListener("click", function(event) {

    // Impedir o comportamento padrão do navegador
    event.preventDefault();

    // Selecionar os valores de apelido e e-mail
    let apelido = document.getElementById('apelido').value;
    let email = document.getElementById('email').value;
    // console.log(email)
    // console.log(apelido)

    //Alterar valor inserido por texto no HTML
    let fulano = document.getElementById('nomes').innerHTML;
    document.getElementById('nomes').innerHTML ='Olá, '+apelido+'!';

    //Alterar valor inserido por texto no HTML
    let gmail = document.getElementById('emails').innerHTML;
    document.getElementById('emails').innerHTML = email;

    //Alterar telas de login para tela inicial
    document.querySelector('aside').style='display:none';
    document.querySelector('.financas').style='display:block';

  });

//CADASTRAR
function cadastrar(){
 alert ('CADASTRO REALIZADO COM SUCESSO! FAÇA LOGIN')
}