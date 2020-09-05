import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[];

  constructor(
    private _estudianteService: EstudiantesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes(){
    this._estudianteService.obtenerEstudiantes().subscribe(data => {
      this.estudiantes = data;
    })
  }

  deleteEstudiante(id: Number){
    const res = confirm("Desea eliminar el estudiante?");
    if (res){
      this._estudianteService.eliminarEstudiante(id).subscribe(() => {
        this.getEstudiantes();
      })
    }
  }

  crearEstudiante(){
    this.router.navigate(['/estudiantes/crear']);
  }

  editarEstudiante(id: Number){
    this.router.navigate(['/estudiantes/editar', id]);
  }

}
