import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    slideOpt = {
      initialSlide: 0, //slide por el que inicia
      slidePerView: 1, //slide por vista
      centeredSlides: true, //que las slides esten centradas
      speed: 400 // velocidad del slide
    }
  constructor() {}

}
