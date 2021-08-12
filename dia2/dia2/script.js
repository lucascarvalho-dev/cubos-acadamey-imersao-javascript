const nomeTimeA = prompt('Digite o nome do time A');
const nomeTimeB = prompt('Digite o nome do time B');

const nomeA_HTML = document.getElementById('nomeTimeA');
const nomeB_HTML = document.getElementById('nomeTimeB');
const pontoA_HTML = document.getElementById('pontuacaoA');
const pontoB_HTML = document.getElementById('pontuacaoB');

nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;

let pontoA = 0;
let pontoB = 0;
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;

pontoA_HTML.addEventListener('click', function () {
    //o que estiver aqui dentro será executado
    //quando o pontoA_HTML for clicado
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet();
});

pontoB_HTML.addEventListener('click', function () {
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();
});

function verificarFimDoSet() {
    if (pontoA >= 21) {
        alert('Time A venceu o set');
    } 
    if (pontoB >= 21) {
        alert('Time B venceu o set');
    }
}

















//_-----------

// function darOiParaAlguem(nome) {
//     alert(`Oi, ${nome}`);
//     console.log('Mensagem no console');
// }

// darOiParaAlguem('Iago');
// darOiParaAlguem('Andrey');
// darOiParaAlguem('Juliete');





