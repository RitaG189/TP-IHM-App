import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecemNascidoPageRoutingModule } from './recem-nascido-routing.module';

import { RecemNascidoPage } from './recem-nascido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecemNascidoPageRoutingModule
  ],
  declarations: [RecemNascidoPage]
})
export class RecemNascidoPageModule {}
