//Capturar o Vídeo na tela
let video = document.getElementById('video');

//Capturar botões
let btn = document.getElementsByClassName('btn');
console.log(btn);

function addControl(){       
   
        //Retroceder 15s
    btn[0].addEventListener('click', ()=>{
        video.currentTime -= 15;
    })
        //Avançar 15
    btn[1].addEventListener('click', ()=>{
        video.currentTime +=15;
        
    });
        //Reduzir velocidade
    btn[2].addEventListener('click', ()=>{
        video.playbackRate -= 0.1;
        console.log(video.playbackRate)
    });
        //Avaçar Velocidade
    btn[3].addEventListener('click', ()=>{
        video.playbackRate += 0.1;
        console.log(video.playbackRate)
    });
        //PLAY vídeo
    btn[4].addEventListener('click', ()=>{
        video.play()
    });
        //Pause
    btn[5].addEventListener('click', ()=>{
        video.pause()
    });

        //Stop Vídeo
    btn[6].addEventListener('click', ()=>{
        video.pause();
        video.currentTime = 0;
        video.playbackRate = 1;
        
    });
}
addControl()