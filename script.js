const numeros = document.querySelector('.numeros');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const iniciar = document.querySelector('#start');
const resetar = document.getElementById('stop');


//Resetar audio do Cronometro
function tirarAudio(){
    document.getElementById('audio').pause();
}

resetar.addEventListener('click', function() {
    tirarAudio();
    resetCronometro();
})

function resetCronometro(){
    numeros.childNodes[1].innerHTML = '';
    resetar.style.display='none';
}

//Adicionandos as opções no select através do Javascript
for (let i = 0; i <= 60; i++) {
    minutos.innerHTML+='<option value="'+i+'">'+i+'</option>'; 
}

for (let i = 0; i <= 60; i++) {
    segundos.innerHTML+='<option value="'+i+'">'+i+'</option>'; 
}
//Cronometro de fato
iniciar.addEventListener('click', function(){
    //Definindo os valores atuais
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;
    //Mostrar na tela esses segundos e minutos
    numeros.childNodes[1].innerHTML = minutoAtual+':'+segundoAtual;

    //Fazendo as operações para que os números diminuam
    intervalo = setInterval(function(){
        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            }else{
                alert('O relógio parou!');
                document.getElementById('audio').play();
                minutoAtual = '0';
                segundoAtual = '0';
                clearInterval(intervalo);
                resetar.style.display = "block";       
            }
        }
        numeros.childNodes[1].innerHTML = minutoAtual+':'+segundoAtual;
    },1000)
})
