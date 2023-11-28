export class Gravadora {
    id: number;
    nome:string;
    pais:string; //país sede
    fundacao:Date; // ano de fundação
    tipo:string; //gravadora, label, virtual...
     

  
    constructor(id: number, nome: string, pais: string, fundacao: Date, tipo: string) {
        this.id = id;
        this.nome = nome;
        this.pais = pais;
        this.fundacao = fundacao;
        this.tipo = tipo;

    }
  }