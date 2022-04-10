//Elementos Pai - filhos parents

//Função para capturar elementos após o carregamento da página.
//Variáveis globais apenas para funcionar a função de mudar cor do título
// let d1 = undefined;
// let h1 = undefined;

window.onload = function () {
//   console.log("Ativado");
//   //Captura o Elemento com o ID d1 -- div
//   d1 = document.getElementById("d1");
//   /*Passa para a variável o elemento capturado
//   Estamos passando a div1 os elemetos filhos #CHILDRENS
//   */
//  console.log(d1.children)
//   h1 = d1.children;
//   //Exibimos os conteúdos como um HTMLCollection
//   console.log(h1);
//   //Selecionamos um dos elementos filhos e chamamos os pais dele
//   console.log(h1[0].parentElement);
//   //Exibimos a Div capturada inicialmente
//   console.log(d1);

// console.log(document.body.children[0])
let h1 = document.getElementsByTagName('h1');
// console.log(h1)

for (let h of h1){
  console.log(h);
  h.addEventListener('click' , qualOpai);
  // h.addEventListener('dblclick' , qualOpai);
  // h.addEventListener('mouseover' , qualOpai);
  // if(e.type === 'mouseover'){
  //   h1[h].style.color = 'gray'
  // }
  // if(e.type === 'click'){
  //   h1[h].style.color = 'red'
  // }
  // if(e.type === 'dblclick'){
  //   h1[h].style.color = 'yellow'
  // }
 
}

function qualOpai(e){
  let t = e.target
  console.log(e.type + ' ' + e.target.innerHTML) 
    console.log(t.parentElement)
 
}










//Fim da função do ONLOAD
};

















/* A função que muda a cor do título pq eu sei lá que fiz isso */

// window.onclick = function () {

//   // let timerMuda = setInterval(agora, 2000);
//   let timerMuda = setInterval(vai, 1000);

//   function vai() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     // if (r || g || b < 255) {
//     //   r += 100;
//     // }
//     h1[0].style.color = `rgb(${r},${g},${b})`;
//     console.log(r, g, b);
//     console.log(h1[0]);
//     clearInterval(timerMuda);
    
//   }
// };
