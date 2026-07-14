function checarIdade(nome, dataNascimento) {
    var idade = 2026 - dataNascimento;
    if (idade >= 18) {
        return nome + " é maior de idade e pode fazer coisas de adulto.";
    } else {
        return nome + " é de menor e não pode fazer coisas de adulto.";
    }
}

var nome = "chico";
var anoNascimento = 2000;

console.log(checarIdade(nome, anoNascimento) + "\n");

console.log(checarIdade("Adalberto", 2018) + "\n");

nome = "Olise";
anoNascimento = 2005;
var texto = checarIdade(nome, anoNascimento);

console.log(texto + "\n");
