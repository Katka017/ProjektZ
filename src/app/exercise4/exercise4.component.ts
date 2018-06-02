import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css']
})
export class Exercise4Component  {

  currentPicture=1;

  pictures=[
  'http://bharatstories.in/wp-content/uploads/2018/02/Tadasana-Urdhva-Hastasana.jpg',
  'https://static1.squarespace.com/static/53c723f0e4b057b2aaf90c0f/54304560e4b006a41676b612/54304578e4b0d66c87d414ec/1412449706359/032-Adho-Mukha-Svanasana-Jack-Cuneo.jpg',
  'http://www.hyablog.com/wp-content/uploads/2012/04/A0017-IY-110301-185-590x350.jpg',
  'http://www.augustyoga.com/Uploads/Asana/47/vira%203.jpg',
  'http://www.portalyogi.pl/blog/wp-content/uploads/2013/08/joga-pozycja-sklon-do-przodu.jpg',
  'https://www.yogauonline.com/sites/default/files/styles/wellness_blog_level3_main/public/article_images/balasana_fotolia_70924406_subscription_xxl_1500x1000.jpg?itok=7EhVNtg5'
];

selectPicture(i){
this.currentPicture = i;
}

}
