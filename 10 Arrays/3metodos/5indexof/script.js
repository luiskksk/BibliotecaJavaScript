var arrPrato = new Array('arroz', 'tomate', 'alface');
arrPrato.push('feijao');
if(arrPrato.indexOf('arroz') !== -1) {
    arrPrato.shift();
}
console.log(arrPrato);