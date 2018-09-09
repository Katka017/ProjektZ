import './polyfills';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { DescribtionComponent } from './describtion/describtion.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { Menu2Component } from './menu2/menu2.component';





import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ZdrowieComponent } from './zdrowie/zdrowie.component';
import { SportComponent } from './sport/sport.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { Recipe1Component } from './recipe1/recipe1.component';
import { Recipe2Component } from './recipe2/recipe2.component';
import { Recipe3Component } from './recipe3/recipe3.component';
import { Recipe4Component } from './recipe4/recipe4.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { Exercise4Component } from './exercise4/exercise4.component';
import { AnimatComponent } from './animat/animat.component';
import { TravelComponent } from './travel/travel.component';

const routes : Routes =[
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'kontakt',
    component: ContactComponent,
  },
  {
    path:'galeria',
    component: GalleryComponent,
  },
  {
    path:'opis',
    component: DescribtionComponent,
  },
  {
    path:'menu',
    component: MenuComponent,
  },
  {
    path:'menu2',
    component: MenuComponent,
  },
  {
    path:'zdrowie',
    component: ZdrowieComponent,
  },
  {
    path:'sport',
    component:SportComponent,
  },
  {
    path:'cwiczenie1',
    component: Exercise1Component,
  },
  {
    path:'cwiczenie2',
    component: Exercise2Component,
  },
  {
    path:'cwiczenie3',
    component: Exercise3Component,
  },
  {
    path:'cwiczenie4',
    component: Exercise4Component,
  },
  {
    path:'podroze',
    component: TravelComponent,
  },
  {
    path:'**',
    component: PageNotFoundComponent,
  },


];

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ]
})


export class DemoMaterialModule {}

@NgModule({
  
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  
  declarations: [
    TravelComponent,
    AnimatComponent,
    AppComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    GalleryComponent,
    ContactComponent,
    DescribtionComponent,
    MenuComponent,
    Menu2Component,
    ZdrowieComponent,
    SportComponent,
    FooterComponent, 
    ErrorComponent,
    Recipe1Component, 
    Recipe2Component, 
    Recipe3Component, 
    Recipe4Component,
    Exercise1Component, 
    Exercise2Component, 
    Exercise3Component, 
    Exercise4Component
  ],
  entryComponents: [Menu2Component, Recipe1Component, Recipe2Component, Recipe3Component, Recipe4Component],
  bootstrap: [AppComponent,Menu2Component],
  providers: []
  
  })


export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
