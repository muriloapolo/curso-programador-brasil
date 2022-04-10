console.log('Tipos de Dados');
//Boolean
//NUll
//Undefined
//Number
//String
/*
console.log('String');
var a = 'String \n alavras qualquer'; //cadeia de caracteres
console.log(a);
console.log('No console números e strings podem ter uma coloração diferente');
console.log((1 + 1) + ' ' + ('1' + '1'));
console.log(' /(invertida)n quebram a linha no console');
console.log('Concatenar com sinal de +');
console.log('Undefined é quando a variável não foi iniciada');
console.log('Null é quando a variável fica REALMENTE vazia');
console.log('Boolean - Pode ser verdadeiro ou falso');
*/
// + = Adição
// - = Subtração
// * = Multiplicação
// / = Divisão
// % = Módulo =====> É o Resto da Divisão em numeros inteiros 17 / 15 = (2)
// ++ = Incremento ++var ou var++
// -- = Decremento --var ou var--

/*
    JS Numeros serão apenas números, não existe inteiro ou qualquer outro tipo
    Incremento e decremento possui uma Ordem
    onde ++var e --var sofre alteração antes de passar o valor e var++ e var-- sofre alteração depois de passar o valor para o dado em questão.


var a = 10;
var b;

b = --a;

console.log(a, b);
*/


/*
=
+=
-=
*=
/=
%=
*/

/*
var a = 30;
a = a %= 4;
console.log(a);
do
    a++
while (a < 50) {

    console.log(a + 'teste');
}
console.log(a);
*/


// == igual a
// === valor igual e igual a mesmo tipo 
// != Diferente ou Não é igual
// !== Não igual ou de mesmo tipo
// > Maior que
// < menor que
// >= maior igual a
// <= menor igual a




/*
var a = 2;
var b = 3;
console.log(a != b);
*/

// && = e
// || = Ou
/*
let a = ! !true;
let b = 9;
let c = a && b;
console.log(typeof c + ' ' + (c));
*/

//Teste de gratuidade.


/*
    let a = prompt('Digite sua Idade: ');
    let menor10 = a <= 10;
    let maior65 = a >= 65;
    let gratuidade = menor10 && maior65;
    a = parseFloat(a);
    console.log(`Sua idade é: ${a}`);
    console.log(`Maior que 65 ${maior65}`);
    console.log(`Menor que 10 ${menor10}`);
    console.log(`Tem direito a gratuidade? ${gratuidade}`)
    if (gratuidade == true) {
        gratuidade = 'PODE ENTRAR AMIGUINHO';
    } else {
        gratuidade = 'FICA DE BOAS AI'
    }
    console.log(`Tem direito a gratuidade? ${gratuidade}`);
    
*/


//Strings
/*
let str = 'Valor Qualquer';
str += ' ';
str += 'textão do twitter';
console.log(str);
*/
//Strigs podem ser somadas para serem concatenadas
/*Strings são escritas com aspas simples ou duplas. Depende da convenção do projeto
 */
/* string numérica utilizando um operador aritimético sofrera a operação antes de um resultado. Caso a string numérica contiveer um número, aí o resultado será um NaN(not a number)
 */

//########Operador condicional

//Operador Ternario

/*
let a = 81;
let b = (a >= 80) ? 'Correndo Pra Caralho mano' : 'Ainda tá de Boa';
console.log(b)
*/


//Operador Vírgula
//Olhar no Caderno

//Operador Delete
/*
var x = 30;
z = 25;
meuobj = new Number();
meuobj.h = 4;

console.log(delete x + ' x declarado var');
console.log(delete meuobj.h + ' obprop');
console.log(delete z + ' z implicito');
console.log(delete Math.PI + ' Prop pre definidas')
*/

//type of
/*
var meuLazer = new Function('5 +2');
var forma = 'redondo';
var tamanho = 1;
var hoje = new Date()

console.log(typeof meuLazer);
console.log(typeof forma);
console.log(typeof tamanho);
console.log(typeof hoje);
console.log(typeof true);
console.log(typeof null);
console.log(typeof 62);
console.log(typeof 'Olá mundo');
*/

//Operador IN
/*
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
console.log(0 in arvores); // retorna verdadeiro
console.log(6 in arvores); // retorna falso
console.log("cedro" in arvores); // retorna falso (você deve especificar o número do índice,
// não o valor naquele índice)
console.log("length" in arvores); // retorna verdadeiro (length é uma propriedade de Array)
console.log(length in arvores); // retorna verdadeiro (length é uma propriedade de Array)

// Objetos predefinidos
console.log("PI" in Math); // retorna verdadeiro
var minhaString = new String("coral");
console.log("length" in minhaString); // retorna verdadeiro

// Objetos personalizados
var meucarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
};
console.log("marca" in meucarro); // retorna verdadeiro
console.log("modelo" in meucarro); // retorna verdadeiro
console.log(1998 in meucarro); //retorna false
*/

//if e else

/*
var idade = 17;
if (idade >= 35 || idade >= 70) {
    console.log('pode');
} else if (idade >= 18) {
    console.log('Pode Mostre a identidade')
} else {
    console.log('Não pode');
}
*/
/*
let nota1 = 0;
let nota2 = 0;
let conceito;
let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log('Você passou com ' + media);

} else {
    console.log('Você não passou');
}


if (media >= 8) {
    conceito = 'Ótimo';
} else if (media >= 6.5) {
    conceito = 'Bom';
} else {
    conceito = 'Regular'
}
console.log('Aqui é a média: ' + media + ' Aqui é a sua avaliação: ' + conceito);

// *********BREAK***********
switch (conceito) {

    case 'Ótimo':
        console.log('TOPZERA MANx');
        break
    case 'Bom':
        console.log('PODE MELHORAR');
        break
    case 'Regular':
        console.log('PQP MANx Vai estudar');
        break;
    default:
        console.log('AH meu Deus');
}
*/

//Loops
//criamos uma variavel que indica  quantas vez vamos repetir uma ação
//dentro do for vamos criar
/*let teste = new Array('Café', 'Acúcar', 'Água', 'Manteiga');
//let numero = 5;
//for
let texto;
for (var vez = 0, numero = 5; vez < numero; vez++) {
    let caixa = document.getElementById('teste');
    console.log(`Teste ${teste[vez]}`)

    texto = teste[vez];
    caixa.innerHTML = texto;

}
console.log('Fim FOR')
let i = 0;
while (i < teste.length) {
    console.log(i + ' teste while ' + teste[i]);
    i++

}

console.log('fim');
let ix = 0;
while (ix < 3) {
    ix++
    console.log(ix);
}
*/


//Testes com In e Of

/*
let teste = new Array('Café', 'Acúcar', 'Água', 'Manteiga');

//Iteracao com IN retorna índice
for (var i in teste) {
    console.log('array teste com "in"  ' + i);
}

//Iteração com OF retorna Valor declarado
for (var x of teste) {
    console.log('array teste com "of"  ' + x);
}
*/

/* #############Funções############### */


//Função com chamada e resposta
/*
function nomeDaFuncao(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    console.log(media);
}
nomeDaFuncao(2, 4)
*/

//Função com, retorno
/*
function media(n1, n2) {
    //var nota1 = n1;
    //var nota2 = n2;
    var teste = (n1 + n2) / 2;
    return teste;

}
var resultado1 = media(6, 5);
var resultado2 = media(9, 4);
console.log(resultado1 + ' e ' + resultado2);
*/
//----------teste de função
/*

function saudacao() {
    return 'ola mundo ';
}
var s = saudacao;

console.log(s())


// --------Função anônima
let media = function (n1, n2) {
    return (n1 + n2) / 2;

}
let m = media(5, 6);
console.log(m);
*/

/*
        #############Juntando tudo até aqui###############
*/

// Nome do aluno
// Nota 1
// Nota 2
// Média
// Aprovado  ou Reprovado

/*
let alunos = ['Machamp', 'Giarados', 'Pikachu'];
let notasA = [7.0, 8.5, 5.3];
let notasB = [6.2, 9.8, 8.5];
let resultado;


function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media) {
    if (media > 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}



for (var index in alunos) {
    var notas1 = notasA[index];
    var notas2 = notasB[index];

    var m = media(notas1, notas2);

    console.log(`${alunos[index]}, ${notas1}, ${notas2}, media => ${media(notas1, notas2)}, ${passou(m)}`);

}
*/

//teste de função com referência

// const CaixaNumeros = [1, 2, 3, 4, 5, 6];

// function teste() {
//     for (var y in CaixaNumeros) {
//         var num = CaixaNumeros[y];
//         console.log('Teste ' + num);
//         console.log(passar(num));

//     }


// }
// teste()

// function passar(x) {
//     var z = Math.random() * x;
//     return z;
// }

// console.log('teste' + Math.random())

// --- Objetos DATA()
console.log('Datas e suas nuances')
let data = Date();
console.log(data)
console.log(data.getFullear());