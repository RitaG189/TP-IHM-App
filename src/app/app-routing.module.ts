import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'novidades',
    loadChildren: () => import('./categorias/novidades/novidades.module').then( m => m.NovidadesPageModule)
  },
  {
    path: 'promocoes',
    loadChildren: () => import('./categorias/promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },  {
    path: 'criar-conta',
    loadChildren: () => import('./conta/criar-conta/criar-conta.module').then( m => m.CriarContaPageModule)
  },



  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
