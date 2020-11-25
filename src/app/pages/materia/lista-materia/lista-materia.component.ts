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

  professores: ProfessorResponse[] | undefined;

  constructor(
    private professorService: ProfessorService,
    private materiaService: MateriaService,
    private modalService: NgbModal,
    ) { } //Injetar o serviço

  public materias: Materia[] | undefined;

  ngOnInit() {

    this.materiaService.obterMaterias()
      .subscribe( 
        materias => {
          this.materias = materias;
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
    this.ListarProfessorMateria(id);
    this.modalService.open(content, { size: 'lg' });
  }

  ListarProfessorMateria(id: number) {
    this.professorService.obterProfessoresMateria(id)
      .subscribe(items => {
        this.professores = items;
      },
      error => console.log(error)
      );
  }
}
