import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColegioApp';

  miPropiedad: String = "Colegio";

  miEvento(){
    this.miPropiedad = "Valor cambiado desde evento";
  }
}
