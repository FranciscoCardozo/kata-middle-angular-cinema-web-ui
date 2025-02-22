import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  providers:[
    DatePipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
