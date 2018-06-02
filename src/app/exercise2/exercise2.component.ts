import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component  {

  currentPicture=1;

  pictures=[
  'http://s3.party.pl/styl-zycia/zdrowie/jazda-na-rowerze-358339-article.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfrbQabEmgo8blKEFBrHMQAlr73o7KtDMJzyWEk5UkKncCr7d',
  'http://www.zdrowy-rower.pl/wp-content/uploads/2015/01/Sanofi_zdrowy-rower.pl_.jpg',
  'http://cdn22.poradnikzdrowie.smcloud.net/t/image/t/47500/rozgrzewka-przed-jazda-na-rowerze-zestaw-cwiczen_3352583.jpg',
  'https://1.bp.blogspot.com/-ZfBXnwrGxnE/USLQjoZVTxI/AAAAAAAAJFo/JLomVhczlGw/s1600/DSC07910.JPG'
];

selectPicture(i){
this.currentPicture = i;
}
}
