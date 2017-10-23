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

$("#cadastro button").click(function (event) {
    event.preventDefault();

    //variavel palavra com o valor do input
    palavra = $("#palavra").val(); 
    // verificar se o campo esta vazio
    if (palavra === "") {
        // se estiver vaizo mostra uma msg de erro
        alert("Por favor preencha o campo!");
    } else {

        // se não estiver  vazio montar os underlines
        for (var i = 0; i < palavra.length; i++) {
            var span = $("<span>" + palavra[i] + "</span>"); //concatena no span cada caractere da palavra
            span.appendTo(".letras");
        }

        // se não estiver vazio mostra a tela forca
        //adicionar classe na tela da forca
        $("#forca").addClass("visivel");
        //remover a classe na tela do cadastro
        $("#cadastro").removeClass("visivel");
        comecou = true;
    }
});

$(document).keydown(function (event) {
    if (comecou) {
        // console.log(event);
        //debugger
        var letra = event.key;
        if (letra.length > 1){
            return;
        }
        //verifica se a letra já foi utilizada
        if (letrasChutadas.indexOf(letra) != -1){  //0 se existe na lista, -1 não existe
            return;
        }

        console.log(letra);
        //registrar a letra utilizada
        letrasChutadas.push(letra); //adiciona elemento no array
        //mostra letra digitada pra teste na tela da forca
        var span = $("<span>" + letra + "</span>");
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
                   //se a palavra estiver completa
                   //mostra o final correto
        }
        else{

        }
        
        //se não 
        //mostra o membro do boneco
        //se excedeu as tentativas
        //mostra a familia triste
        
    } //if comecou true

});















