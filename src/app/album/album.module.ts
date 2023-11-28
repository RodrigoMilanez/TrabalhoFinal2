import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';;
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlbumComponent } from './album.component';


@NgModule({
  declarations: [
    AlbumComponent],
  imports: [
    CommonModule,
    HttpClientModule, 
    FormsModule, 
    IonicModule
  ],
  exports: [
    AlbumComponent // Se necessário, exporte o componente
  ]
})
export class AlbumModule { }
