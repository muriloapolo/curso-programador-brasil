// setTimeout
/*
setTimeou()
Recebe argumento e tempo

setTimeou(função, tempo)
setTimeout = é um contador que executa apenas uma vez depois de um intervalo de tempo.

setInterval()
recebe 2 parâmetros mas executa sempre um mesmo loop de vezes no intervalo determinado.
-- Todo o tempo deve ser adicionado em milissegundos
*/

// let timer = setInterval(adiciona, 3000);
// let conhec = ["JAVASCRIPT", "HTML5", "CSS3"];
// let h = document.getElementsByTagName("h1")[0];

// function adiciona() {
//   for (i in conhec) {
//     h.innerText += conhec[i];
//   }
// }
// const cabeca = document.querySelector("h2");

const words = ["Html", "Css", "JavaScript"];

function type() {
  let disp = document.getElementById("texto");
  const textoArray = words;
  console.log(textoArray);

  textoArray.forEach((palavra, i) => {
    setTimeout(function () {
      disp.innerText = palavra;
    }, 1000 * i);
  });
}
type();
let temporizador = setInterval(type, 2900);

// document.addEventListener("weeldown", clearInterval(temporizador));
