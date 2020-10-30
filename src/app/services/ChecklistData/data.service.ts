import { Injectable } from '@angular/core';
import { Todo } from 'src/app/types/todos/todo';
import { ListItem } from 'src/app/types/checkoutList/list-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  checkoutListArray = [];
  headphoneLogArray = [];
  constructor() { }


  checkoutHeadphone(checkoutObject: ListItem){
    if (checkoutObject != null){
      this.checkoutListArray.push(checkoutObject);
      return this.checkoutListArray;
    }
    else {
      return null;
  }
}
  
  returnHeadphone(checkoutObject: ListItem){
    for(let i = 0; i < this.checkoutListArray.length; i++){
      if(checkoutObject == this.checkoutListArray[i]){
        this.headphoneLogArray.push(this.checkoutListArray[i]);
        this.checkoutListArray.splice(i, 1);
      }
    }
    return this.checkoutListArray;
  }
  
  updateLog(){
    return this.headphoneLogArray;
  }
}