
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



//ENTRADA DE VALORES

//OCULTAR VALOR TOTAL

var abre = false;

function ocultar(){
   
    if(abre){
        
        document.getElementById("valor-total").style="display:none;";
        abre=false;

        document.getElementById('eyes').src = 'assets/no-eyes.png';

        
       
    }else{
    
        document.getElementById("valor-total").style="display:block;";
        abre = true;

        document.getElementById('eyes').src = 'assets/eyes.png';

       
    }

}

//PEGAR ENTRADA DE VALORES
//let addEntrada = document.getElementById('valor-entrada').value;

function add(){
  let valorTotal = document.getElementById('valor-total').value;
  let totalNum = parseFloat(valorTotal);

  
  let addEntrada = document.getElementById('valor-entrada').value;
  let addNum = parseFloat(addEntrada);


  let soma = totalNum + addNum

  document.getElementById('valor-total').value = soma;

  obterValorSelecionado()

  limpaInput();

  

}

function limpaInput(){
  document.getElementById('valor-entrada').value = "";

}

function obterValorSelecionado() {
  var opcoes = document.getElementsByName("tipos");

  for (var i = 0; i < opcoes.length; i++) {
    if (opcoes[i].checked) {
      var valorSelecionado = opcoes[i].value;
      var labelSelecionado = document.querySelector("label[for='" + opcoes[i].id + "']").textContent;
      console.log("Valor selecionado: " + valorSelecionado);
      console.log("Label selecionado: " + labelSelecionado);
      break; // Encerra o loop quando encontra a opção selecionada
    }
  }
}
