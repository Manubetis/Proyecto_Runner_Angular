import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Tallas para el atributo size del modelo Person
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  // Datos de ejemplo para la persona
  model = new Person(1, "Manuel", "Jaén Rojas", "alum.mjaer.2021@iesalixar.org", this.sizes[2], "CAIRS");

  // Control de Formulario enviado por defecto a falso
  submitted = false;

  // Una vez que el formulario se envía entonces se establece a enviado.
  onSubmit() { this.submitted = true; }

  // Método para inicializar una nueva persona:
  newPerson() {
    this.model = new Person(2, "", "", "", "");
  }
}
