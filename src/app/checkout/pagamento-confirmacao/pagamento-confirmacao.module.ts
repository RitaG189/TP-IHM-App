import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoConfirmacaoPageRoutingModule } from './pagamento-confirmacao-routing.module';

import { PagamentoConfirmacaoPage } from './pagamento-confirmacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentoConfirmacaoPageRoutingModule
  ],
  declarations: [PagamentoConfirmacaoPage]
})
export class PagamentoConfirmacaoPageModule {}
