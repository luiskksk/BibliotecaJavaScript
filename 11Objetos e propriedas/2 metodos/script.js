var carro = {
    extras: ["ar-condicionado", "freios abs", "som"],
    velocidade: 0,
    freiosLigados: false,
    ligarFreios: function () {
        this.faroisLigados = true;
    },
    acelerar: function ( velocidade) {
        this.velocidade += velocidade
 },
 freiar: function () {
    this.velocidade = 0;
 }
}

carro.ligarFreios();
console.log('farois ligados: ' + carro.faroisLigados);
carro.acelerar(50);
console.log('velocidade: '  + carro.velocidade);
carro.freiar();
console.log('velocidade: ' + carro.velocidade);