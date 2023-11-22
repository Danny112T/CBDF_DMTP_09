import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio 09 - Interpolación';
  nombre = "Daniel Tovar";
  edad = 21;
  semestre = "Septimo Semestre";
  calificaciones = [9.5, 10, 7, 8, 9, 8, 8.9, 10, 9.5, 9.8]
  promedio = this.calcularPromedio();
  estado = this.estadoAlumno();

  calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < this.calificaciones.length; i++) {
      suma += this.calificaciones[i];
    }
    return suma / this.calificaciones.length;
  }

  estadoAlumno() {
    if (this.promedio >= 6) {
      return "Aprobado";
    } else {
      return "Reprobado";
    }
  }
}
