import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carre-rouge',
  templateUrl: './carre-rouge.html',
  styleUrl: './carre-rouge.scss'
})
export class CarreRouge {
  @Output() couleurClick = new EventEmitter<string>();
  couleur = 'bg-rouge';
  onClick() {
    this.couleurClick.emit(this.couleur);
  }
}
