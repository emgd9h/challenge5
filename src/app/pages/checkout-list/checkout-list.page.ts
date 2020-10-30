import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Todo } from "src/app/types/todos/todo";
import { DataService } from "src/app/services/ChecklistData/data.service";

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.page.html',
  styleUrls: ['./checkout-list.page.scss'],
})
export class CheckoutListPage implements OnInit {
  private checkoutListForm: FormGroup;
  checkoutListArray = [];
  constructor(private formBuilder: FormBuilder, private ChecklistModel: DataService) {
    this.checkoutListForm = this.formBuilder.group({
      studentName: ["", Validators.required],
      headphoneOptions: ["", Validators.required],
    });
  }
 addTodo(value){
   this.checkoutListArray= this.ChecklistModel.addTodo(this.checkoutListForm.value);
   function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  var x = (formatAMPM(new Date));
  console.log(x);
  
 }
 deleteItem(todo){
   this.checkoutListArray = this.ChecklistModel.deleteItem(todo);
 }


  ngOnInit() {
  }

}
