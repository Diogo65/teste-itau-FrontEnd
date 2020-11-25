import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Materia } from 'src/app/models/Materia';
import { ProfessorResponse } from 'src/app/models/professor';
import { MateriaService } from 'src/app/services/materia.service';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-lista-materia',
  templateUrl: './lista-materia.component.html',
  styleUrls: ['./lista-materia.component.css']
})
export class ListaMateriaComponent implements OnInit {

  public nome : string = "";
  professores: ProfessorResponse[] | undefined;

  constructor(
    private professorService: ProfessorService,
    private materiaService: MateriaService,
    private modalService: NgbModal,
    
    ) { } //Injetar o serviço

  public materias: Materia[] | undefined;

  ngOnInit() {
    this.ListarMaterias();
  }

  open(content:any, id: number) {
    this.ListarProfessorMateria(id);
    this.modalService.open(content, { size: 'lg' });
  }

  openRegisterMateria(registerMateria:any) {
    this.modalService.open(registerMateria, { size: 'lg' });
  }

  CadastrarMateria() {
    this.materiaService.cadastrarMateria(this.nome)
      .subscribe(data => {
        console.log("Cadastrado");
        this.ListarMaterias();
        this.modalService.dismissAll();
      },
      error => console.log(error)
      );
  }

  ListarMaterias(){
    this.materiaService.obterMaterias()
      .subscribe( 
        materias => {
          this.materias = materias;
        },
        error => console.log(error)
      );
  }

  ListarProfessorMateria(id: number) {
    this.professorService.obterProfessoresMateria(id)
      .subscribe(items => {
        this.professores = items;
      },
      error => console.log(error)
      );
  }

  excluirMateria(id: number) {
    this.materiaService.excluirMateria(id)
      .subscribe(data => {
        console.log("Excluido");
        this.ListarMaterias();
      },
      error => console.log(error)
      );
  }

  keyUp(event: any){
    this.nome = event.target.value;
  }
}
