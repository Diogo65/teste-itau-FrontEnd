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

  constructor(
    private professorService: ProfessorService,
    private materiaService: MateriaService,
    private modalService: NgbModal,
    ) { } //Injetar o serviço

  public professores: Professor[] | undefined;

  ngOnInit() {

    this.professorService.obterProfessores()
      .subscribe( 
        professores => {
          this.professores = professores;
        },
        error => console.log(error)
      );
  }

  // open(content:any) {
  //   this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  open(content:any, id: number) {
    this.ListarMateriasProfessor(id);
    this.modalService.open(content, { size: 'lg' });
  }

  ListarMateriasProfessor(id: number) {
    this.materiaService.obterMateriasProfessor(id)
      .subscribe(items => {
        this.materias = items;
      },
      error => console.log(error)
      );
  }
}
