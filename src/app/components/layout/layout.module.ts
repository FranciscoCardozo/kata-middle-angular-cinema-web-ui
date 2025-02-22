import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SeatsSelectorComponent } from '../seats-selector/seats-selector.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SeatsSelectorComponent
  ]
})
export class LayoutModule { }
