import { Injectable } from '@angular/core';
import { Todo } from 'src/app/types/todos/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoArray = [];
  constructor() { }

  addTodo(todoObject:Todo) {
    if (todoObject != null) {
    
      this.todoArray.push(todoObject);

      return this.todoArray;
    } else {
      return null;
    }
  }
  deleteItem(todo) {
    for (let i = 0; i < this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log("delete item");
      }
    }
    return this.todoArray;
  }
}
