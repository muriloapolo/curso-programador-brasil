//  let calcMedia = function () {
//      return (this.nota1 + this.nota2) / 2;

//  }

//  let turma = [{
//          nome: 'Murilop',
//          nota1: 9,
//          nota2: 7,
//          media: calcMedia
//      },
//      {
//          nome: 'Joao',
//          nota1: 4,
//          nota2: 3,
//          media: calcMedia
//      }
//  ];


//  var aluno = turma[1];
//  console.log(aluno)
//  console.log(aluno.media())



/*
---------------------------Nova forma de criar o objeto
*/
//Esta função criará sempre o mesmo aluno
// function criarAluno() {
//     return {
//         nome: 'Murilo',
//         nota1: 8,
//         nota2: 3,
//         media: function () {
//             return (this.nota1 + this.nota2) / 2;
//         }
//     }
// }
// console.log(criarAluno())

//Esta função criará os alunos conforme for chamada
// function criarAluno2(nome, n1, n2) {
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function () {
//             return (this.nota1 + this.nota2) / 2
//         }
//     }
// }

// let turma = [criarAluno2('Murilo', 8, 5),
//     criarAluno2('Rosamund', 8, 5),
//     criarAluno2('Carlos', 8, 5),
// ]

// console.log(turma[0] turma[0].media(), turma[1], turma[1].media(), turma[2], turma[2].media());

/* ----Modelo de criação de objetos-----*/

function aluno(nome, n1, n2) {
    this.nome = nome,
        this.nota = n1,
        this.nota2 = n2,
        this.media = (this.nota + this.nota2) / 2
    // this.media = function () {
    //     return (this.nota1 + this.nota2) / 2;

    // }
}
var a = new aluno('Murilo', 8, 7);
var b = new aluno('Aline', 4, 7);
// let c = new aluno('Antonio', 3, 7);

console.log(a, b);