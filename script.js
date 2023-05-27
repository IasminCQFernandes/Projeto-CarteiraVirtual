
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
        
        document.getElementById("valor-oculto").style="display:none;";
        abre=false;

        document.getElementById('eyes').src = 'assets/no-eyes.png';

        
       
    }else{
    
        document.getElementById("valor-oculto").style="display:block;";
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
  limparSelecao() 
  

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


//ADD DESPESA
//ABRIR E FECHAR ABA DE ADD DESPESA
function abaOculta() {
  
  var elementos = document.getElementsByClassName("add-despesas");
  
  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].style.display === "none") {
      elementos[i].style.display = "grid";
    } else {
      elementos[i].style.display = "none";
    }
  }
}





function addDespesas() {

  //PEGAR O VALOR DO INPUT SELECIONADO
  var elementoSelecionado = document.querySelector('.tipo-despesas input[name="tipos"]:checked');
  
  if (elementoSelecionado) {
    var valorSelecionado = elementoSelecionado.value;

    var labelSelecionado = document.querySelector('.tipo-despesas label[for="' + elementoSelecionado.id + '"]').textContent;

    console.log("Valor selecionado:", valorSelecionado);//teste
    console.log("Label selecionado:", labelSelecionado);//teste
  

    //pegar os valores do input
    let titulos = document.getElementById('nome-desp').value;
    let titulo = titulos.toUpperCase();
    console.log(titulo);//teste
    

    let valor = document.getElementById('valor-desp').value;
    console.log(valor);//teste

    let descricao = document.getElementById('desc-desp')
    let descText = descricao.value;
    console.log(descText);//teste

    let tituloAdd = document.getElementById('id-mensal').innerHTML;//teste
    
    //substituir os dados da coluna com base no checkbox selecionado
    if(labelSelecionado === 'MENSAL'){
      document.getElementById('id-mensal').textContent  = titulo;

      document.getElementById('valor-mensal').innerText='R$ '+valor;

      document.getElementById('descricao-mensal').textContent = descText;
    

    }else if(labelSelecionado === 'SEMANAL'){
      document.getElementById('id-semanal').textContent  = titulo;

      document.getElementById('valor-semanal').innerText='R$ '+valor;

      document.getElementById('descricao-semanal').textContent = descText;
     console.log('sacooo');

    }else{
      document.getElementById('id-atipico').textContent  = titulo;

      document.getElementById('valor-atipico').innerText='R$ '+valor;

      document.getElementById('descricao-atipico').textContent = descText;
     console.log('sacooo');
    }

//SUBTRAIR O VALOR DA DESPESA DO VALOR TOTAL ADD NA ENTRADA
    let valTotal = document.getElementById('valor-total').value;
    console.log(valTotal)

    let subtrairDespesas = valTotal - valor;
    console.log(subtrairDespesas)

    document.getElementById('valor-total').value = subtrairDespesas;

    
  }
  
  limpaInputDesp()
  limparSelecao() 

  document.getElementById('ocultar').style = 'display:none;'
}

function editar(){
  document.getElementById('ocultar').style = 'display:grid;'
}

function finalizadoMensal(){
  document.getElementById('id-mensal').style = "text-decoration: line-through; color:#d3d3d3";
  document.getElementById('valor-mensal').style = "text-decoration: line-through; color:#d3d3d3";
  document.getElementById('descricao-mensal').style = "text-decoration: line-through; color:#d3d3d3";
}
function finalizadoSemanal(){
  document.getElementById('id-semanal').style = "text-decoration: line-through; color:#d3d3d3";
  document.getElementById('valor-semanal').style = "text-decoration: line-through; color:#d3d3d3";
  document.getElementById('descricao-semanal').style = "text-decoration: line-through; color:#d3d3d3";
}

function finalizadoAtipico(){
  document.getElementById('id-atipico').style = "text-decoration: line-through; color:#d3d3d3";
  document.getElementById('valor-atipico').style = "text-decoration: line-through; color:#d3d3d3";
  document.getElementById('descricao-atipico').style = "text-decoration: line-through; color:#d3d3d3";atipico
}


function limpaInputDesp(){
  document.getElementById('nome-desp').value = "";
  document.getElementById('valor-desp').value = "";
  document.getElementById('desc-desp').value = "";

}

function limparSelecao() {
  var radios = document.getElementsByName('tipos');
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}











