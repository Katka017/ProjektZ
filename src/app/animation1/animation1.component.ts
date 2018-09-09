import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-animation1',
  templateUrl: './animation1.component.html',
 
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
  styleUrls: ['./animation1.component.css']
})


export class Animation1Component {
  items = [];


  logAnimation(_event) {
    console.log(_event)
  }
  showItems() {
    ['https://katka017.github.io/html/wieza.JPG', 
    'https://katka017.github.io/html/daniel.JPG', 
    'https://katka017.github.io/html/par2.JPG',
    'https://katka017.github.io/html/par3.JPG'].map((i) => {
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
