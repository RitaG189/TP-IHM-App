import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecemNascidoPage } from './recem-nascido.page';

const routes: Routes = [
  {
    path: '',
    component: RecemNascidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecemNascidoPageRoutingModule {}
