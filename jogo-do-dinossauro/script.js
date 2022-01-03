// DINOSSAURO

const dino = document.querySelector(".dino");
const bg = document.querySelector(".bg");


let estaPulando = false;
let fimDoJogo = false;
let position = 0;

function teclaEspaco(event) {
    if (event.keyCode === 32) {
        if (!estaPulando) {
            pular();
        }
    }
}

function pular() {
    estaPulando = true;

    var intervaloPulo = setInterval(() => {
        if (position >= 150) {
            clearInterval(intervaloPulo);

            var interlavoDescer = setInterval(() => {
                if (position <= 0) {
                    clearInterval(interlavoDescer);
                    estaPulando = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + "px";
        }
    }, 20);
}



// CACTOS
function criarCactos() {
    const cacto = document.createElement('div');
    let cactoPosicao = 1000;
    let randomTime = Math.random() * 6000;

    if (fimDoJogo) return;

    cacto.classList.add('cacto');
    bg.appendChild(cacto);
    cacto.style.left = cactoPosicao + 'px';

    let esquerdaIntervalo = setInterval(() => {
        if (cactoPosicao < -60) {
            clearInterval(esquerdaIntervalo);
            bg.removeChild(cacto);
        } else if (cactoPosicao > 0 && cactoPosicao < 60 && position < 60) {
            clearInterval(esquerdaIntervalo);
            fimDoJogo = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
            cactoPosicao -= 10;
            cacto.style.left = cactoPosicao + 'px';
        }
    }, 20);

    setTimeout(criarCactos, randomTime);
}

criarCactos();
document.addEventListener('keyup', teclaEspaco);