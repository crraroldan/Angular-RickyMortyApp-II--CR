import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) {}

  retornar() {
    return this.http.get('https://rickandmortyapi.com/api/character/1,183,7,2,8,10');
  }


}
