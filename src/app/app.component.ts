import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Miguel';
  
  nombre2 = 'miguel raBaNal sErrano';

  arreglo = [0,1,2,3,4,5,6,7,8,9];
  
  PI = Math.PI;
  
  a = 0.234;
  
  salario= 1234.5;
  
  heroe = {
    nombre: 'Miguel',
    clave: 'Miguelon',
    edad: 500,
    direccion: {
      calle: 'Preciados',
      numero: 1
    }
  }

  valorDePromesa = new Promise((resolve, reject) =>  {
    setTimeout(() => resolve('Llegó la data!'), 3500);
  })

  fecha = new Date();

  video = "6zWTbm8Q-8E";

  contrasena = "Cucaracha14.";
  private activarContrasena:boolean = true;
  nombreBoton:string ="Desactivar";

  cambiarNombreBoton() {
    if (this.nombreBoton == "Desactivar") {
      this.nombreBoton = "Activar";
    }
    else {
      this.nombreBoton = "Desactivar";
    }
  }
}
