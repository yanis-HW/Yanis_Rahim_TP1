import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carre-bleu',
  templateUrl: './carre-bleu.html',
  styleUrl: './carre-bleu.scss'
})
export class CarreBleu {
  @Output() couleurClick = new EventEmitter<string>();
  couleur = 'bg-bleu';
  onClick() {
    this.couleurClick.emit(this.couleur);
  }
}
