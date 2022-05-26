import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CestoPage } from './cesto.page';

const routes: Routes = [
  {
    path: '',
    component: CestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CestoPageRoutingModule {}
