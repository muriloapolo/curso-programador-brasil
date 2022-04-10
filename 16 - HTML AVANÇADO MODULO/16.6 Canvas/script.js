let tela1 = document.getElementById('tela1');
//Desenhando linhas no canvas Tela1

let ctx = tela1.getContext("2d");
//Para desenhar elementos na tela, precisamos capturar o context'


//Para desenhar no canvas
//É importante que o canvas receba a altura e largura dentro da tag
//Move o pincel
// ctx.moveTo(0,0);
//Desenha a linha até a posição desejada

// ctx.lineTo(500, 0);

//Espessura da Linha
// ctx.lineWidth = 1
//Cor da Linha

// ctx.stroke();

//
//Desenha um retângulo/quadrado
// function ret1(){
//     ctx.fillStyle = 'blue'
//     ctx.fillRect(120,120, 190,190)
//     ctx.clearRect( 125, 125, 180,180 )
// }
// ret1()
// function ret2(){
//     ctx.strokeStyle = 'red'
//     ctx.strokeRect(200,50, 190,190)   
// }
// ret2()
/*
//desenha quadro1
let rec = [120, 120, 190, 190];
//Limpa Quadro 1
let crec = [125, 125, 180, 180];
// Desenha quado 2 em branco
let strec = [200, 50, 190, 190];

//linha 1 + move 1

let movPinL1 = [200,50]
let moveLi1 = [121, 120]
//linha 1 + move 2
let movPinL2 = [390, 50]
let moveLi2 = [309.59, 120]
//linha 1 + move 3
let movPinL3 = [390, 240]
let moveLi3 = [309, 308.80]
//linha 1 + move 4
let movPinL4 = [200, 240 ]
let moveLi4 = [123.9, 305]
//Função que senha um Cubo na tela
function lines(){
    ctx.fillStyle = 'blue'
    ctx.fillRect(rec[0], rec[1], rec[2], rec[3])
    ctx.clearRect( crec[0], crec[1], crec[2], crec[3] )
    ctx.strokeStyle = 'blue'
    ctx.strokeRect(strec[0],strec[1], strec[2], strec[3])   

    setTimeout(() =>{
        //linha 1
        ctx.beginPath()    
        ctx.moveTo(movPinL1[0], movPinL1[1]);
        ctx.lineTo(moveLi1[0], moveLi1[1]);     
        ctx.lineWidth = 2;  
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }, 1100)
    setTimeout(() =>{
          //linha 2
        ctx.beginPath()
        ctx.moveTo(movPinL2[0], movPinL2[1]);
        ctx.lineTo(moveLi2[0], moveLi2[1]);  
        ctx.lineWidth = 2;  
        ctx.strokeStyle = 'black';      
        ctx.stroke();
    }, 1200)
    setTimeout(() =>{
        //Linha 3
        ctx.beginPath()
        ctx.moveTo(movPinL3[0], movPinL3[1]);
        ctx.lineTo(moveLi3[0], moveLi3[1]);    
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black'
        ctx.stroke();
    }, 1300)
    //Linha 4
    setTimeout(() =>{   
        ctx.beginPath();
        ctx.moveTo(movPinL4[0], movPinL4[1]);
        ctx.lineTo(moveLi4[0], moveLi4[1]);        
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black'
        ctx.stroke();
    }, 1400);


    //Linha 1
    // ctx.beginPath()    
    // ctx.moveTo(200,50);
    // ctx.lineTo(121, 120);     
    // ctx.lineWidth = 2;  
    // ctx.strokeStyle = 'black'     
    // ctx.stroke();

    //linha 2
    // ctx.beginPath()
    // ctx.moveTo(390, 50);
    // ctx.lineTo(309.59, 120);  
    // ctx.strokeStyle = 'black'
    // ctx.lineWidth = 2;  
    // ctx.stroke();

    //Linha 3
    // ctx.beginPath()
    // ctx.moveTo(390, 240);
    // ctx.lineTo(309, 308.80);    
    // ctx.strokeStyle = 'black'
    // ctx.stroke();

    //Linha 4
    // ctx.beginPath()
    // ctx.moveTo(200, 240);
    // ctx.lineTo(123.9, 304.90);  
    // ctx.strokeStyle = 'black'
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = 'black'
    // ctx.stroke();
}
lines()
*/

/*
.moveTo(x,y);




*/

/*
//Simbolos inciais

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineWidth = 7;

ctx.lineTo(300,300);
ctx.lineTo(200,300);
ctx.closePath();
ctx.fillStyle =  'gray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineWidth = 7;
ctx.fillStyle = 'red';
ctx.lineTo(300, 50);
ctx.lineTo(210, 50)
ctx.closePath()
ctx.fill()

ctx.stroke()

*/


// ##############--Desenhando um circulo inicial
//Variáveis para o preencimento do circulo


//retangulo

// ctx.beginPath();

// ctx.rect(50,120,400,250);
// ctx.fillStyle = 'green';
// ctx.strokeStyle = 'black';
// ctx.fill();
// ctx.stroke();




// //Losango

// ctx.beginPath()
// ctx.moveTo(100,250);
// ctx.lineTo(240,130);
// ctx.lineTo(400,250);
// ctx.lineTo(250,360);
// ctx.closePath()
// ctx.strokeStyle = 'yellow';
// ctx.fillStyle = 'yellow';
// ctx.fill()
// ctx.stroke()







// ctx.beginPath();
// let x = 250;
// let y = 250;
// let raio = 80;

// let inicio = 0;
// let fim = 2 * Math.PI;

// ctx.arc(x,y,raio,inicio,fim);
// ctx.strokeStyle = 'red';
// ctx.fillStyle = 'blue';
// ctx.fill();
// ctx.stroke();

// ctx.beginPath()
// ctx.moveTo(178,220);
// ctx.lineTo(323,220);
// ctx.lineTo(330,250);
// ctx.lineTo(172,250);
// ctx.closePath()
// ctx.strokeStyle = 'white';
// ctx.fillStyle = 'white';
// ctx.fill();
// ctx.stroke();



// Animar um circulo e criálo do zero
 let circle = {
 x: 250, //Posição central X no plano canvas
 y: 250, //Posição central Y no plano Canvas
 ray: 200, //A grosso modo é o tamanho do circulo(raio)
 start: 0,//Em qual ponto se inicia o circulo
 end: 0, //Qual tamanho do arco? Defina 2*Pi para circulo fechado
 hah: true //True ou false permitem a animação acontecer no sentido false = horário ou true=anti-horario
}
// ctx.beginPath();//Inicia o caminho
// ctx.strokeStyle = 'red'; //Define a borda
// ctx.fillStyle = 'green'; //Define o preenchimento
// ctx.arc(x,y,ray,start, end); //Formula que desenha o círculo
// ctx.fill(); //Preenche o circulo
// ctx.stroke(); //Desenha o circulo 

//Função que anima o circulo

let x1= 0
let y1= 0
function animateCircle(c){
    //Desenhar retângulo
    ctx.beginPath();
    ctx.clearRect( 0, 0, 500,500 );
    
    //Desenhar o Círculo
    ctx.beginPath();//Inicia o caminho
    ctx.strokeStyle = 'red'; //Define a borda
    ctx.fillStyle = 'green'; //Define o preenchimento
    ctx.arc(c.x,c.y,c.ray,c.start, c.end, c.hah); //Formula que desenha o círculo
    ctx.fill(); //Preenche o circulo
    ctx.stroke(); //Desenha o circulo 


}




let sti = setInterval(() =>{
    if(circle.end < 2 * Math.PI){
        circle.end += 0.2;
        circle.x +=1; 
        circle.y -=1; 
       
    
      
    } else if(circle.end > 6){
        clearInterval(sti)
    } 
    animateCircle(circle);
    console.log(circle.x, circle.y, circle.start, circle.end)
    

},50)

