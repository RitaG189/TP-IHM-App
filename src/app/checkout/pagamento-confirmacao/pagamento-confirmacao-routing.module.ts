import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoConfirmacaoPage } from './pagamento-confirmacao.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoConfirmacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoConfirmacaoPageRoutingModule {}
