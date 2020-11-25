import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/navegacao/menu/menu.component';
import { HomeComponent } from './pages/navegacao/home/home.component';
import { FooterComponent } from './pages/navegacao/footer/footer.component';
import { APP_BASE_HREF } from '@angular/common';
import { ProfessorService } from './services/professor.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaMateriaComponent } from './pages/materia/lista-materia/lista-materia.component';
import { ListaProfessorComponent } from './pages/professor/lista-professor/lista-professor.component';
import { MateriaService } from './services/materia.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ListaMateriaComponent,
    ListaProfessorComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProfessorService,
    MateriaService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
