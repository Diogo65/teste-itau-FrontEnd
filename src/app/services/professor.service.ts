import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor, ProfessorResponse } from '../models/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient){}

  protected UrlServiceV1: string = "http://projeto-itau.azurewebsites.net/v1/";

  obterProfessores() : Observable<Professor[]> {
    return this.http
    .get<Professor[]>(this.UrlServiceV1 + "Professor"); //Retorna um Observable de Materia
  }

  obterProfessoresMateria(id: number) : Observable<ProfessorResponse[]> {
    return this.http
    .get<ProfessorResponse[]>(this.UrlServiceV1 + "ProfessorMateria/materia/" + id); 
  }

  cadastrarProfessor(nome: string) {
    return this.http.post(`${this.UrlServiceV1}Professor`, {Nome: nome})
  };

  cadastrarProfessorMateria(professorId: number, materiaId: number) {
    return this.http.post(`${this.UrlServiceV1}ProfessorMateria`, {ProfessorId: professorId, MateriaId: materiaId})
  };

  excluirProfessor(id: number) {
    return this.http.post(`${this.UrlServiceV1}Professor/excluir`, {Id: id})
  };
}
