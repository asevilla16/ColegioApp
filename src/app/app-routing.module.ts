import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesComponent } from './features/estudiantes/estudiantes.component';
import { CrearEstudianteComponent } from './features/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './features/editar-estudiante/editar-estudiante.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'estudiantes',
    component: EstudiantesComponent
  },
  {
    path: 'estudiantes/crear',
    component: CrearEstudianteComponent
  },
  {
    path: 'estudiantes/editar/:id',
    component: EditarEstudianteComponent
  },
  {
    path: '**',
    component: PaginaNoSeEncuentraComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
