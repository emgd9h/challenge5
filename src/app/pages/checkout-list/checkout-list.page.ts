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
  private todoForm: FormGroup;
  todoArray = [];
  constructor(private formBuilder: FormBuilder, private ChecklistModel: DataService) {
    this.todoForm = this.formBuilder.group({
      todo: ["", Validators.required],
      done: false
    });
  }
 addTodo(value){
   this.todoArray = this.ChecklistModel.addTodo(this.todoForm.value);
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
   this.todoArray = this.ChecklistModel.deleteItem(todo);
 }


  ngOnInit() {
  }

}
