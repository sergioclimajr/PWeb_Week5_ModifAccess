class PessoaFisica extends Pessoa {

    readonly cpf: string

    constructor(nome: string, idade: string, dataNascimento: Date, cpf: string) {
        super(nome + 'Física', idade, dataNascimento)

        this.cpf = cpf;
    }

    getCpf(): string {
        return this.cpf;
    }
}