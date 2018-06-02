import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {
  currentPicture=1;

  pictures=[
  'https://thumb1.shutterstock.com/display_pic_with_logo/619591/162393590/stock-photo-shikara-boat-in-dal-lake-kashmir-india-162393590.jpg',
  'https://thumb1.shutterstock.com/display_pic_with_logo/231061/182867159/stock-photo-view-over-the-roofs-of-holy-hindu-town-pushkar-india-182867159.jpg',
  'https://thumb1.shutterstock.com/display_pic_with_logo/619591/162393590/stock-photo-shikara-boat-in-dal-lake-kashmir-india-162393590.jpg',
  'https://thumb1.shutterstock.com/display_pic_with_logo/231061/721600093/stock-photo-istanbul-turkey-october-the-istanbul-grand-bazaar-is-the-most-famous-oriental-covered-market-721600093.jpg',
  'https://thumb1.shutterstock.com/display_pic_with_logo/619591/162393590/stock-photo-shikara-boat-in-dal-lake-kashmir-india-162393590.jpg',

];

selectPicture(i){
this.currentPicture = i;
}


}
