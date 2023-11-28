
export class Artista {
    id: number;
    name: string;
    formacao: Date; //data de formação da banda
    nacionalidade: string;
    genero: string;

  
    constructor(id: number, name: string, formacao: Date, nacionalidade: string, genero: string) {
      this.id = id;
      this.name = name;
      this.formacao = formacao;
      this.nacionalidade = nacionalidade;
      this.genero = genero;
    }
  }