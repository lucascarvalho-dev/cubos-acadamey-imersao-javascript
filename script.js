const nomeTimeA = prompt('Digite o nome do time A: ');
const nomeTimeA_HTML = document.getElementById('nomeTimeA');
nomeTimeA_HTML.innerText = nomeTimeA;

const nomeTimeB = prompt('Digite o nome do time B: ');
const nomeTimeB_HTML = document.getElementById('nomeTimeB');
nomeTimeB_HTML.innerText = nomeTimeB;

let placarTimeA = document.getElementById('pontuacaoA');
let placarTimeB = document.getElementById('pontuacaoB');
let pontoA = 0;
let pontoB = 0;
placarTimeA.innerText = pontoA;
placarTimeB.innerText = pontoB;
let setTimeA = document.getElementById('setA');
let setTimeB = document.getElementById('setB');
let setA = 0;
let setB = 0;
setTimeA.innerText = setA;
setTimeB.innerText = setB;
let setPoint = 25;

placarTimeA.addEventListener('click', function(){
    pontoA++;
    pontuar(pontoA);
    placarTimeA.innerText = pontoA;
})

placarTimeB.addEventListener('click', function(){
    pontoB++;
    pontuar(pontoB); 
    placarTimeB.innerText = pontoB;
})

function pontuar(ponto){
    if(ponto>23){
        if((setA <= 2 && setB <= 1) || (setB <= 2 && setA <=1)){
            mudarSetPoint();
        }
    }
    if(setA == 2 && setB == 2){
        if(ponto<14)
            setPoint = 15;
        else
            mudarSetPoint();
    }
    verificarFimDoSet();
    verificarFimDoJogo();
}

function mudarSetPoint(){
    if(pontoA == pontoB){
        setPoint = pontoA+2;
        alert('vai a 2, setPoint: ' + setPoint);
    }
}

function verificarFimDoSet(){
    if(pontoA == setPoint){
        zerarPlacar();
        alert(`${nomeTimeA} ganhou o set`);
        setA++;
        setTimeA.innerText = setA;
    }
    if(pontoB == setPoint){
        zerarPlacar();
        alert(`${nomeTimeB} ganhou o set`);
        setB++;
        setTimeB.innerText = setB;
    }
}

function verificarFimDoJogo(){
    if(setA == 3){
        alert(`${nomeTimeA} ganhou o jogo`);
        zerarJogo();
    }
    if(setB == 3){
        alert(`${nomeTimeB} ganhou o jogo`);
        zerarJogo();
    }
}

function zerarPlacar(){
    pontoA = 0;
    pontoB = 0;
    placarTimeA.innerText = pontoA;
    placarTimeB.innerText = pontoB;
}

function zerarJogo(){
    zerarPlacar();
    setA = 0;
    setB = 0;
    setTimeA.innerText = setA;
    setTimeB.innerText = setB;
    setPoint = 25;
}
