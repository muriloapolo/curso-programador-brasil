console.log('------Objetos Metodos-------')
//Outro método de criar Objetos
/*let obj = new Object({
    nome: 'Teste',
    nota: 10,
    escola: 'Da vida',
    hobbies: ['Nadar', 'Correr', 'Pescar']
});
console.log(obj);
console.log(obj.nome);*/


/*Quando o objeto tem uma variável é chamado de propriedade, quando tem uma função a gente chama de métodos.
 */
/*let escola = {
    nome: ['Murilo', 'Joao'],
    nota1: [7.5, 8.6],
    nota2: [8.4, 7.6],
    media: function (n1, n2) {
        return (n1 + n2) / 2;
    }
};
for (var x = 0; x < escola.nome.length; x++) {

    console.log(escola.nome[x], escola.nota1[x], escola.nota2[x], `MÉDIA DO ALUNO ${escola.media(escola.nota1[x], escola.nota2[x])}`);


};

*/
/* -----------------------------------------

//Função como referência

// function media(n1, n2) {
//     return (n1 + n2) / 2;
// }


let aluno = {
    nome: 'Murilo',
    nota: [8.5, 9.2],
    media: function () {
        return (this.nota[0] + this.nota[1]) / 2;
    }
};
console.log(aluno.media());
 
// let aluno1 = {
//     nome: 'Antonio',
//     nota: [9.4, 7.2],
//     media: media(this.nota[0], this.nota[1])
// };
// console.log(aluno.media, aluno1.media);
*/

// this. sendo usado em função/objeto com a referência sobre o nome da função.
/*

let alunoA = {
    nome: 'Alfredo',
    notas: [6, 7],
    media: calcMedia
};
let alunoB = {
    nome: 'Marcelo',
    notas: [9, 5],
    media: calcMedia
};

function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}
console.log(`${alunoA.nome} ${alunoA.media()}`);
console.log(`${alunoB.nome} ${alunoB.media()}`);  

*/

let teste = {
    notas: [9, 5]
};
const {
    notas
} = teste;
console.log(notas);