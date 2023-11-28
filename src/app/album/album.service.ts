import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Album } from '../models/albumModel';
import { GravadoraService } from '../gravadora/gravadora.service';
import { ArtistaService } from '../artista/artista.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:5000/albums'; 

  constructor(private http: HttpClient,
    private gravadoraService: GravadoraService,
    private artistaService: ArtistaService) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.apiUrl}/${album.id}`;
    return this.http.put<Album>(url, album);
  }

  deleteAlbum(id: number): Observable<Album> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Album>(url);
  }

  obterAlbumsComDetalhes(): Observable<any[]> {
    return this.http.get<Album[]>(this.apiUrl).pipe(
      switchMap(albums =>
        forkJoin(
          albums.map(album =>
            forkJoin({
              album: this.http.get<Album>(`${this.apiUrl}/${album.id}`),
              gravadora: this.gravadoraService.getGravadoraById(album.Gravadora.id),
              artista: this.artistaService.getArtistaById(album.artista.id)
            })
          )
        )
      ),
      map((response: any[]) =>
        response.map(item => ({
          album: item.album,
          gravadora: item.gravadora,
          artista: item.artista
        }))
      )
    );
  }
}