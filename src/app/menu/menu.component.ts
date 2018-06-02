import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  @ViewChild (MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod(){
    this.trigger.openMenu();
  }
   

 

}
