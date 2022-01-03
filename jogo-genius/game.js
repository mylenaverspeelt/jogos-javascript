var coresBotoes = ['vermelho', 'azul', 'amarelo', "verde"];
var padraoDoJogo = [];
var padraoDoUsuario = [];

var inicio = false;
var nivel = 0;

$(document).keypress(function () {
    if (!inicio) {
        $("#level-title").text("Nível " + nivel);
        proximaSequencia();
        inicio = true;
    }
});

$('.btn').click(function () {
    var corEscolhidaPeloUsuario = $(this).attr("id");
    padraoDoUsuario.push(corEscolhidaPeloUsuario);
    tocarSom(corEscolhidaPeloUsuario);
    animacao(corEscolhidaPeloUsuario);
    checarResposta(padraoDoUsuario.length - 1);
});

function checarResposta(nivelAtual) {
    if (padraoDoJogo[nivelAtual] === padraoDoUsuario[nivelAtual]) {
        console.log("Correto!");

        if (padraoDoUsuario.length === padraoDoJogo.length) {

            setTimeout(function () {
                proximaSequencia();
            }, 1000);

        }

    } else {
        console.log("Errou!");

        tocarSom("wrong");

        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Fim do jogo. Pressione qualquer tecla para recomeçar.");
  
recomecar();  
    }

};


function proximaSequencia() {

    padraoDoUsuario = [];

    nivel++;

    $("#level-title").text("Nível " + nivel);

    var numeroAleatorio = Math.floor(Math.random() * 4);

    var corAleatoria = coresBotoes[numeroAleatorio];

    padraoDoJogo.push(corAleatoria);

    $('#' + corAleatoria).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    tocarSom(corAleatoria);

}

function tocarSom(nome) {
    var audio = new Audio("sounds/" + nome + ".mp3");
    audio.play();
}

function animacao(cor) {
    $("#" + cor).addClass("pressed");

    setTimeout(function () {
        $("#" + cor).removeClass("pressed");
    }, 100);
}

function recomecar(){
    nivel = 0;
    padraoDoJogo = [];
    inicio = false;
};

