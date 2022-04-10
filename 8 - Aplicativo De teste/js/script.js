let a; //ataque dano MonstroMon1
let b; //ataque dano MonstroMon2
let dano_parse_mon1;
let dano_parse_mon2;
let mon1;
let mon2;
let c; // dano
let vida1;
let vida2;
let v1;
let v2;
let iniciaLuta;
let vida_baixa_m1;
let vida_baixa_m2;

//Inicar a Luta e desabilitar o botão de Batalha
function iniciarLuta() {
  vida1 = 100;
  vida2 = 100;
  localStorage.setItem("vida_mon1", vida1);
  localStorage.setItem("vida_mon2", vida2);
  v1 = localStorage.getItem("vida_mon1");
  v2 = localStorage.getItem("vida_mon2");
  vida_baixa_m1 = JSON.parse(v1);
  vida_baixa_m2 = JSON.parse(v2);
  console.log(v1, v2, vida_baixa_m1, vida_baixa_m2);
  iniciaLuta = document.getElementById("iniciaLuta");
  iniciaLuta.disabled = true;
}

function geraAtkA() {
  mon1 = document.getElementById("mon1");

  a = Math.round(Math.random() * 20);
  localStorage.setItem("dano_mon1", a);

  console.log(a);
  mon1.disabled = true;
  return a;
}
function geraAtkB() {
  mon2 = document.getElementById("mon2");

  b = Math.round(Math.random() * 20);
  localStorage.setItem("dano_mon2", b);

  console.log(b);

  mon2.disabled = true;
  return b;
}

//-----Cria a luta virtual ----

function lutar() {
  // Gera Dano automático
  //   c = geraAtkA() - geraAtkB();
  dano_parse_mon1 = localStorage.getItem("dano_mon1");
  dano_parse_mon2 = localStorage.getItem("dano_mon2");
  a = JSON.parse(dano_parse_mon1);
  b = JSON.parse(dano_parse_mon2);

  v1 = localStorage.getItem("vida_mon1");
  v2 = localStorage.getItem("vida_mon2");
  vida_baixa_m1 = JSON.parse(v1);
  vida_baixa_m2 = JSON.parse(v2);

  c = a - b;

  console.log("damage");
  console.log(c);
  if (a < b) {
    if (c < 0) {
      c = c * -1;
      vida_baixa_m1 = vida_baixa_m1 - c;
    } else {
      vida_baixa_m1 = vida_baixa_m1 - c;
    }
  } else if (a > b) {
    if (c < 0) {
      vida_baixa_m2 = vida_baixa_m2 + c;
    } else {
      vida_baixa_m2 = vida_baixa_m2 - c;
    }
  }

  localStorage.setItem("vida_mon1", vida_baixa_m1);
  localStorage.setItem("vida_mon2", vida_baixa_m2);
  console.log(vida_baixa_m1);
  console.log(vida_baixa_m2);

  verifica();
}

function verifica() {
  iniciaLuta = document.getElementById("iniciaLuta");

  if (vida_baixa_m1 <= 0) {
    alert("Monstro 1 Perdeu");
  } else if (vida_baixa_m2 <= 0) {
    alert("Monstro 2 Perdeu");
  } else {
    // location.reload();
  }
}
