let j = document.getElementsByClassName('quadrado');

let x = 0;
let y = 0;
function move(px, py){
    let posX = px + 'px'
    let posY = py + 'px'
        j[0].style.top = posX;       
        j[0].style.left = posY;
        if(posX == '500px'){
            clearInterval(iv)
        }
      
console.log(posX, posY)

}

let iv = setInterval(()=> move(x++, y++), 19)
