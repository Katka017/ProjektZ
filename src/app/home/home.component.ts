import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  currentPicture=1;
  pictures=[
    'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b66e9d835de3873a86d1cec996a1af06&auto=format&fit=crop&w=1490&q=80',
    'https://images.unsplash.com/photo-1520560447607-3769beb2ce5a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=020061c110fd8e184362ac7c4718e057&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a76e75ea82cc42c0c63081c584cbb70&auto=format&fit=crop&w=1049&q=80',
    

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
