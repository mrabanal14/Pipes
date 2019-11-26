import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activarContrasena:boolean): any {  

    let pass:string = "";

    if (activarContrasena) {
      for (let i = 0; i< value.length; i++) {
        pass += "*";
      }
    }
    else {
      pass = value;
    }

    return pass;
  }


}
