import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaProdutoPage } from './pagina-produto.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaProdutoPageRoutingModule {}
