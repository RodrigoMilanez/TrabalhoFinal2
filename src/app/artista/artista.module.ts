import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArtistaComponent } from './artista.component'; 
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArtistaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule, 
    FormsModule
  ],
  exports: [
    ArtistaComponent
  ]
})//
export class ArtistaModule {}