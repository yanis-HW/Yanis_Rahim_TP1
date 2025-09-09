import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Carre } from "./carre/carre";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Carre, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('YanisRahimTP1');
  public backgroundColor = '';

  onCarreColor(color: string) {
    this.backgroundColor = color;
  }
}
