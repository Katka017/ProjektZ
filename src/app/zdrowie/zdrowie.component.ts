import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
// import { SportComponent } from '../sport/sport.component';
import { Recipe1Component } from '../recipe1/recipe1.component';
import { Recipe2Component } from '../recipe2/recipe2.component';
import { Recipe3Component } from '../recipe3/recipe3.component';
import { Recipe4Component } from '../recipe4/recipe4.component';


@Component({
  selector: 'app-zdrowie',
  templateUrl: './zdrowie.component.html',
  styleUrls: ['./zdrowie.component.css']
})
export class ZdrowieComponent {
  // @Input() data: Recipe1Component;
  @Input() isSelected: boolean = false;

  // currentPicture=1;

  //   pictures=[
  //   'https://thumb1.shutterstock.com/display_pic_with_logo/619591/162393590/stock-photo-shikara-boat-in-dal-lake-kashmir-india-162393590.jpg',
  //   'https://thumb1.shutterstock.com/display_pic_with_logo/231061/182867159/stock-photo-view-over-the-roofs-of-holy-hindu-town-pushkar-india-182867159.jpg',
  //   'https://thumb1.shutterstock.com/display_pic_with_logo/619591/162393590/stock-photo-shikara-boat-in-dal-lake-kashmir-india-162393590.jpg',
  //   'https://thumb1.shutterstock.com/display_pic_with_logo/231061/721600093/stock-photo-istanbul-turkey-october-the-istanbul-grand-bazaar-is-the-most-famous-oriental-covered-market-721600093.jpg',
  //   'https://thumb1.shutterstock.com/display_pic_with_logo/619591/162393590/stock-photo-shikara-boat-in-dal-lake-kashmir-india-162393590.jpg',

  // ];

//   selectPicture(i){
// this.currentPicture = i;
//   };

constructor (public dialog: MatDialog){

}

  openPicture1(): void {
let dialogRef = this.dialog.open (Recipe1Component, {
  width: '1000px',
  
} );
dialogRef.afterClosed().subscribe();
  };

  openPicture2(): void {
    let dialogRef = this.dialog.open (Recipe2Component, {
      width: '1000px',
      
    } );
    dialogRef.afterClosed().subscribe();
      };

  openPicture3(): void {
    let dialogRef = this.dialog.open (Recipe3Component, {
      width: '1000px',
      
    } );
    dialogRef.afterClosed().subscribe();
      };

  openPicture4(): void {
    let dialogRef = this.dialog.open (Recipe4Component, {
      width: '1000px',
      
    } );
    dialogRef.afterClosed().subscribe();
      }


}
