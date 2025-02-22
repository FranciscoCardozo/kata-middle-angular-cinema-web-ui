import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';



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
