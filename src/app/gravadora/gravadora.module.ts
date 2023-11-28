import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GravadoraComponent } from './gravadora.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GravadoraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ], 
  exports: [
    GravadoraComponent
  ]
})
export class GravadoraModule { }
