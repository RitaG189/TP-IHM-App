import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocoesPage } from './promocoes.page';

const routes: Routes = [
  {
    path: '',
    component: PromocoesPage
  },
  {
    path: 'tab2',
    loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocoesPageRoutingModule {}
