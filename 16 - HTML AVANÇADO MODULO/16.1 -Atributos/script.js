// // //Capturamos um objeto
// // let img = document.getElementById('like');
// // //Atribuimos um evento ao objeto
// // img.addEventListener('click', function(){
// //     //Capturamos o atributo 
// //     let lastImg = img.getAttribute('src');
// //     // img.src = './down.png'
// //     img.setAttribute('src', './down.png');
// //     console.log(lastImg);
// // })
// // // É possível Setar ou Pegar um atributo direto do HTMl
// // //

// let arrow = document.getElementById('like');
// let arrowAtt;
// arrow.addEventListener('click', ()=> {  
//     console.log(arrowAtt)
//     arrowAtt = arrow.getAttribute('style');
//     if(arrowAtt === null){
//         arrow.setAttribute('style', 'width: 20px;')
//         console.log(arrowAtt)
//     } else if (arrowAtt === 'width: 20px;'){
//     arrow.setAttribute('style','width: 50px;');   
//     console.log(arrowAtt)
//     } else{
//         arrow.setAttribute('style','width: 100px;');
//     }
// })
// console.log(arrowAtt)




let lista = document.getElementById('lista');
let imp = document.getElementById('imp');

let num = lista.getAttribute('num');

console.log(num)

let newAttr;

let conteudo;
let o;

imp.addEventListener('input', () =>{    
    let i = parseInt(imp.value);
    conteudo = '<li>' + i + '</li>';
    console.log(i)
    lista.innerHTML = conteudo;
    newAttr = i;
    lista.dataset.num2 = newAttr
    o = lista.getAttribute('data-num2')
    if(o == '25'){
        console.log('ACHEI')
    }
})

