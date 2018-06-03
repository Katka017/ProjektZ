import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  myControl: FormControl = new FormControl();
  options = [
   'kobieta',
   'mężczyzna',
   
  ];

}


