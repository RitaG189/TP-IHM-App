import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovidadesPageRoutingModule } from './novidades-routing.module';

import { NovidadesPage } from './novidades.page';

import { HideHeaderDirective } from 'src/app/directives/hide-header.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovidadesPageRoutingModule
  ],
  declarations: [NovidadesPage, HideHeaderDirective]
})
export class NovidadesPageModule {}
