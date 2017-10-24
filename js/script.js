// var botao = document.getElementById("btnCadastrar");
// botao.onclick = function(event){
// event.preventDefault;
// alert("mensagem marota");
// }


//seleciona botao pelo id do botao
// $("#btnCadastrar").click(function(event) {
//alert("mensagem marota"); });

//seleciona botao pelo id do seletor (div, form, etc) a que pertence; seleciona todo os botões

var comecou = false; // variavel que indica se o jogo começou e colocar letras na tela
var letrasChutadas = [];
var palavra = ""; //declarada aqui porque vai ser usada mais de uma vez
var erro = 0;

$("#cadastro button").click(function (event) {
    event.preventDefault();

    //variavel palavra com o valor do input
    palavra = $("#palavra").val(); 
    // verificar se o campo esta vazio
    if (palavra === "") {
        // se estiver vaizo mostra uma msg de erro
        alert("Por favor preencha o campo!");
    } else {

        // se não estiver  vazio montar os underlines, pra cada letra, de acordo com o tamanho da palavra
        // faz o laço, cria o span pra cada caractere e coloca o span no html
        for (var i = 0; i < palavra.length; i++) {
            //concatena no span cada caractere da palavra, cria um span pra cada letra
            var span = $("<span>" + palavra[i] + "</span>"); 
            span.appendTo(".letras"); //cria span no html 
        }

        // se não estiver vazio mostra a tela forca
        //adicionar classe na tela da forca
        $("#forca").addClass("visivel");
        //remover a classe na tela do cadastro
        $("#cadastro").removeClass("visivel");
        //bug fix - pra apagar da tela o que se está digitando antes do jogo começar
        comecou = true;
    }
});

$(document).keydown(function (event) {
    if (comecou) {
        // console.log(event);
        //debugger
        var letra = event.key;   //pega valor da letra
        //pegar apenas caractere, length=1, se for outro tipo de tecla é maior que 1
        if (letra.length > 1){  
            return; //se tecla diferente de caractere, return sai do código
        }
        //verifica se a letra já foi utilizada
        //bug fix, pra não se chutar a mesma letra
        if (letrasChutadas.indexOf(letra) != -1){  // diferente de -1-> existe na lista, -1 -> não existe
            return; // se letra chutada existe, para o código
        }

        console.log(letra);
        //registrar a letra utilizada
        letrasChutadas.push(letra); //adiciona elemento no array
        //mostra letra digitada pra teste na tela da forca
        var span = $("<span>"+letra+"</span>");
        span.appendTo(".letras-usadas");
        //letra existe na palavra cadastrada?
        if (palavra.indexOf(letra) != -1){
             //se sim 
                   //mostra no campo a letra correspondente
                    for (var i = 0; i < palavra.length; i++){
                        var letra2 = palavra[i]
                        //se a letra digitada for igual a letra testada

                        if(letra == letra2){
                            //i é o indice que temos que mostra na tela 
                            //pega os elementos tipo span e testa o de indice i (eq(i))
                                $(".letras span").eq(i).addClass("visivel"); 
                           }
                   }
                   //se a palavra estiver completa, todos os spans estarão visiveis
                  if ( $(".letras span:not(.visivel)").length == 0 ){ //retorna o tamanho/numero de elementos com classe visivel
                         //mostra o final correto
                          $("#ganhou").addClass("visivel"); 
                          $("#forca").removeClass("visivel");
                  }  
                   
                  
        }
        else{  //se letra chutada não existe na palavra 
                console.log("entrouna letra chutada errada");
                //debugger;
            if (erro < 5){
                console.log("entrou no corpo");
                //mostra o membro do boneco
                $(".corpo .st0").eq(erro).attr("class","st0 visivel"); //para elemento svg, usa attr no lugar de classe
                erro++;
            }
            else{  //se excedeu as tentativas
                 $("#forca").removeClass("visivel");
                  //mostra a familia triste
                 $("#perdeu").addClass("visivel"); 
            }
        }
    } //if comecou true
});


$(".btn-recomecar").click(function (event) {
    event.preventDefault();
    $(".letras").html(null);
    $(".letras-usadas").html(null);
    $("#palavra").val(null);
    $(".corpo .st0").attr("class","st0");

    comecou = false; // variavel que indica se o jogo começou e colocar letras na tela
    letrasChutadas = [];
    palavra = ""; //declarada aqui porque vai ser usada mais de uma vez
    erro = 0;
   
    $(".tela").removeClass("visivel");
    $("#cadastro").addClass("visivel");
    
});