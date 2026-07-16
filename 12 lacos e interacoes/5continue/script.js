var flores = ['rosa', 'azul', 'amarelo', 'rosa', 'amarelo', 'vermelho'];
var i = 0;
var numeroDeFlores = 0;
for (var i = 0; i < flores.length; i++) {
    if (flores[1] == 'amarelo') {
        continue;
    }
    numeroDeFlores++;
}
console.log('Numero de flores: ' + numeroDeFlores);