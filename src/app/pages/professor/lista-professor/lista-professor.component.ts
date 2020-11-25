import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Materia, MateriaResponse } from 'src/app/models/Materia';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.component.html',
  styleUrls: ['./lista-professor.component.css']
})
export class ListaProfessorComponent implements OnInit {

  materias: MateriaResponse[] | undefined;
  public professores: Professor[] | undefined;
  public nome : string = "";
  
  constructor(
    private professorService: ProfessorService,
    private materiaService: MateriaService,
    private modalService: NgbModal,
    ) { } //Injetar o serviço


  ngOnInit() {
    this.ListarProfessores();
  }

  open(content:any, id: number) {
    this.ListarMateriasProfessor(id);
    this.modalService.open(content, { size: 'lg' });
  }

  openRegister(register:any) {
    this.modalService.open(register, { size: 'lg' });
  }

  CadastrarProfessor() {
    this.professorService.cadastrarProfessor(this.nome)
      .subscribe(data => {
        console.log("Cadastrado");
        this.ListarProfessores();
        this.modalService.dismissAll();
      },
      error => console.log(error)
      );
  }

  ListarProfessores(){
    this.professorService.obterProfessores()
    .subscribe( 
      professores => {
        this.professores = professores;
      
      },
      error => console.log(error)
    );
  }

  ListarMateriasProfessor(id: number) {
    this.materiaService.obterMateriasProfessor(id)
      .subscribe(items => {
        this.materias = items;
      },
      error => console.log(error)
      );
  }

  excluirProfessor(id: number) {
    this.professorService.excluirProfessor(id)
      .subscribe(data => {
        console.log("Excluido");
        this.ListarProfessores();
      },
      error => console.log(error)
      );
  }

  
  keyUp(event: any){
    this.nome = event.target.value;
  }
}
