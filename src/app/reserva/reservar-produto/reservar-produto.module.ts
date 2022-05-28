import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservarProdutoPageRoutingModule } from './reservar-produto-routing.module';

import { ReservarProdutoPage } from './reservar-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservarProdutoPageRoutingModule
  ],
  declarations: [ReservarProdutoPage]
})
export class ReservarProdutoPageModule {}
