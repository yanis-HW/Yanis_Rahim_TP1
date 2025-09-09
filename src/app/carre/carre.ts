import { Component, Output, EventEmitter } from '@angular/core';
import { CarreBleu } from './carre-bleu/carre-bleu';
import { CarreRouge } from './carre-rouge/carre-rouge';
import { CarreJaune } from './carre-jaune/carre-jaune';
import { CarreVert } from './carre-vert/carre-vert';

@Component({
  selector: 'app-carre',
  imports: [CarreBleu, CarreRouge, CarreJaune, CarreVert],
  templateUrl: './carre.html',
  styleUrl: './carre.scss'
})
export class Carre {
  @Output() couleurClick = new EventEmitter<string>();

  onCouleurClick(couleur: string) {
    this.couleurClick.emit(couleur);
  }
}
