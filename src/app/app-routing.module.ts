import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMateriaComponent } from './pages/materia/lista-materia/lista-materia.component';
import { MateriaComponent } from './pages/materia/materia.component';
import { HomeComponent } from './pages/navegacao/home/home.component';
import { ListaProfessorComponent } from './pages/professor/lista-professor/lista-professor.component';
import { ProfessorComponent } from './pages/professor/professor.component';

const routes: Routes = [

  { path: '', redirectTo: '/professor', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'professor', component: ListaProfessorComponent },
  { path: 'materia', component: ListaMateriaComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
