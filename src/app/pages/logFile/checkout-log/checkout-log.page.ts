import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/ChecklistData/data.service";

@Component({
  selector: 'app-checkout-log',
  templateUrl: './checkout-log.page.html',
  styleUrls: ['./checkout-log.page.scss'],
})
export class CheckoutLogPage implements OnInit {
  headphoneLogArray = [];
  private updateTheLog(){
    this.headphoneLogArray = this.ChecklistModel.updateLog();
  }

  constructor(private ChecklistModel: DataService) {
    
   }

  ngOnInit() {
    this.updateTheLog();
  }
  

}


