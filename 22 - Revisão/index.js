/*Strict mode */
/*
"use strict"
function imprimir(){
    var x = 3;
    console.log(x);
}

imprimir();
console.log(x)
console.log(window);
*/

/*THIS + BIND */
/*
let gato = document.querySelector('.cat');
let cao = document.querySelector('.dog');


let dog = {
    sound: "au au",
    speak: speakGeneric
    
}

let cat = {
    sound: "miau miau",
    speak: speakGeneric
}




gato.addEventListener('click',speakGeneric.bind(cat));
cao.addEventListener('click',speakGeneric.bind(dog));


function speakGeneric(){
    console.log(this.sound);
}
*/

/* Arrow function */
//()=>{} ou argumento => retorno  




/*
let usuarios = ['nome', 'nome1', 'nome2']

function inserirUsuarios(nome,call){
    setTimeout(()=>{
        usuarios.push(nome);
        call()
    },1500);
}

function listarUsuarios(){
    console.log(usuarios);
}
inserirUsuarios('Murilo',listarUsuarios);
*/
/*------------Promises------------ */
/*
let usuarios = ['nome', 'nome1', 'nome2']

function inserirUsuarios(nome,call){
    let promise = new Promise(function(resolve, reject){

    setTimeout(()=>{
        usuarios.push(nome);
        let error = false;

        if(!error){
            resolve();
        } else {
            reject({msg: "Erro fatal"});
        }
    },1500);
});
return promise
}
function listar(){
    console.log(usuarios);
}

inserirUsuarios('Murilo').then(listar).catch((e)=>{console.log(e.msg)});
*/

/*----ASYNC / AWAIT */
/*
let usuarios = ['nome', 'nome1', 'nome2']

function inserirUsuarios(nome){
    let promise = new Promise(function(resolve, reject){

    setTimeout(()=>{
        usuarios.push(nome);
        let error = false;

        if(!error){
            resolve();
        } else {
            reject({msg: "Erro fatal"});
        }
    },1500);
});
return promise
}
function listar(){
    console.log(usuarios);
}

async function executar(){
    await inserirUsuarios('Murilo');
    listar();
}
executar();
*/

// Programação Funcional
//HIGH ORDER FUNCTIONS
//MAP - FILTER - REDUCE


/*
function novoAluno(nome,idade){
    return {nome, idade}
}
let alunos =[
    novoAluno('2ewse', 48),
    novoAluno('wewe', 32),
    novoAluno('cxcxc', 17),
    novoAluno('vvv', 15),
    novoAluno('rrr', 12),
    novoAluno('rrrweweq', 56)
];
console.log(alunos);
//Métodos para filtrar dados de um array;
for(let aluno of alunos){
    if(aluno.idade <= 30){
        console.log(aluno.nome, aluno.idade)
    }
}
console.log('-----')
for(let aluno of alunos){
    if(aluno.idade >= 30){
        console.log(aluno.nome, aluno.idade)
    }
}
function temMenos30(aluno){
    return aluno.idade < 30;
}
let alunosMenos30 = alunos.filter(temMenos30);
console.log(alunosMenos30)

function temMais30(aluno){
    return aluno.idade > 30;
}
let alunoMais30 = alunos.filter(temMais30);
console.log(alunoMais30);
*/

//filtro
/*
let alunos =[
    novoAluno('2ewse', 48),
    novoAluno('wewe', 32),
    novoAluno('cxcxc', 17),
    novoAluno('vvv', 15),
    novoAluno('rrr', 12),
    novoAluno('rrrweweq', 56)
];
function novoAluno(nome,idade){
    return {nome, idade}
}
console.log(alunos);


function temMenos30(aluno){
    return aluno.idade < 30;
}


function temMais30(aluno){
    return aluno.idade > 30;
}
function filtro(callback){
    let alunosFiltrados = [];
    for(let aluno of this){
        if(callback(aluno)){
            alunosFiltrados.push(aluno);
        }
    }
    return alunosFiltrados;
}
alunos.filtro = filtro

console.log(alunos.filtro(temMenos30));
console.log(alunos.filtro(temMais30));
*/

// Map
let alunos = [
    novoAluno('2ewse', 48),
    novoAluno('wewe', 32),
    novoAluno('cxcxc', 17),
    novoAluno('vvv', 15),
    novoAluno('rrr', 12),
    novoAluno('rrrweweq', 56)
];

function novoAluno(nome, idade) {
    return {
        nome,
        idade
    };
}
/*

function  totalTurma(id,aluno){
    return id + aluno.nome;
}
console.log(alunos.reduce(totalTurma,0));

console.log(alunos.reduce((x,al)=>{
    return x + al.idade;
},0));
*/

// console.log(alunos.map((x)=>{ return x}));


// function red(){
//     let al = []
//     for(x of alunos){
//         al.push(x.nome);
//     }
//     console.log(al);
// }
// red()
// alunos.push({nome:'Murilo',idade:34})


//reduce sem reduce()
// reduzValor(alunos, 0);

// function reduzValor(arr,iterar) {
//     let valor = iterar;

//     for (i of arr) {
//         valor += i.idade;
//     }
//     console.log(valor);  
// }


function pokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
   
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data)=>{pokeF(data)}
        ).catch(erro);

    }





    function erro() {
        resposta.innerHTML = `<p>Não encontramos o pokémon solicitadop</p>`
    }


    //Captura dados

    let form = document.getElementById('poke');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        pokemon()
        input.value = ''
        
    })


    function pokeF(poke){
        let input = document.getElementById('dados');
        let resposta = document.querySelector('#resp');
        resposta.innerHTML = `<p>Esse pokemon é o ${poke.results[input.value].name} </p>`
        input.value = ''
    }



    //fim função
