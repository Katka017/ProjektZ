import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component  {
@ViewChild (MatMenuTrigger) trigger: MatMenuTrigger;

someMethod(){
  this.trigger.openMenu();
}
 
}
