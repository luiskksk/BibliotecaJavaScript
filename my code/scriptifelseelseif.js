var nome = "Luis Henrique";
var idadeDaPessoa = 16;

console.log("--------------------------------------");
console.log("A idade do Componente " + idadeDaPessoa + " anos.");
console.log("--------------------------------------");

if (idadeDaPessoa >= 18) {
    console.log(nome + " é maior de idade, e já pode fazer coisas sem a supervisão de um adulto.");
    console.log("--------------------------------------");
}else if (idadeDaPessoa < 18) {
    console.log(nome + " não é maior de idade. Faltam : " + (18 - idadeDaPessoa) + " anos para ser maior de idade. Necessita de supervisão de um adulto.");
    console.log("--------------------------------------");
} else {
    console.log(nome + " não é maior de idade. E precisa de supervisão de um adulto.");
    console.log("--------------------------------------");
} 