import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Materia, MateriaResponse } from 'src/app/models/Materia';
import { MateriaService } from 'src/app/services/materia.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-professor',
  templateUrl: './lista-professor.component.html',
  styleUrls: ['./lista-professor.component.css']
})
export class ListaProfessorComponent implements OnInit {

  materias: MateriaResponse[] | undefined;
  public materiasList: Materia[] | undefined;

  public professores: Professor[] | undefined;
  public nome : string = "";
  public professorId : number = 0;
  public materiaSelecionada: number = 0;
  @ViewChild('alert', { static: false }) modalContent: ElementRef | undefined;

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
    this.ListarMaterias();
    this.professorId = id;
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

  CadastrarProfessorMateria() {
    this.professorService.cadastrarProfessorMateria(this.professorId,this.materiaSelecionada)
      .subscribe(data => {
        if(!data){
          this.openAlert();
        }
        this.ListarMateriasProfessor(this.professorId);
      },
      error => console.log("Ocorreu um problema no cadastro")
      );
  }

  openAlert() {
    this.modalService.open(this.modalContent, { size: 'sm' });
    
  }

  
  keyUp(event: any){
    this.nome = event.target.value;
  }

  keyUpMateriaSelecionada(event: any){
    this.materiaSelecionada =  parseInt(event.target.value);
  }

  ListarMaterias(){
    this.materiaService.obterMaterias()
      .subscribe( 
        materias => {
          this.materiasList = materias;
          console.log(this.materiasList)
        },
        error => console.log("Ocorreu um problema")
      );
  }
}
