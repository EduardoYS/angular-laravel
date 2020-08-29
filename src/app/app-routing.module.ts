import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component'
const routes: Routes = [
    {path:'',  redirectTo:'/book',  pathMatch: 'full', },
    {path:'book', component:BookComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
