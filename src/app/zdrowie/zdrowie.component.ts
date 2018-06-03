import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
  
  @Input() isSelected: boolean = false;

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
