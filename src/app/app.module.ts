import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/navegacao/menu/menu.component';
import { HomeComponent } from './pages/navegacao/home/home.component';
import { FooterComponent } from './pages/navegacao/footer/footer.component';
import { ProfessorComponent } from './pages/professor/professor.component';
import { MateriaComponent } from './pages/materia/materia.component';
import { APP_BASE_HREF } from '@angular/common';
import { ProfessorService } from './services/professor.service';
import { ListaProfessorComponent } from './pages/professor/lista-professor/lista-professor.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaMateriaComponent } from './pages/materia/lista-materia/lista-materia.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ProfessorComponent,
    MateriaComponent,
    ListaProfessorComponent,
    ListaProfessorComponent,
    ListaMateriaComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProfessorService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
