import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/ChecklistData/data.service";
import { ListItem } from 'src/app/types/checkoutList/list-item';

@Component({
  selector: 'app-checkout-log',
  templateUrl: './checkout-log.page.html',
  styleUrls: ['./checkout-log.page.scss'],
})
export class CheckoutLogPage implements OnInit {
  headphoneLogArray: ListItem[] = [];


  constructor(private ChecklistModel: DataService) {
    this.ChecklistModel.getData("checkoutLog").then((checkouts) => {
      if (checkouts) {
        this.headphoneLogArray = checkouts;
      }

    });
    
   }

  ngOnInit() {
  
  }
  

}


