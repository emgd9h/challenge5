import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutListPage } from './checkout-list.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutListPageRoutingModule {}
