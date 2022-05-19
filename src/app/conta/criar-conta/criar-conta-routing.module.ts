import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HideHeaderDirective } from 'src/app/directives/hide-header.directive';

import { CriarContaPage } from './criar-conta.page';

const routes: Routes = [
  {
    path: '',
    component: CriarContaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, HideHeaderDirective],
})
export class CriarContaPageRoutingModule {}
