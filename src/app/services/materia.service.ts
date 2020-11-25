import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia, MateriaResponse } from '../models/Materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {


  constructor(private http: HttpClient){}

  protected UrlServiceV1: string = "http://projeto-itau.azurewebsites.net/v1/";

  obterMaterias() : Observable<Materia[]> {
    return this.http
    .get<Materia[]>(this.UrlServiceV1 + "Materia"); //Retorna um Observable de Professores
  }

  obterMateriasProfessor(id: number) : Observable<MateriaResponse[]> {
    return this.http
    .get<MateriaResponse[]>(this.UrlServiceV1 + "ProfessorMateria/professor/" + id); 
  }
}
