class PessoaJuridica extends Pessoa {

    readonly cnpj: string;

    constructor(nome: string, idade: string, dataNascimento: Date, cnpj: string) {
        super(nome + 'Jurídica', idade, dataNascimento)

        this.cnpj = cnpj;
    }

    getCnpj(): string {
        return this.cnpj
    }
}