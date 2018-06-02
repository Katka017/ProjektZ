import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component  {

  currentPicture=1;

  pictures=[
  'http://s3.party.pl/styl-zycia/zdrowie/cwiczenia-na-pilce-359096-article.jpg',
  'https://hpba.pl/wp-content/uploads/2016/03/15-3.jpg',
  'http://marygrace.pl/wp-content/uploads/2016/03/DSC_9044-1024x882.jpg',
  'http://s3.party.pl/styl-zycia/zdrowie/fitnes-i-sport/kobieta-cwiczaca-na-pilce-332566-article.jpg',
  'https://www.fitplanner.pl/blog/wp-content/uploads/2015/08/cwiczenia-pilates-z-pilka-gimnastyczna-825x510.jpg',
  'https://stopnadwadze.pl/wp-content/uploads/2013/09/body-ball-cwiczenia-jak-to-wyglada-660x330.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7p2046KrFjkm25HYo7zW3594fa2egW2INa0gUrDuO4wiA41a',
  'https://ae01.alicdn.com/kf/HTB1aMWjLpXXXXcDXXXXq6xXFXXXC/Eco-Europ-enne-populaire-multi-usage-paissir-burstproof-pvc-exercice-Yoga-balle-Gym-center-int-rieur.jpg',
  'http://cdn30.poradnikzdrowie.smcloud.net/t/photos/t/51329/pilka-gimnastyczna-jaka-wybrac-rozmiary-i-zalety-pilek-do-cwiczen_3365470.jpg'
];

selectPicture(i){
this.currentPicture = i;
}
}
