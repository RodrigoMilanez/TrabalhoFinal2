
import { Component, OnInit } from '@angular/core';
import { Album } from '../models/albumModel';
import { AlbumService } from './album.service';
import { Gravadora } from '../models/gravadoraModel';
import { Artista } from '../models/artistaModel';
import { ArtistaService } from '../artista/artista.service';
import { GravadoraService } from '../gravadora/gravadora.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];
  albumParaEditar: Album = new Album(0, '', new Date(), 
      new Gravadora(0, '', '', new Date, ''), 
      new Artista(0, '', new Date(), '', ''));
  albumParaAdicionar: Album = new Album(0, '', new Date(), 
      new Gravadora(0, '', '', new Date, ''), 
      new Artista(0, '', new Date(), '', '')); 
  novoAlbum : Album   = new Album(0, '', new Date(), 
  new Gravadora(0, '', '', new Date, ''), 
  new Artista(0, '', new Date(), '', ''));  
  mostrarFormulario: boolean = false;
  modoEdicao: boolean = false;
  mostrarFormAdicionar: boolean = false;
  mostrarFormEdicao: boolean = false;
  gravadoras: Gravadora[] = [];
  artistas: Artista[] = []; 
  artista: Artista = new Artista(0, '', new Date(), '', '');
  gravadora: Gravadora =  new Gravadora(0, '', '', new Date, '')
  albumsComDetalhes: any[] = [];

  constructor(private albumService: AlbumService,
    
    private artistaService: ArtistaService,
    private gravadoraService: GravadoraService) {}


  ngOnInit(): void {
    this.carregarAlbums();
    this.carregarArtistas();
    this.carregarGravadoras();
  }

  toggleForm(tipo: string): void {
      this.mostrarFormAdicionar = !this.mostrarFormAdicionar;
    
  }


  editarAlbum(album: any): void {
    this.albumParaEditar = { ...album }; 
    this.mostrarFormEdicao = true; 
  }

  salvarEdicao(): void {
    this.albumService.updateAlbum(this.albumParaEditar).subscribe(() =>{
        this.novoAlbum= new Album(0, '', new Date(), 
        new Gravadora(0, '', '', new Date, ''), 
        new Artista(0, '', new Date(), '', ''));
        this.carregarAlbums();
    });
    this.mostrarFormEdicao = false;
  }
  cancelarEdicao(): void {
    this.mostrarFormEdicao = false; 
  }



  carregarGravadoras(): void {
    this.gravadoraService.getGravadoras().subscribe(gravadoras => {
      this.gravadoras = gravadoras;
    });
  }

  carregarArtistas(): void {
    this.artistaService.getArtistas().subscribe(artistas => {
      this.artistas = artistas;
    });
  }

  carregarAlbums(): void {
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }
  
  obterArtistaPeloID(idArtista: number): Artista | undefined {
    return this.artistas.find(artista => artista.id === idArtista);
  }

  obterGravadoraPeloID(idGravadora: number): Gravadora | undefined {
    return this.gravadoras.find(gravadora => gravadora.id === idGravadora);
  }

  
  obterNomeArtista(artista: Artista): string {
    return artista ? artista.name : 'Artista não encontrado';
  }

  obterNomeGravadora(gravadora: Gravadora): string {
    return gravadora ? gravadora.nome : 'Gravadora não encontrada';
  }

  carregarAlbumsComDetalhes(): void {
    this.albumService.obterAlbumsComDetalhes().subscribe(albums => {
      this.albumsComDetalhes = albums;
    });
  }


  adicionarAlbum(): void {
    console.log(this.artista);
    console.log(this.gravadora.id);
    this.albumParaAdicionar.artista = (this.artista);
    this.albumParaAdicionar.Gravadora = this.gravadora;
    this.albumService.addAlbum(this.albumParaAdicionar).subscribe(() => {
      this.resetFormulario();
      this.carregarAlbums();
    });
  }

  deletarAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.carregarAlbums();
    });
  }
  

  resetFormulario(): void {
    this.mostrarFormulario = false;
    this.modoEdicao = false;
    this.albumParaEditar = new Album(0, '', new Date(),
     new Gravadora(0, '', '', new Date, ''), new Artista(0, '', new Date(), '', ''));
  }
}