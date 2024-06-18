var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor')

    if(playerOpt == "pedra"){
        if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O jogo terminou empatado";
        }else if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O inimigo venceu";
        }else{
            vencedor.innerHTML = "Parabens, você ganhou!";
        }
    }else if(playerOpt == "papel"){
        if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Parabens, você ganhou!";
        }else if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O jogo terminou empatado";
        }else{
            vencedor.innerHTML = "O inimigo venceu";
        }
    }else if(playerOpt == "tesoura"){
        if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O inimigo venceu";
        }else if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Parabens, você ganhou!";
        }else{
            vencedor.innerHTML = "O jogo terminou empatado";
        }
    }
}

function reserInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    reserInimigo();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;    
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (t) => {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
    })
}
