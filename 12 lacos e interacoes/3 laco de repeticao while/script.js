var nomes = ['solucço', 'astrid', 'melequento', 'perna de peixe', 'bocao'];
var nomePesquisado = null;
var i = 0;
while (nomePesquisado == null && i < nomes.length ) {
    if (nomes(i) == 'melequento') {
        nomePesquisado = nomes[i];
    } else {
        console.log(nomes[i] + ' não é o nome pesquisado');
    }
    i++;
}
console.log('nome encontrado' + nomePesquisado);