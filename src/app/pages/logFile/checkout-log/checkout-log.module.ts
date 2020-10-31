import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutLogPageRoutingModule } from './checkout-log-routing.module';

import { CheckoutLogPage } from './checkout-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutLogPageRoutingModule
  ],
  declarations: [CheckoutLogPage]
})
export class CheckoutLogPageModule {}
