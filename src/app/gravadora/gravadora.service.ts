import { Injectable } from '@angular/core';
import { Gravadora } from '../models/gravadoraModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GravadoraService {
  private baseUrl = 'http://localhost:4000/gravadoras'; 

  constructor(private http: HttpClient) {}

  getGravadoras(): Observable<Gravadora[]> {
    return this.http.get<Gravadora[]>(this.baseUrl);
  }

  getGravadoraById(id: number): Observable<Gravadora> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Gravadora>(url);
  }

  criarGravadora(gravadora: Gravadora): Observable<Gravadora> {
    return this.http.post<Gravadora>(this.baseUrl, gravadora);
  }

  atualizarGravadora(gravadora: Gravadora): Observable<Gravadora> {
    const url = `${this.baseUrl}/${gravadora.id}`;
    return this.http.put<Gravadora>(url, gravadora);
  }

  deletarGravadora(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
