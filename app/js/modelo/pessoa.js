class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    set dataNascimento(novaDataNasc) {
        this._dataNascimento = novaDataNasc;
    }
}
