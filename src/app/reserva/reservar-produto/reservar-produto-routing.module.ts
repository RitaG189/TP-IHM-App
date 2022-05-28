import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservarProdutoPage } from './reservar-produto.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarProdutoPageRoutingModule {}
