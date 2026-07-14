function verificarIdade(nomePessoa, anoDeNascimento) {
    var idade = 2026 - anoDeNascimento;
    if (idade >= 18) {
        console.log(nomePessoa + " é maior de idade.");
    } else {
        console.log(nomePessoa + " é menor de idade.");
    }
}

    var nome = "Louis";
    var anoDeNascimento = 1540;
    console.log(verificarIdade(nome, anoDeNascimento));
    console.log(verificarIdade("Luskinha", 1200));

    nome = "luisitos";
    anoDeNascimento = 2000;
    var texto = verificarIdade(nome, anoDeNascimento);
    console.log(texto);