import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BebePageRoutingModule } from './bebe-routing.module';

import { BebePage } from './bebe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BebePageRoutingModule
  ],
  declarations: [BebePage]
})
export class BebePageModule {}
