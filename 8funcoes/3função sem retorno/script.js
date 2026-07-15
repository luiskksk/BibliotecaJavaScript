function verificarIdade(nomePessoa, anoDeNascimento) {
    var idade = 2018 - anoDeNascimento;
    if ( idade >= 18) {
        console.log(nomePessoa + "é maior de idade. ");
    } else {
        console.log(nomePessoa + "é menor de idade.")
    }
}

var nome = "Jaona";
var nascimento = 2002;
verificarIdade(nome, nascimento);

verificarIdade("cassiano", 1988);

nome = "john";
nascimento = 1978;
verificarIdade(nome, nascimento);