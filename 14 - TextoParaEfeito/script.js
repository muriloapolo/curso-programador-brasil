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
