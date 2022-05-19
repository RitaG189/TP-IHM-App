import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BebePage } from './bebe.page';

const routes: Routes = [
  {
    path: '',
    component: BebePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebePageRoutingModule {}
