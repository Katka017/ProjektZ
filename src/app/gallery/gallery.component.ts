import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent 
 {
  currentPicture=0;

  pictures=[
  'https://tractive.com/blog/wp-content/uploads/2018/03/mit-hund-joggen-die-besten-tipps-fuer-hundebesitzer.jpg',
  'https://biegniesz.pl/foto/files/horizontal_bieganiezpsem.jpg',
  'https://portalzdrowiapsaikota.pl/wp-content/uploads/2017/11/Depositphotos_41128185_l-2015-e1510584431436.jpg',
  'https://www.hellozdrowie.pl/media/cache/crop/rc/SyxDcWVn/uploads/photo/page/978576a341f4915f3f622f90c52d2aac4e622592.jpg',
  'http://radoscodkrywania.tchibo.pl/upload/Smycz_do_biegania_z_psem_dla_aktywnych_wacicieli_czworonogow/Specjalna_smycz_do_biegania_dla_psa.jpg',
  'http://bi.gazeta.pl/im/57/d8/14/z21857879V,Psy-moga-miec-klopoty-ze-startymi-poduszkami--pazu.jpg',
  'http://biegamyzpsem.pl/wp-content/uploads/sites/11/2016/08/facb494b-5641-4328-a18a-b0c234d4d7f4.jpg',
  'https://biegambolubie.com.pl/wp-content/uploads/2015/09/na_co_uwa%C5%BCa%C4%87_biegaj%C4%85c_z_psem.jpg',
  'https://piesologia.pl/wp-content/uploads/2016/04/rower7.jpg'
];

selectPicture(i){
this.currentPicture = i;
}

selectNextPicture(){
  if (this.currentPicture<8){
    this.currentPicture=this.currentPicture + 1;
  }
}

selectPrevPicture(){
  if (this.currentPicture>0){
    this.currentPicture=this.currentPicture - 1;}
}


}
