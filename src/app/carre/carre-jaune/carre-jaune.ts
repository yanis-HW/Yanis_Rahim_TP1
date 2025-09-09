import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carre-jaune',
  templateUrl: './carre-jaune.html',
  styleUrl: './carre-jaune.scss'
})
export class CarreJaune {
  @Output() couleurClick = new EventEmitter<string>();
  couleur = '#ffb900';
  onClick() {
    this.couleurClick.emit(this.couleur);
  }
}
