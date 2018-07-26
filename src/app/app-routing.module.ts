import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeIndexComponent } from './home-index/home-index.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeIndexComponent }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [], exports: [RouterModule]
})
export class AppRoutingModule { }
