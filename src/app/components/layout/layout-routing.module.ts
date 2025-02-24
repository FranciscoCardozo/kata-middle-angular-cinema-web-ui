import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MoviesInfoComponent } from '../movies-info/movies-info.component';
import { ReserveComponent } from '../reserve/reserve.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MoviesInfoComponent
      },
      {
        path: 'reservation',
        component: ReserveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
