export class Usuario {
    nome:string;
    email:string;
    valor:number;
    datanasc:Date;
    
    constructor(nome, email, valor, datanasc){
        this.nome = nome;
        this.email = email;
        this.valor = valor;
        this.datanasc = datanasc;
    }
}
