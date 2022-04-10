var nomes = ['Murilo', 'Antonio'];
var nota1 = [7.5, 8.2];
var nota2 = [6.9, 8.6];



function media(n1, n2) {
    return Math.floor((n1 + n2) / 2);
}

function passou(media) {
    var resultado = 'reprovado';
    if (media > 7) {
        resultado = 'Aprovado';
    }
    return resultado
}

for (var i in nomes) {
    var n1 = nota1[i];
    var n2 = nota2[i];
    var m = media(n1, n2);
    console.log(`${nomes[i]} - ${n1} - ${n2} - media:${m} - ${passou(m)}`);
}