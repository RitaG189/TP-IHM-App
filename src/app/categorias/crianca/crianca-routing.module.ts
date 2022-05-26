import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriancaPage } from './crianca.page';

const routes: Routes = [
  {
    path: '',
    component: CriancaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriancaPageRoutingModule {}
