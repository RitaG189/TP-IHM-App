import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CestoPageRoutingModule } from './cesto-routing.module';

import { CestoPage } from './cesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CestoPageRoutingModule
  ],
  declarations: [CestoPage]
})
export class CestoPageModule {}
