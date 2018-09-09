import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-animat',
  templateUrl: './animat.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  styleUrls: ['./animat.component.css'],
})


export class AnimatComponent {
  items = [];


  logAnimation(_event) {
    console.log(_event)
  }
  showItems() {
    ['https://katka017.github.io/html/lux.JPG', 
    'https://katka017.github.io/html/lux4.JPG', 
    'https://katka017.github.io/html/luxx1.JPG',
    'https://katka017.github.io/html/luxxx.jpg'].map((i) => {
      this.items.push(i)
    })

  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }
  
}
