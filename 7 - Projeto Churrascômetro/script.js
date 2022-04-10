let impAdultos = document.getElementById('adultos');
let impCriancas = document.getElementById('criancas');
let impDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');


let btnCalc = document.getElementById('calcular');
btnCalc.addEventListener('click', calcular);

function calcular() {
    let adult = impAdultos.value;
    let crian = impCriancas.value;
    let duracao = impDuracao.value;

    let totalCarne = carnePp(duracao) * adult + (carnePp(duracao) / 2 * crian);
    let cervejaPessoa = cervejaPp(duracao) * adult;
    let bebidasPessoa = bebidasPp(duracao) * adult + (bebidasPp(duracao) / 2 * crian);

    resultado.innerHTML = `<p>${totalCarne /1000}(kg) Carne </p>`;
    resultado.innerHTML += `<p>${Math.ceil(cervejaPessoa /355)}(Latas) Cerveja</p>`;
    resultado.innerHTML += `<p>${bebidasPessoa/2000}Litros/Água-Refrigerante</p>`;
    console.log(totalCarne)
}

//Function para calcular o tempo da festa e retornar um valor para cálculo
function carnePp(duracao) {

    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPp(duracao) {

    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidasPp(duracao) {

    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}