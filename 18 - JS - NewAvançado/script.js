
let btn = document.getElementById('activeFundoCor');
btn.addEventListener('click', mudaBgCor);

let bodyT = document.getElementById('corpo');  
function mudaBgCor(){
  if(bodyT.className == 'bodyBlack'){
    bodyT.classList.remove('bodyBlack');
    bodyT.classList.add('bodyWhite');
  } else{
    bodyT.classList.remove('bodyWhite');
    bodyT.classList.add('bodyBlack');
  }



   
 



  // if(bodyT.className == 'null'){
  //   bodyT.classList.remove('bodyWhite');
  //   bodyT.classList.add('bodyBlack');
  //   if(bodyT.className == 'bodyBlack'){
  //       bodyT.classList.remove('bodyBlack');
  //       bodyT.classList.add('bodyWhite');
  //   }
  
  console.log(bodyT.className)
}