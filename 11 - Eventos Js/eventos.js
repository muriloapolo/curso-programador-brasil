// let ol = document.getElementById("body");
// ol.addEventListener("click", muda);
// let dv = document.querySelectorAll("div")[0];
// let h;
// let hh;
// function muda() {
//   ol.style.height = "100vh";
//   ol.style.backgroundColor = "red";
//   /* A função toogle já faz esse efeito que nem funciona aqui */
//   //   dv.addEventListener("click", function () {
//   //     // hh[0].style.display = "block";
//   //     hh[0].className.toggle = "show";
//   //   });
// }

// //Esta função esconde o h1
// function hideH1() {
//   h = document.getElementsByTagName("div");
//   h[0].addEventListener("click", function () {
//     hh = document.getElementsByTagName("h1");
//     // hh[0].style.display = "none";
//     hh[0].classList.toggle("hide");
//     console.log(hh[0].innerText);
//   });
// }
// hideH1();

//###########################################
/*  Funções para ativar outras coisas com this */

// function ativaBg(i) {
//   //O i aqui será o Elemento a qual se refere está div
//   i.style.backgroundColor = "Red";
//   console.log("Teste");
// }
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

p1.onclick = maiusc;
p2.ondblclick = maiusc;

function maiusc() {
  this.innerText = this.innerText.toUpperCase();
}
p1.ondblclick = remover;
p2.onclick = remover;

function remover() {
  this.innerText = this.innerText.toLowerCase();
}
console.log(p1.innerText.length);
