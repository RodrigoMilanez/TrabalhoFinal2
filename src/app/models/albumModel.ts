import { Artista } from './artistaModel'; 
import { Gravadora } from './gravadoraModel'; 

export class Album {
    id: number;
    titulo: string;
    lancamento: Date;
    Gravadora: Gravadora;
    artista: Artista;

  
    constructor(id: number, titulo: string, lancamento: Date, gravadora: Gravadora, artista: Artista) {
      this.id = id;
      this.titulo = titulo;
      this.lancamento = lancamento;
      this.Gravadora = gravadora;
      this.artista = artista;
    }
  }