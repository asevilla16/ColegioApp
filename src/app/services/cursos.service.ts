import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  apiURL = "https://localhost:44329/api/curso";

  constructor(private http: HttpClient) { }

  getCursos(){
    return this.http.get<Curso[]>(this.apiURL);
  }


}
