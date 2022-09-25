class Pessoa {

    protected _nome: string;
    private _idade: string;
    private _dataNascimento: Date;

    constructor(nome: string, idade: string, dataNascimento: Date) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    get nome(): string {
        return this._nome;
    }

    get idade(): string {
        return this._idade;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    setNome(novoNome: string) {
        this._nome = novoNome;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    set dataNascimento(novaDataNasc) {
        this._dataNascimento = novaDataNasc;
    }
    
}
