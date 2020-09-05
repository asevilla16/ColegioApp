import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Estudiante } from 'src/app/models/estudiante';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  cursos: Curso[];
  estudiante: Estudiante;

  constructor(
    private _cursosService: CursosService,
    private _estudianteService: EstudiantesService,
    private router: Router) {
      this.estudiante = new Estudiante();
    }

  ngOnInit(){
    this._cursosService.getCursos().subscribe(res => {
      this.cursos = res;
    })
  }

  crearEstudiante(){
    if (this.estudiante){
      this._estudianteService.crearEstudiante(this.estudiante).subscribe(() => {
        this.router.navigate(['/estudiantes']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/estudiantes']);
  }

}
