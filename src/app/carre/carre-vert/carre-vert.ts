import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carre-vert',
  templateUrl: './carre-vert.html',
  styleUrl: './carre-vert.scss'
})
export class CarreVert {
  @Output() couleurClick = new EventEmitter<string>();
  couleur = 'bg-vert';
  onClick() {
    this.couleurClick.emit(this.couleur);
  }
}
