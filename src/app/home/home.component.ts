import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  currentPicture=1;
  pictures=[
    'https://katka017.github.io/html/z3.jpg',
    'https://katka017.github.io/html/z2.jpg',
    'https://katka017.github.io/html/z1.jpg',
    

  ];

  selectPicture(i){
this.currentPicture = i;
  }


  selectNextPicture(){
    if (this.currentPicture < 2)
   
  { return this.currentPicture=this.currentPicture + 1;}
}

selectPrevPicture(){
   if (this.currentPicture>0){
    this.currentPicture=this.currentPicture - 1;}
}

  // ngOnInit() {
  // }

}
