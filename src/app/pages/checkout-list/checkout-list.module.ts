import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutListPageRoutingModule } from './checkout-list-routing.module';

import { CheckoutListPage } from './checkout-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CheckoutListPage]
})
export class CheckoutListPageModule {}
