import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artista } from '../models/artistaModel';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private apiUrl = 'http://localhost:3000/artistas'; 

  constructor(private http: HttpClient) {}

  
  getArtistaById(id: number): Observable<Artista> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Artista>(url);
  }

  getArtistas(): Observable<Artista[]> {
    return this.http.get<Artista[]>(this.apiUrl);
  }

  adicionarArtista(artista: Artista): Observable<Artista> {
    return this.http.post<Artista>(this.apiUrl, artista);
  }

  editarArtista(artista: Artista): Observable<Artista> {
    const url = `${this.apiUrl}/${artista.id}`;
    return this.http.put<Artista>(url, artista);
  }

  deletarArtista(id: number): Observable<Artista> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Artista>(url);
  }
}

