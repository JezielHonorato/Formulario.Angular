export class Formulario {
    private nome: string

    constructor (nome: string) {
        this.nome = nome
    }

    apresentarNome(): string{
        return this.nome
    }
}