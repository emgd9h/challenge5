import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutLogPage } from './checkout-log.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutLogPageRoutingModule {}
