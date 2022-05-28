import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Adm1Component } from '../component/adm1/adm1.component';

const routes: Routes = [
  {path:"",component:Adm1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
