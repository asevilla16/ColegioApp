import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './features/estudiantes/estudiantes.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { CrearEstudianteComponent } from './features/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './features/editar-estudiante/editar-estudiante.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';


@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    InicioComponent,
    CrearEstudianteComponent,
    EditarEstudianteComponent,
    PaginaNoSeEncuentraComponent,
    NavegacionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
