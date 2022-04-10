
let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";




function converter(){
    let input = document.getElementById('valor');
    let valor = input.value;
    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            let rate = data.USDBRL.ask;
            let calculo = document.getElementById('resultado');
            calculo.innerHTML = `$:${valor}, equivalem a aproximadamente R$:${Math.floor(rate * valor)}`;
        })
        .catch((err)=>{
            console.log(err.create_date)
        })
}


/* Tratamento de ERROS - Try Catch throw */

/* 
let nome = ''
try{
    if(nome == "" || nome == undefined){
        throw "O nome não pode ser Vazio"

    }
    console.log(nome);
} catch(err){
    console.log('Houve um erro ',err)
} finally{
    console.log('Boa noite');
}


*/