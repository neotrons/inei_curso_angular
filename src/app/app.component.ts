import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curso Angular Inei';
  imageUrl = 'https://via.placeholder.com/150';
  isUnchanged = true;
  classes = 'aClassDemo';
  buttonTitle = 'Ocultar imagen';
  displayNone = '';

  changeTitle(): void {
    console.log(`Evento click para cambiar titulo`);
    this.title = 'nuevo titulo';
  }

  hideImage(): void {
    if (this.displayNone) {
      this.displayNone = '';
      this.buttonTitle = 'Ocultar Imagen';
    }else {
      this.displayNone = 'none';
      this.buttonTitle = 'Mostrar Imagen';
    }
  }
}
