import { Component, OnInit } from '@angular/core';
import { Artista } from '../models/artistaModel';
import { ArtistaService } from './artista.service';

@Component({
  selector: 'app-artista',
  templateUrl:'./artista.component.html',
  styleUrls: ['./artista.component.scss'],
})
export class ArtistaComponent  implements OnInit {
  artistas: Artista[] = [];
  novoArtista: Artista = new Artista(0, '', new Date(), '', '');
  mostrarFormAdicionar: boolean = false;
  artistaParaEditar: Artista = new Artista(0, '', new Date(), '', '');;
  mostrarFormularioEdicao: boolean = false;
  

  constructor(private artistaService: ArtistaService) {}

  ngOnInit(): void {
    this.carregarArtistas();
  }

  toggleForm(tipoFormulario: string): void {
      this.mostrarFormAdicionar = !this.mostrarFormAdicionar;
  }


  carregarArtistas(): void {
    this.artistaService.getArtistas().subscribe(artistas => {
      this.artistas = artistas;
    });
  }

  adicionarArtista(): void {
    this.artistaService.adicionarArtista(this.novoArtista).subscribe(() => {
      this.carregarArtistas();
      this.novoArtista = new Artista(0, '', new Date(), '', '');
    });
  }

  atualizarGenero(event: CustomEvent): void {
    this.novoArtista.genero = (event.target as HTMLInputElement).value;
  }

  editarArtista(artista: any): void {
    this.artistaParaEditar = { ...artista };
    this.mostrarFormularioEdicao = true; 
  }

  salvarEdicao(): void {
    this.artistaService.editarArtista(this.artistaParaEditar).subscribe(() => {
      this.carregarArtistas();
      this.novoArtista = new Artista(0, '', new Date(), '', '');
    });
    this.mostrarFormularioEdicao = false; 
  }
  cancelarEdicao(): void {
    this.mostrarFormularioEdicao = false; 
  }

  deletarArtista(id: number): void {
    this.artistaService.deletarArtista(id).subscribe(() => {
      this.carregarArtistas();
    });
  }
}
