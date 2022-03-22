var cartas = [
    {
        nome: "Sailor Moon",
        imagem: "https://static.quizur.com/i/b/59ff51741fb672.20826684a%20e%20b.jpg",
        atributos: {
            ataque: 6,
            defesa: 8,
            magia: 10
        }
    },
    {
        nome: "Sailor Marte",
        imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d4e7d5e-b536-4961-a83a-7c0453e03bfd/dcyeomm-059eab35-bf38-4ff3-94a1-1edf9a1968a3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkNGU3ZDVlLWI1MzYtNDk2MS1hODNhLTdjMDQ1M2UwM2JmZFwvZGN5ZW9tbS0wNTllYWIzNS1iZjM4LTRmZjMtOTRhMS0xZWRmOWExOTY4YTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kIY_IeoacA9y11IkILr0r1Wrw6Ufj7oO17xyPDTIGhU",
        atributos: {
            ataque: 10,
            defesa: 7,
            magia: 8
        }
    },
    {
        nome: "Sailor Vênus",
        imagem: "https://pbs.twimg.com/profile_images/1234985083486056448/BbTODlaT_400x400.jpg",
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 9
        }
    },
    {
        nome: "Sailor Plutão",
        imagem: "https://static.quizur.com/i/b/5a9eb1ac142df8.193609155a9eb1ac0158a5.65265240.jpg",
        atributos: {
            ataque: 6,
            defesa: 10,
            magia: 8
        }
    },
    {
        nome: "Sailor Mercúrio",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04RTPo6OxoFfbxgngfV_yAppdAVuA8i5-zw&usqp=CAU",
        atributos: {
            ataque: 8,
            defesa: 7,
            magia: 9
        }
    },
    {
        nome: "Tuxedo Mascarado",
        imagem: "https://static.wikia.nocookie.net/anicrossbr/images/2/21/Tuxedo-Kamen-tuxedo-mask-13437704-576-800.jpg/revision/latest?cb=20160409095857&path-prefix=pt-br",
        atributos: {
            ataque: 8,
            defesa: 8,
            magia: 8
        }
    },
    {
        nome: "Sailor Júpter",
        imagem: "https://i.pinimg.com/originals/43/ab/4c/43ab4c3a9be29a19bd77860473484fa6.jpg",
        atributos: {
            ataque: 8,
            defesa: 8,
            magia: 6
        }
    },
    {
        nome: "Sailor Netuno",
        imagem: "https://i.pinimg.com/564x/10/0e/cd/100ecd54d876d73c878f28038fb46d13.jpg",
        atributos: {
            ataque: 6,
            defesa: 9,
            magia: 7
        }
    },
    {
        nome: "Sailor Urano",
        imagem: "https://1.bp.blogspot.com/-zAA5B6bhkKY/YNo_IP32jCI/AAAAAAAAgfo/JEx5e-jkFCQ5V9UoUSiviDy5FE3U_eqnACLcBGAsYHQ/s574/sailor-moon-biography-sailor-uranus.webp",
        atributos: {
            ataque: 7,
            defesa: 9,
            magia: 9
        }
    },
    {
        nome: "Sailor Saturno",
        imagem: "http://pm1.narvii.com/6335/b09102fb0e34351d7597213604ba683bb9d1fa21_00.jpg",
        atributos: {
            ataque: 9,
            defesa: 10,
            magia: 6
        },
    }
]


var cartaMaquina
var cartaJogador                  //DEFINIDAS NA FUNÇÃO SORTEAR CARTA

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10)

    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 10)

    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 10);
    }
    cartaJogador = cartas[numeroCartaJogador]


    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibirCartaJogador()
}

function obtemValorSelecionado() {
    var radioAtributos = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemValorSelecionado()
    var elementoResultado = document.getElementById('resultado')
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]


    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerText = "Você venceu! O valor da sua carta é: " + valorCartaJogador + ". A do adversário é: " + valorCartaMaquina
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerText = "Você perdeu! O valor da sua carta é: " + valorCartaJogador + ". A do adversário é: " + valorCartaMaquina
    } else {
        elementoResultado.innerText = ("Empate!")
    }
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
}




function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem}) `

    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute; margin-top: 20px;' />"

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br />" + "</input>"
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem}) `

    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute; margin-top: 20px;' />"

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>"
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}

function recarregar() {
    location.reload()
}

function instrucoes() {

}