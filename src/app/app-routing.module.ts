import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'checkout-list',
    pathMatch: 'full'
  },
  {
    path: 'checkout-list',
    loadChildren: () => import('./pages/checkout-list/checkout-list.module').then( m => m.CheckoutListPageModule)
  },
  {
    path: 'checkout-log',
    loadChildren: () => import('./pages/logFile/checkout-log/checkout-log.module').then( m => m.CheckoutLogPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
