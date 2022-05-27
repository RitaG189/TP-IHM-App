import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaProdutoPageRoutingModule } from './pagina-produto-routing.module';

import { PaginaProdutoPage } from './pagina-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaProdutoPageRoutingModule
  ],
  declarations: [PaginaProdutoPage]
})
export class PaginaProdutoPageModule {}
