import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Todo } from "src/app/types/todos/todo";
import { DataService } from "src/app/services/ChecklistData/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.page.html',
  styleUrls: ['./checkout-list.page.scss'],
})
export class CheckoutListPage implements OnInit {
  private checkoutListForm: FormGroup;
  checkoutListArray = [];
  constructor(private formBuilder: FormBuilder, private ChecklistModel: DataService, private route: Router) {
    var arrayName = "checkoutList"
    this.checkoutListForm = this.formBuilder.group({
      studentName: ["", Validators.required],
      headphoneOptions: ["", Validators.required],
    });

    this.ChecklistModel.getData("checkoutList").then((checkouts) => {
      if (checkouts) {
        this.checkoutListArray = checkouts;
      }

    });
  }

  logPage(){
    this.route.navigate(['/checkout-log']);
  }

// Code from https://www.codegrepper.com/code-examples/delphi/angular+get+current+time+24hour++from+date 
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

 addItem(){

  var time = (this.formatAMPM(new Date));
  this.checkoutListArray = this.ChecklistModel.checkoutHeadphone({
    headphoneNumber: this.checkoutListForm.value.headphoneOptions,
    timeCheckout: time,
    studentName: this.checkoutListForm.value.studentName,
    returnedTime: null,
    });
    this.checkoutListForm.reset();
    }
  
 
 deleteItem(item){
  var time = (this.formatAMPM(new Date));
   this.checkoutListArray = this.ChecklistModel.returnHeadphone(item, time);
 }


  ngOnInit() {
  }

}
