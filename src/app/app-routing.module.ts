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
  },
  {
    path: 'criar-conta',
    loadChildren: () => import('./conta/criar-conta/criar-conta.module').then( m => m.CriarContaPageModule)
  },
  {
    path: 'bebe',
    loadChildren: () => import('./categorias/bebe/bebe.module').then( m => m.BebePageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta/conta.module').then( m => m.ContaPageModule)
  },  {
    path: 'recem-nascido',
    loadChildren: () => import('./categorias/recem-nascido/recem-nascido.module').then( m => m.RecemNascidoPageModule)
  },
  {
    path: 'crianca',
    loadChildren: () => import('./categorias/crianca/crianca.module').then( m => m.CriancaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./conta/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'seguranca',
    loadChildren: () => import('./conta/seguranca/seguranca.module').then( m => m.SegurancaPageModule)
  },
  {
    path: 'encomendas',
    loadChildren: () => import('./conta/encomendas/encomendas.module').then( m => m.EncomendasPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./conta/ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import('./conta/sobre-nos/sobre-nos.module').then( m => m.SobreNosPageModule)
  },
  {
    path: 'cesto',
    loadChildren: () => import('./cesto/cesto.module').then( m => m.CestoPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./checkout/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'confirmacao',
    loadChildren: () => import('./checkout/confirmacao/confirmacao.module').then( m => m.ConfirmacaoPageModule)
  }



  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
