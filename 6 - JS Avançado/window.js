/*
//window possui métodos e propriedades

##

console.log(window);



## document

//é uma propriedade do window que acessa todo o HTML


##Todo o html possui tags que podem ser transformadas em objetos JS
## document.body possui diversos elementos 
//document.body.innerHTML = "<h1>String Qualquer</h1>" + document.body.innerHTML
//Gera um H1 dinâmicamente detro do body






//é possível fazer diversas alterações
##Existem diversas propriedades no document
console.log(document)

document.body.innerHTML = "<h1> Murilo Apolonio </h1>" + document.body.innerHTML


##Acessando qualquer elemento dentro do HTML

getElementById


let para = document.getElementById('p01');

let p02 = document.getElementsByClassName('paragrafo');

let p03 = document.getElementsByTagName('p');

console.log(para.innerHTML);
console.log(p02);
console.log(p03);

console.log(p02[0]);
console.log(p03[2])
var teste = document.getElementsByName('firstName');
console.log(p02[1].innerHTML )

*/

let ppp = document.getElementById('p01');
ppp.style.background = 'Red';

ppp.classList = 'nova'
console.log(ppp);