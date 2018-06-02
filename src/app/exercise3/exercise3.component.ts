import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component {

  currentPicture=1;

  pictures=[
  'https://www.cosmopolitan.pl/u/ic/W1/u/a/16/04/moda-na-bieganie-trwa-w-najlepsze-podpowiadamy-jak-zaczac_57163dfd.jpeg',
  'http://cdn20.poradnikzdrowie.smcloud.net/t/photos/t/48552/9-porad-jak-zaczac-regularnie-biegac-i-sie-nie-zniechecic_3799198.jpg',
  'https://treningbiegacza.pl/media/cache/poster_780/uploads/media-library/biegac-rano-czy-wieczorem-01.jpg',
  'https://www.fit.pl/img/2015/03/bieganie-wiosna.jpg',
  'http://fitnesownia.com/wp-content/uploads/2016/02/ad9c9d089acf546b42f2feade815c361.jpg'
];

selectPicture(i){
this.currentPicture = i;
}
}
