var nome = "Juninho";
var idade = 22;

switch (idade) {
    case idade >= 18:
        console.log(nome + " é de maior e tem :" + idade + " anos. Já pode ser registrado como adulto.");
        break;
    case idade < 18:
        console.log(nome + " é de menor e tem :" + idade + " anos. Não pode ser registrado como adulto.");
        break;
    default:
        console.log(nome + " Idade invalida para ser registrado(a) como adulto.");
}

