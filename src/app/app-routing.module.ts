import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeAddComponent } from './cake-add/cake-add.component';
import { CakeGetComponent } from './cake-get/cake-get.component';
import { CakeEditComponent } from './cake-edit/cake-edit.component';

const routes: Routes = [
  {
    path: 'cake/create',
    component: CakeAddComponent
  },
  {
    path: 'edit/:id',
    component: CakeEditComponent
  },
  {
    path: 'cakes',
    component: CakeGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
